from pydantic import BaseModel # type: ignore

class BookBase(BaseModel):
    title: str
    description: str
    author: str
    year: int = 2025

class BookCreate(BookBase):
    pass


class Book(BookBase):
    id: int

    class Config:
        from_attributes = True
        


