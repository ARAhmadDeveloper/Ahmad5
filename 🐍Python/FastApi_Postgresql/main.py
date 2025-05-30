from fastapi import FastAPI, Depends, HTTPException, status
from db import create_table
import services, models, schemas
from sqlalchemy.orm import Session
from db import get_db, engine



app = FastAPI()

@app.get("/", response_model=list[schemas.UserResponse])
def read_root(db:Session = Depends(get_db)):
    return services.get_users(db)

@app.post("/", response_model=schemas.UserResponse)
def create_user(user:schemas.UserCreate, db:Session = Depends(get_db)):
    return services.create_user(db, user)

@app.get("/{user_id}", response_model=schemas.UserResponse)
def get_user(user_id:int, db:Session = Depends(get_db)):
    return services.get_user_by_id(db, user_id)



@app.put("/{user_id}", response_model=schemas.UserResponse)
def update_user(user_id:int, user:schemas.UserCreate, db:Session = Depends(get_db)):
    return services.update_user(db, user_id, user)

@app.delete("/{user_id}", response_model=schemas.UserResponse)
def delete_user(user_id:int, db:Session = Depends(get_db)):
    return services.delete_user(db, user_id)















