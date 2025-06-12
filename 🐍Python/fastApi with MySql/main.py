from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Annotated
from database import engine, Base, SessionLocal
import models

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

class postBase(BaseModel):
    title: str
    content: str
    user_id: int
    

class UserBase(BaseModel):
    username: str
    

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
db_dependency = Annotated[Session, Depends(get_db)]

@app.post("/users")
def create_user(user: UserBase, db: db_dependency):
    db_user = models.User(username=user.username)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/{user_id}", response_model=UserBase)
def get_user(user_id: int, db: db_dependency):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/posts")
def create_post(post: postBase, db: db_dependency):
    db_post = models.Post(title=post.title, content=post.content, user_id=post.user_id)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

@app.get("/posts/{post_id}", response_model=postBase)
def get_post(post_id: int, db: db_dependency):
    db_post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if db_post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return db_post

@app.get("/users/{user_id}/posts", response_model=list[postBase])
def get_user_posts(user_id: int, db: db_dependency):
    db_posts = db.query(models.Post).filter(models.Post.user_id == user_id).all()
    return db_posts

