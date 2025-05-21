from pydantic import BaseModel, ConfigDict
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
    
    
model_config =  ConfigDict(
    json_encoders={
        datetime: lambda v: v.strftime("%d-%m-%Y %H: %M: %S")
    }
)
    
    
    
    
users = User(
    id=3434,
    name="Hello User",
    email="Hello@hello.com",
    address=Address(
        street="Hello Street",
        city= "Hello City",
        postal_code="Hello 001123004",
    ),
    create_at= datetime(2025, 3, 15,11, 30, 22),
    is_active=True,
    tags=["premium", "Subscriber", "follower"]
)

# print(users)

# Using model_dump -> dict

py_dict = users.model_dump()
print(py_dict)

print("========================================")

# Using model_dump_json()

py_json = users.model_dump_json()
print(py_json)
































