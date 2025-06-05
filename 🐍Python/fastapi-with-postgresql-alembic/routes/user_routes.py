from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from model.user_model import UserDB
from utils.utils_helper import ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token
from validations.validation import UserCreate, UserLogin
import uuid

user_router = APIRouter()

@user_router.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    try:
        new_user = UserDB(
            email=user.email,
            password=user.password,
            is_active=user.is_active
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return {
            "data": new_user,
            "message": "User created successfully",
            "Status": 201
        }
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error creating user",
            "Status": 500
        }

@user_router.post("/login")
def login_user(user_credentials: UserLogin, db: Session = Depends(get_db)):
    try:
        user = db.query(UserDB).filter(UserDB.email == user_credentials.email).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        if user.password != user_credentials.password:
            raise HTTPException(status_code=401, detail="Incorrect password")
        token = create_access_token(data={"sub": user.email}, expires_delta=timedelta(minutes=int(ACCESS_TOKEN_EXPIRE_MINUTES)))
        user_data = {
            "id": user.id,
            "email": user.email,
            "is_active": user.is_active,
            "token": token
        }
        return {
            "data": user_data,
            "message": "User logged in successfully",
            "Status": 200
        }
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error logging in user",
            "Status": 500
        }



@user_router.get("/logout")
def logout_user(email: str, db: Session = Depends(get_db)):
   try:
       user = db.query(UserDB).filter(UserDB.email == email).first()
       if not user:
           raise HTTPException(status_code=404, detail="User not found")
       return {
           "data": user,
           "message": "User retrieved successfully",
           "Status": 200
       }
   except Exception as e:
       return {
           "Error": str(e),
           "message": "Error retrieving user",
           "Status": 500
       }
    

