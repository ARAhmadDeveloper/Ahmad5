from db import engine
from models import Base

def recreate_tables():
    # Drop all tables
    Base.metadata.drop_all(bind=engine)
    # Create all tables
    Base.metadata.create_all(bind=engine)
    print("Database tables have been recreated successfully!")

if __name__ == "__main__":
    recreate_tables() 