from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException
from passlib.context import CryptContext
from controllers.user_controllers import register_new_user, login_user, logout_user, get_user_by_id
from sqlalchemy.orm import Session
from config.database import get_db
from validations.validation import UserCreate, UserLogin

user_router = APIRouter()


@user_router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    try:
        return register_new_user(user, db)
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error registering user",
            "Status": 500
        }



@user_router.post("/login")
def login(user_credentials: UserLogin, db: Session = Depends(get_db)):
    try:
        return login_user(user_credentials, db)
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error logging in user",
            "Status": 500
        }



@user_router.post("/logout")
def logout(user_id: str, db: Session = Depends(get_db)):
    try:
        return logout_user(user_id, db)
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error logging out user",
            "Status": 500
        }
    
    
    
# get user with id
@user_router.get("/users/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    try:
        return get_user_by_id(user_id, db)
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error retrieving user",
            "Status": 500
        }
