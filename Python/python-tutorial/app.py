from fastapi import FastAPI, UploadFile

app = FastAPI()

@app.get("/")

def home():
   return {"Data" : "Welcome Home"}
    
@app.get("/contact")
def contact():
   return{"Data" : "Welcome Contact"}

@app.post("/upload")
def image(files: list[UploadFile]):
   return{"Data" : "Gotit"}
   
   
# end def
    
import uvicorn
uvicorn.run(app)