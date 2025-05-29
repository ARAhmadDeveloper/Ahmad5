from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import engine, SessionLocal
from model.todo_model import Todo
from typing import List
from pydantic import BaseModel
from datetime import datetime
# Create Database Tables
Todo.metadata.create_all(bind=engine)

# Initialize FastAPI App
app = FastAPI()

# Dependency to get Database Session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
        
# Pydantic Models for Validation
class TodoCreate(BaseModel):
    title: str
    description: str
    completed: bool = False
    
class TodoResponse(BaseModel):
    id: int
    title: str
    description: str
    completed: bool
    created_at: datetime
    
    
    
#Create new Todo
@app.post("/todos/", response_model=TodoResponse)
def create_todo(todo: TodoCreate, db: Session = Depends(get_db)):
    try:
       new_todo = Todo(
           title=todo.title,
           description=todo.description,
           completed=todo.completed
       )
       db.add(new_todo)
       db.commit()
       db.refresh(new_todo)
       return new_todo
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#Get all Todos
@app.get("/todos/", response_model=List[TodoResponse])
def get_todos(db: Session = Depends(get_db)):
    try:
        todos = db.query(Todo).all()
        return todos
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    