import json
from openai import AsyncOpenAI
from agents import Agent, OpenAIChatCompletionsModel, Runner,function_tool
import os
from dotenv import load_dotenv
from pymongo import MongoClient
from typing import Dict, Any
from datetime import datetime

# Load environment variables first
load_dotenv()

# Get MongoDB connection string from environment variable
mongodb_uri = os.getenv('MONGODB_URI')
if not mongodb_uri:
    raise ValueError("MONGODB_URI environment variable is not set")

# Connect to MongoDB
conn = MongoClient(mongodb_uri)

# Set up database and collection
db = conn["myapp"]
todos_collection = db["todos"]

gemini_api_key = os.getenv('GEMINI_API_KEY')

client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)



@function_tool
def list_todos() -> list:
    """List all todos from the MongoDB database."""
    try:
        print("Listing todos from MongoDB...")
        todos_list = list(todos_collection.find())
        for todo in todos_list:
            todo["id"] = str(todo["id"])
        return todos_list
    except Exception as e:
        raise Exception(f"Failed to list todos: {str(e)}")
    

@function_tool
def add_todo(title: str, description: str = "", due_date: str = "") -> Dict[str, Any]:
    """Add a new todo to the MongoDB database with auto-incrementing ID."""
    try:
        # Get the highest existing ID
        highest_todo = todos_collection.find_one(sort=[("id", -1)])
        new_id = 1 if not highest_todo else highest_todo["id"] + 1

        new_todo = {
            "id": new_id,
            "title": title,
            "description": description,
            "completed": False,
            "dueDate": due_date if due_date else datetime.now().strftime("%Y-%m-%d"),
        }
        result = todos_collection.insert_one(new_todo)
        new_todo["id"] = str(result.inserted_id)
        return new_todo
    except Exception as e:
        raise Exception(f"Failed to add todo: {str(e)}")

@function_tool
def delete_todo(id: int) -> Dict[str, Any]:
    """Delete a todo from the MongoDB database by custom integer ID."""
    try:
        deleted_todo = todos_collection.find_one_and_delete({"id": id})
        if not deleted_todo:
            raise ValueError(f"Todo with ID {id} not found.")
        deleted_todo["id"] = str(deleted_todo["id"])
        return deleted_todo
    except Exception as e:
        raise Exception(f"Failed to delete todo: {str(e)}")

    
@function_tool
def update_todo(id: int, title: str, description: str = "", due_date: str = "") -> Dict[str, Any]:
    """Update a todo in the MongoDB database by custom integer ID."""
    try:
        updated_fields = {
            "title": title,
            "description": description,
            "dueDate": due_date if due_date else datetime.now().strftime("%Y-%m-%d"),
        }

        updated_todo = todos_collection.find_one_and_update(
            {"id": id},  # Using custom 'id' field instead of '_id'
            {"$set": updated_fields},
            return_document=True
        )
        if not updated_todo:
            raise ValueError(f"Todo with ID {id} not found.")
        # Keep the original id as integer, don't convert to string
        return updated_todo
    except Exception as e:
        raise Exception(f"Failed to update todo: {str(e)}")


agent = Agent(
    name="Todos Assistant",
    instructions="You are an expert of todos. You can add, list, and complete todos.",
    model=OpenAIChatCompletionsModel(model="gemini-2.0-flash", openai_client=client),
    tools=[list_todos, add_todo, delete_todo, update_todo],
)

query = input("Enter the query: ")

result = Runner.run_sync(
    agent,
    query,
)

print(result.final_output)