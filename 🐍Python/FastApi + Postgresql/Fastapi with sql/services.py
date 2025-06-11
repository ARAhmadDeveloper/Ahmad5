from models import MyUser
from schemas import UserCreate
from db import get_db
from sqlalchemy.orm import Session
from fastapi import HTTPException

def get_user(db: Session):
    try:
        return db.query(MyUser).all()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def create_user(db: Session, user: UserCreate):
    try:
        db.add(MyUser(name=user.name, email=user.email, password=user.password))
        db.commit()
        return db.query(MyUser).all()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    
    
    
def update_user(db: Session, user_id: int, user: UserCreate):
    try:
        # First check if user exists
        existing_user = db.query(MyUser).filter(MyUser.id == user_id).first()
        if not existing_user:
            raise HTTPException(status_code=404, detail="User not found")
            
        # Update user fields
        existing_user.name = user.name
        existing_user.email = user.email
        existing_user.password = user.password
        
        db.commit()
        db.refresh(existing_user)
        return existing_user
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    
    
    
def delete_user(db: Session, user_id: int):
    try:
        # First check if user exists
        existing_user = db.query(MyUser).filter(MyUser.id == user_id).first()
        if not existing_user:
            raise HTTPException(status_code=404, detail="User not found")
            
        # Delete the user
        db.delete(existing_user)
        db.commit()
        return {"message": f"User with id {user_id} has been deleted successfully", "Deleted User": existing_user}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
