from pydantic import BaseModel


class UserBase(BaseModel):
    name: str
    email: str
    password: str

class UserCreate(UserBase):
    pass


class UserResponse(UserBase):
    id: int
    
    class Config:
        from_attributes = True
        
    


