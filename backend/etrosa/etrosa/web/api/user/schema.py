from typing import Optional

from pydantic import BaseModel, EmailStr


class UserBase(BaseModel):
    name: str
    email: EmailStr

class UserCreate(UserBase):
    password: Optional[str]
    
class UserShow(UserBase):
    disabled: bool
    id: int

class UserAvatar(BaseModel):
    avatar: Optional[bytes]
    
class Token(BaseModel):
    access_token: str
    token_type: str
    
class TokenData(BaseModel):
    email: Optional[EmailStr]