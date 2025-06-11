from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config.database import get_db
from controllers.todo_controllers import create_todo_controller, delete_todo_controller, get_todo_controller, get_todos_controller, update_todo_controller
from model.todo_model import Todo
from utils.utils_helper import verify_token
from validations.validation import TodoCreate


todo_router = APIRouter()



   
@todo_router.post("/create")
def create_todo(todo: TodoCreate, token: str = Depends(verify_token), db: Session = Depends(get_db)):
    try:
        return create_todo_controller(todo, db)
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error creating todo",
            "Status": 500
        }



#Get all Todos
@todo_router.get("/")
def get_todos(db: Session = Depends(get_db), token: str = Depends(verify_token)):
     try:
         return get_todos_controller(db)
     except Exception as e:
         return {
             "Error": str(e),
             "message": "Error retrieving todos",
             "Status": 500
         }
   
   
    
@todo_router.get("/{todo_id}")
def get_todo(todo_id: int, db: Session = Depends(get_db)):
    try:
        return get_todo_controller(todo_id, db)
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error retrieving todo",
            "Status": 500
        }
    

@todo_router.put("/update/{todo_id}")
def update_todo(todo_id: int, todo: TodoCreate, db: Session = Depends(get_db)):
    try:
        return update_todo_controller(todo_id, todo, db)
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error updating todo",
            "Status": 500
        }
    
    
    
@todo_router.delete("/delete/{todo_id}")
def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    try:
        return delete_todo_controller(todo_id, db)
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error deleting todo",
            "Status": 500
        }



