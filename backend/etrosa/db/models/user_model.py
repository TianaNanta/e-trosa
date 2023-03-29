from typing import List

from sqlalchemy import Column, ForeignKey, Table
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql.sqltypes import String

from etrosa.db.base import Base
from etrosa.db.meta import meta
from etrosa.db.models.trosa_model import TrosaModel

trosa_own = Table(
    "Volako",
    meta,
    Column("user", ForeignKey("users.username")),
    Column("vola", ForeignKey("trosa.id"))
)

trosa_dept = Table(
    "Trosa",
    meta,
    Column("user", ForeignKey("users.username")),
    Column("trosa", ForeignKey("trosa.id"))
)


class UserModel(Base):
    """ User Model """
    
    __tablename__ = "users"
    
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    username: Mapped[str] = mapped_column(String(length=200), unique=True, index=True)  # noqa: WPS432
    email: Mapped[str] = mapped_column(String(length=250), unique=True, index=True, nullable=True)
    password: Mapped[str] = mapped_column(String(length=300), nullable=True)
    avatar: Mapped[str] = mapped_column(String(length=250), nullable=True)
    trosaown: Mapped[List[TrosaModel]] = relationship(secondary=trosa_own)
    trosadept: Mapped[List[TrosaModel]] = relationship(secondary=trosa_dept)