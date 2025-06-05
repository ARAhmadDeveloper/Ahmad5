from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
from pydantic import BaseModel
from datetime import datetime

Base = declarative_base()

# SQLAlchemy model for database operations
class UserDB(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(50), unique=True, index=True)
    password = Column(String(50), index=True)
    created_at = Column(DateTime, default=func.now())
    is_active = Column(Boolean, default=True)
    
    def __repr__(self):
        return f"<User(id={self.id}, email={self.email}, is_active={self.is_active})>"

# Pydantic models for request/response validation
class UserBase(BaseModel):
    email: str
    password: str
    created_at: datetime
    is_active: bool = True
    

class User(UserBase):
    id: int
    created_at: datetime
    is_active: bool
    
    class Config:
        from_attributes = True
    