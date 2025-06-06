from pydantic import BaseModel

class UserBase(BaseModel):
    name: str
    email: str
    password: str
    
class UserCreate(UserBase):
    pass
    
class User(UserBase):
    id: int
    
class UserInDB(UserBase):
    id: int
    
    class config:
        from_attributes = True