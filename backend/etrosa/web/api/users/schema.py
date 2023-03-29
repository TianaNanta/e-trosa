from typing import List

from fastapi_users import schemas

from etrosa.web.api.trosa.schema import TrosaRead


class UserRead(schemas.BaseUser[int]):
    avatar: str
    trosaown: List[TrosaRead]
    trosadept: List[TrosaRead]

class UserUpdate(schemas.BaseUserUpdate):
    avatar: str

class UserCreate(schemas.BaseUserCreate):
    avatar: str