from typing import Optional

from pydantic import BaseModel, EmailStr


class UserBase(BaseModel):
    name: str
    first_name: str
    email: EmailStr

class UserCreate(UserBase):
    password: Optional[str]
    
class UserShow(UserBase):
    avatar: Optional[bytes]
    is_active: bool

class UserAvatar(BaseModel):
    avatar: Optional[bytes]
    
class Token(BaseModel):
    access_token: str
    token_type: str
    
class TokenData(BaseModel):
    email: Optional[str] = None