from sqlalchemy import Column, Integer, String, Boolean, func
from sqlalchemy.ext.declarative import declarative_base
import datetime
from sqlalchemy.types import DateTime

Base = declarative_base()

class Todo(Base):
    __tablename__ = "todos"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, nullable=False)
    completed = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

    

class User(Base):
    
    __tablename__ = "users"
    
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(50), unique=True, index=True)
    password = Column(String(500), index=True)
    created_at = Column(DateTime, default=func.now())
    is_active = Column(Boolean, default=True)
    
    
