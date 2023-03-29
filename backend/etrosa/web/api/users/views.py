from typing import List

from fastapi import APIRouter, Depends
from etrosa.db.models.user_model import UserModel

from etrosa.web.api.users.schema import UserBase, UserShow

router = APIRouter()


@router.get("", response_model=List[UserShow])
async def get_all_users(
    limit: int = 10,
    offset: int = 0,
    ) -> List[UserModel]:
    return