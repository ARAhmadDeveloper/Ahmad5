from database import Base
from sqlalchemy import Column, Integer, String # type: ignore

class Book(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False, index=True)
    description = Column(String, nullable=False, index=True)
    author = Column(String, nullable=False, index=True)
    year = Column(Integer)
    

