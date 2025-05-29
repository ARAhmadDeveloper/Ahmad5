from models import Users
from schemas import UserCreate, UserResponse
from sqlalchemy.orm import Session
from fastapi import  HTTPException, status


def create_user(db:Session, user:UserCreate):
    try:
        user_instance = Users(name=user.name, email=user.email, password=user.password)
        db.add(user_instance)
        db.commit()
        db.refresh(user_instance)
        return user_instance
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    

def get_users(db:Session):
    try:
        users = db.query(Users).all()
        return users
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
        





