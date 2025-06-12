from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime, timedelta
from ..database import Base

class TokenBlacklist(Base):
    __tablename__ = "token_blacklist"

    id = Column(Integer, primary_key=True, index=True)
    token = Column(String, unique=True, index=True)
    blacklisted_on = Column(DateTime, default=datetime.utcnow)
    expires_at = Column(DateTime)

    @classmethod
    def is_blacklisted(cls, db, token: str) -> bool:
        # Check if token exists and hasn't expired
        blacklisted_token = db.query(cls).filter(
            cls.token == token,
            cls.expires_at > datetime.utcnow()
        ).first()
        return blacklisted_token is not None

    @classmethod
    def cleanup_expired_tokens(cls, db):
        # Remove expired tokens from blacklist
        db.query(cls).filter(cls.expires_at <= datetime.utcnow()).delete()
        db.commit() 