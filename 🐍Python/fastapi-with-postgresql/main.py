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
    
    
@app.get("/todos/{todo_id}", response_model=TodoResponse)
def get_todo(todo_id: int, db: Session = Depends(get_db)):
    try:
        # Validate todo_id
        if todo_id <= 0:
            raise HTTPException(status_code=400, detail="Invalid todo ID. ID must be a positive integer.")
            
        db_todo = db.query(Todo).filter(Todo.id == todo_id).first()
        if not db_todo:
            raise HTTPException(status_code=404, detail="Todo not found")
        return db_todo
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    
    
    
    
    
    

@app.put("/todos/{todo_id}", response_model=TodoResponse)
def update_todo(todo_id: int, todo: TodoCreate, db: Session = Depends(get_db)):
    try:
        db_todo = db.query(Todo).filter(Todo.id == todo_id).first()
        if not db_todo:
            raise HTTPException(status_code=404, detail="Todo not found")
        for field, value in todo.model_dump().items():
            setattr(db_todo, field, value)
        db.commit()
        db.refresh(db_todo)
        return db_todo
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    
    
@app.delete("/todos/{todo_id}", response_model=TodoResponse)
def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    try:
        db_todo = db.query(Todo).filter(Todo.id == todo_id).first()
        if not db_todo:
            raise HTTPException(status_code=404, detail="Todo not found")
        db.delete(db_todo)
        db.commit()
        return db_todo
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    
    
            
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    