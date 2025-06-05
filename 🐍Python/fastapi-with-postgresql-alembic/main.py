from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from config.database import engine
from model.todo_model import Todo
from routes.todo_routes import todo_router
from routes.user_routes import user_router
# Create Database Tables
Todo.metadata.create_all(bind=engine)

# Initialize FastAPI App
app = FastAPI()

#Add routes
app.include_router(todo_router, prefix="/todos", tags=["Todos"])
app.include_router(user_router, prefix="/users", tags=["Users"])




 
    
            
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    