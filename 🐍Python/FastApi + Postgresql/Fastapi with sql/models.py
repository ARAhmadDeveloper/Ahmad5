from sqlalchemy import Column, Integer, String
from db import Base

class MyUser(Base):
    __tablename__ = "MyUsers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    

