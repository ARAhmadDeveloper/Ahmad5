from datetime import timedelta
from multiprocessing import get_context
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from model.user_model import UserDB
from utils.utils_helper import ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token, decode_token
from validations.validation import UserCreate, UserLogin
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# =====================================================

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def hash_password(plain_password):
    return pwd_context.hash(plain_password)

# =====================================================



def get_user_by_id(user_id: int, db: Session = Depends(get_db)):
    try:
        user = db.query(UserDB).filter(UserDB.id == user_id).first()
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





def register_new_user(user: UserCreate, db: Session = Depends(get_db)):
    try:
        user_hashed_password = hash_password(user.password)
        new_user = UserDB(
            email=user.email,
            password=user_hashed_password,
            is_active=user.is_active
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        
        # Create access token for the new user
        token = create_access_token(
            data={"sub": new_user.email, "user_id": new_user.id}, 
            expires_delta=timedelta(minutes=int(ACCESS_TOKEN_EXPIRE_MINUTES))
        )
        print("User_Email ======================", new_user.email)
        print("user_id ======================", new_user.id)
        user_data = {
            "id": new_user.id,
            "email": new_user.email,
            "is_active": new_user.is_active,
            "token": token
        }
        
        return {
            "data": user_data,
            "message": "User created successfully and logged in",
            "Status": 201
        }
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error creating user",
            "Status": 500
        }

def login_user(user_credentials: UserLogin, db: Session = Depends(get_db)):
    try:
        user = db.query(UserDB).filter(UserDB.email == user_credentials.email).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
            
        # Verify the password using the verify_password function
        if not verify_password(user_credentials.password, user.password):
            raise HTTPException(status_code=401, detail="Incorrect password")
            
        token = create_access_token(
            data={"sub": user.email, "user_id": user.id}, 
            expires_delta=timedelta(minutes=int(ACCESS_TOKEN_EXPIRE_MINUTES))
        )
        print("user_id ======================", user.id)
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


# Logout User on basis of token
# def logout_user(token: str, db: Session = Depends(get_db)):
    try:
        # Decode the JWT token
        payload = decode_token(token)
        if not payload or "Error" in payload:
            raise HTTPException(status_code=401, detail="Invalid token")
            
        email = payload.get("sub")
        if not email:
            raise HTTPException(status_code=401, detail="Invalid token payload")
            
        # Verify user exists
        user = db.query(UserDB).filter(UserDB.email == email).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
            
        # Invalidate token by adding to blacklist (you would need to implement token blacklisting)
        # For now, we'll just return success
        return {
            "data": {
                "id": user.id,
                "email": user.email,
                "is_active": user.is_active
            },
            "message": "User logged out successfully",
            "Status": 200
        }
    except HTTPException as he:
        raise he
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error logging out user",
            "Status": 500
        }





# Logout User on basis of user_id
def logout_user(user_id: str, db: Session = Depends(get_db)):
    try:
        # Verify user exists
        user = db.query(UserDB).filter(UserDB.id == user_id).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
            
        # Invalidate token by adding to blacklist (you would need to implement token blacklisting)
        # For now, we'll just return success
        return {
            "User": user,
            "message": "User logged out successfully",
            "Status": 200
        }
    except HTTPException as he:
        raise he
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error logging out user",
            "Status": 500
        }

















