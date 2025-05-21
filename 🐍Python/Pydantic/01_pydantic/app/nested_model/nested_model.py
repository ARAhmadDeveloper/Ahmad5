from typing import List, Optional
from pydantic import BaseModel

class Address(BaseModel):
    street: str
    city: str
    postal_code: str
    
    
class User(BaseModel):
    id: int
    name: str
    address: Address
    
    
class Comment(BaseModel):
    id: int
    content: str
    replies: Optional[List['Comment']] = None
    
Comment.model_rebuild()


address = Address(
    street="123 Hello Address",
    city="Hello City",
    postal_code="P-3545"
)

print("address >>>", address)

user = User(
    id=334,
    name="Hello User Name",
    address=address
)

print("Users -----", user)

comment = Comment(
    id=535435,
    content="Hello Content",
    replies=[
        Comment(id=3434, content="Hello Reply 1"),
        Comment(id=2222, content="Hello Reply 2")
        
    ]
)

print("Comments //////", comment)