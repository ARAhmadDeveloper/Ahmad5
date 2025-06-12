from .database import Base, engine
from .models.user import User
from .models.todo import Todo
from .models.token_blacklist import TokenBlacklist

def init_db():
    # Create tables if they don't exist
    Base.metadata.create_all(bind=engine)
    print("Database tables initialized successfully") 