from typing import Optional
from fastapi import Depends, HTTPException
import jwt 
from fastapi.security import OAuth2PasswordBearer, APIKeyHeader
from datetime import datetime, timedelta
from config.database import engine
from model.user_model import UserDB
from passlib.context import CryptContext
import os


SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# =====================================================

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def hash_password(plain_password):
    return pwd_context.hash(plain_password)

# =====================================================

API_KEY_NAME = "X-API-KEY"

api_key_header = APIKeyHeader(name=API_KEY_NAME, auto_error=False)



def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    try:
        to_encode = data.copy()
        expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
        to_encode.update({"exp": expire})
        return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    except Exception as e:
        return {
            "Error": str(e),
            "message": "Error creating access token",
            "Status": 500
        }



def decode_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except Exception as e:
        return {
            "Error": "Unable to decode token",
            "message": "Error decoding token",
            "Status": 500   
        }



def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        decoded_token = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        if decoded_token:
            return decoded_token
        else:
            return HTTPException(status_code=401, detail="Token not parseable")
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
    except Exception as e:
        print('An exception occurred')
        print(e)
        return HTTPException(status_code=401, detail="Invalid token")





# def verify_token(token: str = Depends(oauth2_scheme)):
#     try:
#         decoded_token = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM]) # type: ignore
#         if decoded_token:
#             return decoded_token
#         else:
#             return HTTPException(status_code=401, detail="Token not parseable")
#     except jwt.ExpiredSignatureError:
#         raise HTTPException(status_code=401, detail="Token expired")
#     except jwt.InvalidTokenError:
#         raise HTTPException(status_code=401, detail="Invalid token")
#     except Exception as e:
#         print('An exception occurred')
#         print(e)
#         return HTTPException(status_code=401, detail="Invalid token")
    
    



def verify_api_key(api_key_header: str = Depends(api_key_header)):
    try:
        if not api_key_header:
            raise HTTPException(status_code=401, detail="API key is required")
            
        stored_api_key = os.getenv("SECURE_API_KEY")
        if not stored_api_key:
            raise HTTPException(status_code=500, detail="API key not configured")
            
        if api_key_header != stored_api_key:
            raise HTTPException(status_code=401, detail="Invalid API key")
            
        return api_key_header
    except HTTPException as he:
        raise he
    except Exception as e:
        print('An exception occurred:', str(e))
        raise HTTPException(status_code=401, detail="Invalid API key")