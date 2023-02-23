from datetime import datetime, timedelta
from typing import Optional

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt

from etrosa.db.dao.user_dao import UserDAO
from etrosa.db.models.user_model import User
from etrosa.settings import settings
from etrosa.web.api.user.schema import TokenData

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/user/login")

async def authenticate_user(email: str, password: str, user_dao: UserDAO = Depends()) -> Optional[User]:
    """
    Authenticate user by email and password.
    
    :param email: email of a user.
    :param password: password of a user.
    :return: user.
    """
    user_dao = UserDAO()
    user = await user_dao.get_user_by_email(email)
    if not user:
        return None
    if not user_dao.verify_password(password, user.hashed_password):
        return None
    return user

async def create_access_token(data: dict, expires_delta: Optional[int] = None) -> str:
    """
    Create access token.
    
    :param data: data.
    :param expires_delta: expiration time.
    :return: access token.
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + timedelta(seconds=expires_delta)
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme), user_dao: UserDAO = Depends()) -> User:
    """
    Get current user.
    
    :param token: token.
    :return: user.
    """
    user_dao = UserDAO()
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except jwt.JWTError:
        raise credentials_exception
    user = await user_dao.get_user_by_email(email=token_data.email)
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(current_user: User = Depends(get_current_user)) -> User:
    """
    Get current active user.
    
    :param current_user: current user.
    :return: user.
    """
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user