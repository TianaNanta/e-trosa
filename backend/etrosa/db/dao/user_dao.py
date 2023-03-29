from typing import List, Optional

from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi_users.db import SQLAlchemyUserDatabase

from etrosa.db.dependencies import get_db_session
from etrosa.db.models.user_model import UserModel


async def get_user_db(session: AsyncSession = Depends(get_db_session)):
    yield SQLAlchemyUserDatabase(
        session=session,
        user_table=UserModel,
    )
    
class UserDAO:
    """ class for accessing user table """
    
    def __init__(self, session: AsyncSession = Depends(get_db_session)):
        self.session = session