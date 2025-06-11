from sqlalchemy import Integer, String, Boolean, ForeignKey, Column, Float, DateTime
from sqlalchemy.orm import relationship
from typing import List, Annotated
from database import Base

class Questions(Base):
    __tablename__ = 'questions'
    
    id = Column(Integer, primary_key=True, index=True)
    question_text = Column(String, index=True)
    choices = relationship("Choices", back_populates="question")
    
    
class Choices(Base):
    __tablename__ = 'choices'
    
    id = Column(Integer, primary_key=True, index=True)
    choice_text = Column(String, index=True)
    question_id = Column(Integer, ForeignKey('questions.id'), index=True)
    is_correct = Column(Boolean, index=True)
    question = relationship("Questions", back_populates="choices")