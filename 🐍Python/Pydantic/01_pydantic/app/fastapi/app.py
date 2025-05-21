from fastapi import FastAPI, Depends
from pydantic import BaseModel, EmailStr

app = FastAPI()


class UserSignup(BaseModel):
    username: str
    email: EmailStr
    password: str
    
class Settings(BaseModel):
    app_name: str = "Default App_Name"
    admin_email: EmailStr = "admin@admin.com"
    
    
def get_setting():
    return Settings()


@app.post('/signup')
def signup(user: UserSignup):
    return {'message':f"User {user.username} Signed Up Successfully"}

@app.get('setting')
def get_setting_endpoint(setting: Settings = Depends(get_setting)):
    return setting
