from typing import List

from fastapi_users.db import SQLAlchemyBaseUserTable
from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql.sqltypes import String

from etrosa.db.base import Base
from etrosa.db.meta import meta
from etrosa.db.models.trosa_model import TrosaModel

trosa_own = Table(
    "Volako",
    meta,
    Column("user", ForeignKey("user.email")),
    Column("vola", ForeignKey("trosa.id"))
)

trosa_dept = Table(
    "Trosa",
    meta,
    Column("user", ForeignKey("user.email")),
    Column("trosa", ForeignKey("trosa.id"))
)


class UserModel(SQLAlchemyBaseUserTable[int], Base):
    """ User Model """
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    avatar: Mapped[str] = mapped_column(String(length=250), nullable=True)
    trosaown: Mapped[List[TrosaModel]] = relationship(secondary=trosa_own)
    trosadept: Mapped[List[TrosaModel]] = relationship(secondary=trosa_dept)