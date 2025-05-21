from pydantic import BaseModel, Field, field_validator, model_validator, computed_field

class User(BaseModel):
    id: int
    name: str
    email: str
    password: str
    
    @field_validator("id")
    def id_validate(cls, v):
        if v < 4:
            raise ValueError("Id must be atleast 4 characters ")
        return v
    
    
    
class Signup(BaseModel):
    password: str
    confirmPassword: str
    
    @model_validator(mode='after')
    def passwordValidator(cls, values):
        if values.password != values.confirmPassword:
            raise ValueError("password do not match")
        return values
    
    
    
class Product(BaseModel):
    price: float
    quantity: int
    
    
    @computed_field
    @property
    def productValidate(self) -> float:
        return self.price * self.quantity