from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel

App = FastAPI()

class Data(BaseModel):
    name: str


@App.post("/create")
async def create(data: Data):
    return {
        "data": data
    }

@App.post("/test/{item_id}")
async def test(item_id: int):
    return {"message": f"Hello World {item_id}"}