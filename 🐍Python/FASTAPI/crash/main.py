from fastapi    import FastAPI
from typing import List
from pydantic import BaseModel


app = FastAPI()

class Code(BaseModel):
    id: int
    code: str
    language: str



codes: List[Code] = []


@app.get("/")
def read_root():
    return {"message": "Welcome to the Code API"} 


@app.get("/code")
def get_code():
    # display all codes
    return codes


@app.post("/code")
def create_code(code: Code):
    codes.append(code)
    return {"message": "Code created successfully", "code": codes}


@app.put("/code/{code_id}")
def update_code(code_id: int, code: Code):
    for i, c in enumerate(codes):
        if c.id == code_id:
            codes[i] = code
            return {"message": "Code updated successfully", "code": codes}
    return {"message": "Code not found"}


@app.delete("/code/{code_id}")
def delete_code(code_id: int):
    for i, c in enumerate(codes):
        if c.id == code_id:
            deleted = codes.pop(i)
            return {"message": "Code deleted successfully", "code": deleted}
    return {"message": "Code not found"}











