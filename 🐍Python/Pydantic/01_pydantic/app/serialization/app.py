from pydantic import BaseModel
from typing import List
from datetime import datetime




class Address(BaseModel):
    street: str
    city: str
    postal_code: str
    
    
class User(BaseModel):
    id: int
    name: str
    email: str
    address: Address
    create_at: datetime
    is_active: bool = True
    tags: List[str] = []
    
    
    
    
users = User(
    id=3434,
    name="Hello User",
    email="Hello@hello.com",
    address=Address(
        street="Hello Street",
        city= "Hello City",
        postal_code="Hello 001123004",
    ),
    create_at= datetime(2025, 3, 15,11, 30),
    is_active=True,
    tags=["premium", "Subscriber", "follower"]
)

# print(users)

# Using module_dump -> dict

py_dict = users.model_dump()
print(py_dict)

































