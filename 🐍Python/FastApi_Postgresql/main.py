from fastapi import FastAPI, Depends, HTTPException, status
import services, schemas
from sqlalchemy.orm import Session
from db import get_db   



app = FastAPI()

@app.get("/", response_model=list[schemas.UserResponse])
def read_root(db:Session = Depends(get_db)):
    return services.get_users(db)

@app.post("/", response_model=schemas.UserResponse)
def create_user(user:schemas.UserCreate, db:Session = Depends(get_db)):
    return services.create_user(db, user)


















