from pydantic_settings import BaseSettings
from functools import lru_cache
from dotenv import load_dotenv
import os
from urllib.parse import quote_plus

load_dotenv()

class Settings(BaseSettings):
    # Database Configuration
    DB_USER: str = "postgres"
    DB_PASSWORD: str = "Ahmad@5570"
    DB_HOST: str = "localhost"
    DB_NAME: str = "todo_db"
    
    @property
    def DATABASE_URL(self) -> str:
        password = quote_plus(self.DB_PASSWORD)
        return f"postgresql://{self.DB_USER}:{password}@{self.DB_HOST}/{self.DB_NAME}"
    
    # JWT Configuration
    SECRET_KEY: str = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        env_file = ".env"
        case_sensitive = True

@lru_cache()
def get_settings():
    return Settings()