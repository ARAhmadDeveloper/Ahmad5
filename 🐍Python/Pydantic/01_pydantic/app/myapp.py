from pydantic import BaseModel  # type: ignore


class User(BaseModel):
    id: int
    name: str
    email: str
    password: str
    isStudent: bool

input_data = {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "isStudent": True
}


user = User(**input_data)

print(user)

