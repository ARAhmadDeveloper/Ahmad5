from models import Users
from schemas import UserCreate
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
        

def get_user_by_id(db:Session, user_id:int):
    try:
        user_instance = db.query(Users).filter(Users.id == user_id).first()
        if user_instance:
            return user_instance
        else:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid user id")
    
    
    




def update_user(db:Session, user_id:int, user:UserCreate):
    try:
        user_instance = db.query(Users).filter(Users.id == user_id).first()
        if not user_instance:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
        
        user_instance.name = user.name
        user_instance.email = user.email
        user_instance.password = user.password
        
        db.commit()
        db.refresh(user_instance)
        return user_instance
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


def delete_user(db:Session, user_id:int):
    try:
        user_instance = db.query(Users).filter(Users.id == user_id).first()
        if not user_instance:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
        
        db.delete(user_instance)
        db.commit()
        return user_instance
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))





