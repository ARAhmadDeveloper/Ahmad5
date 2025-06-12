from datetime import timedelta, datetime
from typing import Annotated
from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import or_
import time
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response
from jose import jwt, JWTError

from .database import engine, get_db, Base
from .models.todo import Todo
from .models.user import User
from .models.token_blacklist import TokenBlacklist
from .schemas import todo as todo_schemas
from .schemas import user as user_schemas
from .auth import (
    create_access_token,
    get_current_active_user,
    oauth2_scheme
)
from .config import get_settings
from .init_db import init_db

settings = get_settings()

# Initialize database
init_db()

app = FastAPI(
    title="Todo API",
    description="A FastAPI-based Todo application with authentication",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add Trusted Host middleware
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["*"]  # In production, replace with specific hosts
)

# Add Gzip compression middleware
app.add_middleware(GZipMiddleware, minimum_size=1000)

# Add Request Timing middleware
class RequestTimingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        try:
            start_time = time.time()
            response = await call_next(request)
            process_time = time.time() - start_time
            response.headers["X-Process-Time"] = str(process_time)
            return response
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"An error occurred during request processing: {str(e)}"
            )

app.add_middleware(RequestTimingMiddleware)



# Add Security Headers middleware
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        try:
            response = await call_next(request)
            response.headers["X-Content-Type-Options"] = "nosniff"
            response.headers["X-Frame-Options"] = "DENY"
            response.headers["X-XSS-Protection"] = "1; mode=block"
            response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
            return response
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"An error occurred during security headers processing: {str(e)}"
            )

app.add_middleware(SecurityHeadersMiddleware)



# Authentication endpoints
@app.post("/register", response_model=user_schemas.Token)
def register_user(user: user_schemas.UserCreate, db: Session = Depends(get_db)):
    try:
        # Check if username already exists
        db_user = db.query(User).filter(User.username == user.username).first()
        if db_user:
            raise HTTPException(
                status_code=400,
                detail="Username already registered"
            )
        
        # Check if email already exists
        db_user = db.query(User).filter(User.email == user.email).first()
        if db_user:
            raise HTTPException(
                status_code=400,
                detail="Email already registered"
            )
        
        # Create new user
        hashed_password = User.get_password_hash(user.password)
        db_user = User(
            email=user.email,
            username=user.username,
            hashed_password=hashed_password
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)

        # Generate access token
        access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": db_user.username}, expires_delta=access_token_expires
        )
        
        return {
            "data": db_user,
            "access_token": access_token,
            "token_type": "bearer",
            "message": "Successfully registered",
            "status": 200
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred during registration: {str(e)}"
        )

@app.get("/validate-token")
async def validate_token(
    current_user: User = Depends(get_current_active_user)
):
    try:
        return {
            "valid": True,
            "user": {
                "username": current_user.username,
                "email": current_user.email,
                "id": current_user.id
            }
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )

@app.post("/token", response_model=user_schemas.Token)
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: Session = Depends(get_db)
):
    try:
        # Try to find user by username or email
        user = db.query(User).filter(
            or_(
                User.username == form_data.username,
                User.email == form_data.username
            )
        ).first()
        
        if not user or not User.verify_password(form_data.password, user.hashed_password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username/email or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": user.username}, expires_delta=access_token_expires
        )
        return {"access_token": access_token, "token_type": "bearer"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred during login: {str(e)}"
        )



@app.post("/logout")
async def logout(
    token: Annotated[str, Depends(oauth2_scheme)],
    db: Session = Depends(get_db)
):
    try:
        # Decode token to get expiration
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        exp = payload.get("exp")
        if exp:
            expires_at = datetime.fromtimestamp(exp)
        else:
            expires_at = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
        
        # Add token to blacklist with expiration
        blacklisted_token = TokenBlacklist(
            token=token,
            expires_at=expires_at
        )
        db.add(blacklisted_token)
        db.commit()
        
        # Cleanup expired tokens
        TokenBlacklist.cleanup_expired_tokens(db)
        
        return {"message": "Successfully logged out"}
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        )



# Protected todo endpoints
@app.post("/todos/", response_model=todo_schemas.Todo)
def create_todo(
    todo: todo_schemas.TodoCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    try:
        db_todo = Todo(**todo.model_dump(), user_id=current_user.id)
        db.add(db_todo)
        db.commit()
        db.refresh(db_todo)
        return db_todo
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred during todo creation: {str(e)}"
        )




@app.get("/todos/", response_model=list[todo_schemas.Todo])
def read_todos(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    try:
        todos = db.query(Todo).filter(Todo.user_id == current_user.id).offset(skip).limit(limit).all()
        return todos
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while retrieving todos: {str(e)}"
        )




@app.get("/todos/{todo_id}", response_model=todo_schemas.Todo)
def read_todo(
    todo_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    try:
        todo = db.query(Todo).filter(Todo.id == todo_id, Todo.user_id == current_user.id).first()
        if todo is None:
            raise HTTPException(status_code=404, detail="Todo not found")
        return todo
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while retrieving todo: {str(e)}"
        )




@app.put("/todos/{todo_id}", response_model=todo_schemas.Todo)
def update_todo(
    todo_id: int,
    todo_update: todo_schemas.TodoUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    try:
        db_todo = db.query(Todo).filter(Todo.id == todo_id, Todo.user_id == current_user.id).first()
        if db_todo is None:
            raise HTTPException(status_code=404, detail="Todo not found")
    
        update_data = todo_update.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_todo, field, value)
    
        db.commit()
        db.refresh(db_todo)
        return db_todo
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while updating todo: {str(e)}"
        )



@app.delete("/todos/{todo_id}")
def delete_todo(
    todo_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    try:
        db_todo = db.query(Todo).filter(Todo.id == todo_id, Todo.user_id == current_user.id).first()
        if db_todo is None:
            raise HTTPException(status_code=404, detail="Todo not found")
    
        db.delete(db_todo)
        db.commit()
        return {"message": "Todo deleted successfully"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while deleting todo: {str(e)}"
        )





