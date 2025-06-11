from typing import Optional
from fastapi import Depends, HTTPException
import jwt 
from fastapi.security import OAuth2PasswordBearer
from datetime import datetime, timedelta
from config.database import engine
from model.user_model import UserDB
import os


SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

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
    