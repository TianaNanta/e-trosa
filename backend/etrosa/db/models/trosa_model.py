from datetime import datetime

from sqlalchemy import DateTime
from sqlalchemy.orm import Mapped, mapped_column

from etrosa.db.base import Base


class TrosaModel(Base):
    """ Trosa model """
    
    __tablename__ = "trosa"
    
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    amount: Mapped[int] = mapped_column(nullable=False, default=0)
    createat: Mapped[DateTime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    