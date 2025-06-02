from fastapi import FastAPI, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from sqlalchemy.orm import Session
import time

from db import get_db, create_table
import services, schemas, models

# Initialize FastAPI app
app = FastAPI()

# Create tables on startup
create_table()

# === MIDDLEWARES ===

@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    print("===============================", response.headers)
    return response


# 1. GZip – compress large JSON responses
app.add_middleware(GZipMiddleware, minimum_size=1000)

# 2. CORS – allow your frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use specific URLs in production!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)





# 3. Logging – log request method, path, time, and status
class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start_time = time.time()
        response = await call_next(request)
        duration = time.time() - start_time
        print(f"[{request.method}] {request.url.path} → {response.status_code} ({duration:.2f}s)")
        return response

app.add_middleware(LoggingMiddleware)

# === ROUTES ===

@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/users")
async def read_users(db: Session = Depends(get_db)):
    return services.get_user(db)


@app.post("/users")
async def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return services.create_user(db, user)


@app.put("/users/{user_id}")
async def update_user(user_id: int, user: schemas.UserCreate, db: Session = Depends(get_db)):
    return services.update_user(db, user_id, user)

@app.delete("/users/{user_id}")
async def delete_user(user_id: int, db: Session = Depends(get_db)):
    return services.delete_user(db, user_id)
