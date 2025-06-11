from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel
from typing import List, Annotated
from database import SessionLocal
import models
from sqlalchemy.orm import Session


app = FastAPI()

class ChoiceBase(BaseModel):
    choice_text: str
    is_correct: bool
    
class ChoiceResponse(ChoiceBase):
    id: int
    question_id: int
    
    class Config:
        from_attributes = True

class QuestionBase(BaseModel):
    question_text: str
    choices: List[ChoiceBase]

class QuestionResponse(QuestionBase):
    id: int
    choices: List[ChoiceResponse]
    
    class Config:
        from_attributes = True

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.post("/question", response_model=QuestionResponse, status_code=status.HTTP_201_CREATED)
async def create_question(question: QuestionBase, db: db_dependency):
    try:
        # Create the question
        db_question = models.Questions(question_text=question.question_text)
        db.add(db_question)
        db.commit()
        db.refresh(db_question)
        
        # Create the choices
        for choice in question.choices:
            db_choice = models.Choices(
                choice_text=choice.choice_text,
                question_id=db_question.id,
                is_correct=choice.is_correct
            )
            db.add(db_choice)
        db.commit()
        
        # Refresh the question to get the choices
        db.refresh(db_question)
        
        # Return the complete question with choices
        return db_question
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )



@app.get("/question/{question_id}", response_model=QuestionResponse)
async def get_question(question_id: int, db: db_dependency):
    try:
        db_question = db.query(models.Questions).filter(models.Questions.id == question_id).first()
        if db_question is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Question not found"
            )
        
        # Return the question with choices
        return db_question
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
        


@app.get("/question/{question_id}/choices", response_model=List[ChoiceResponse])
async def get_choices(question_id: int, db: db_dependency):
    try:
        db_choices = db.query(models.Choices).filter(models.Choices.question_id == question_id).all()
        if db_choices is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Choices not found"
            )
        
        # Return the choices
        return db_choices
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
        
        


@app.post("/question/{question_id}/choices", response_model=ChoiceResponse, status_code=status.HTTP_201_CREATED)
async def create_choice(question_id: int, choice: ChoiceBase, db: db_dependency):
    try:
        # Create the choice
        db_choice = models.Choices(
            choice_text=choice.choice_text,
            question_id=question_id,
            is_correct=choice.is_correct
        )
        db.add(db_choice)
        db.commit()
        db.refresh(db_choice)
        
        # Return the complete choice
        return db_choice
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )



























