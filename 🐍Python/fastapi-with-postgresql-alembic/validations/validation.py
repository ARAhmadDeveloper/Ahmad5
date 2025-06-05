from pydantic import BaseModel
from datetime import datetime



# Pydantic Models for Validation
class TodoCreate(BaseModel):
    title: str
    description: str
    completed: bool = False
    
class TodoResponse(BaseModel):
    id: int
    title: str
    description: str
    completed: bool
    created_at: datetime
    
    
class UserCreate(BaseModel):
    email: str
    password: str
    is_active: bool = True
    
    
class UserResponse(BaseModel):
    id: int
    email: str
    created_at: datetime
    is_active: bool
    
    
class UserLogin(BaseModel):
    email: str
    password: str
    