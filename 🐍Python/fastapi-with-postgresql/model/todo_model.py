from sqlalchemy import Column, Integer, String, Boolean
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

    

class Todos(Base):
    __tablename__ = "todos2"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, nullable=False)
    completed = Column(Boolean, default=False)
    status = Column(String, default="pending")
    


    
    
