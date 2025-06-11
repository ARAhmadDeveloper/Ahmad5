from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from model.todo_model import Todo
from validations.validation import TodoCreate

def create_todo_controller(todo: TodoCreate, db: Session):
    try:
        new_todo = Todo(
            title=todo.title,
            description=todo.description,
            completed=todo.completed
        )
        db.add(new_todo)
        db.commit()
        db.refresh(new_todo)
        return {
            "data": new_todo,
            "message": "Todo created successfully",
            "Status": 201
        }
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error creating todo",
            "Status": 500
        }


def get_todos_controller(db: Session = Depends(get_db)):
    try:
        todos = db.query(Todo).all()
        return {
            "data": todos,
            "message": "Todos retrieved successfully",
            "Status": 200
        }
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error retrieving todos",
            "Status": 500
        }
        
        
        
def get_todo_controller(todo_id: int, db: Session = Depends(get_db)):
    try:
        todo = db.query(Todo).filter(Todo.id == todo_id).first()
        if not todo:
            raise HTTPException(status_code=404, detail="Todo not found")
        return {
            "data": todo,
            "message": "Todo retrieved successfully",
            "Status": 200
        }
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error retrieving todo",
            "Status": 500
        }        
        
        
        
        
        
def update_todo_controller(todo_id: int, todo: TodoCreate, db: Session = Depends(get_db)):
    try:
        db_todo = db.query(Todo).filter(Todo.id == todo_id).first()
        if not db_todo:
            raise HTTPException(status_code=404, detail="Todo not found")
        for field, value in todo.model_dump().items():
            setattr(db_todo, field, value)
        db.commit()
        db.refresh(db_todo)
        return {
            "data": db_todo,
            "message": "Todo updated successfully",
            "Status": 200
        }
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error updating todo",
            "Status": 500
        }      
        
        
       
       
def delete_todo_controller(todo_id: int, db: Session = Depends(get_db)):
    try:
        db_todo = db.query(Todo).filter(Todo.id == todo_id).first()
        if not db_todo:
            raise HTTPException(status_code=404, detail="Todo not found")
        db.delete(db_todo)
        db.commit()
        return {
            "data": db_todo,
            "message": "Todo deleted successfully",
            "Status": 200
        }
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error deleting todo",
            "Status": 500
        }
    
          
       
       
       
        
        
        