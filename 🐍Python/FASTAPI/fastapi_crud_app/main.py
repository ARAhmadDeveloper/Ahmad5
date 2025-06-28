from fastapi import FastAPI, Depends, HTTPException
import schemas
from sqlalchemy.orm import Session
from models import Book
from schemas import BookCreate
from services import create_book, get_books, get_book
from database import get_db, engine


app = FastAPI()

@app.get("/books", response_model=list[schemas.BookCreate])
def get_books(db: Session = Depends(get_db)):
    return get_books(db)


@app.post("/books", response_model=schemas.BookCreate)
async def create_book(book: BookCreate, db: Session = Depends(get_db)):
    return create_book(db, book)

