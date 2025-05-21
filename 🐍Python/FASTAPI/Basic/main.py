from typing import Union
from fastapi import FastAPI, Request # type: ignore
from fastapi.responses import HTMLResponse # type: ignore
from fastapi.staticfiles import StaticFiles # type: ignore
from fastapi.templating import Jinja2Templates # type: ignore
from pymongo import MongoClient

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

conn = MongoClient("mongodb+srv://arahmaddeveloper:L7gXT6l69RATJOUX@mongowithpython.fdo0wtp.mongodb.net")


@app.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    docs = conn.notes.notes.find_one({})
    print(docs)
    return templates.TemplateResponse(
        request=request, name="index.html"
    )
    
    
    
    
    
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q} 