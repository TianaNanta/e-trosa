from typing import List, Optional

from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from etrosa.db.dependencies import get_db_session
from etrosa.db.models.user_model import UserModel

class UserDAO:
    """ class for accessing user table """
    
    def __init__(self, session: AsyncSession = Depends(get_db_session)):
        self.session = session
    
    async def get_all_users(
        self,
        limit: int,
        offset: int,
    ) -> List[UserModel]:
        query = await self.session.execute(
            select(UserModel).limit(limit).offset(offset)
        )
        return query.scalars().all()