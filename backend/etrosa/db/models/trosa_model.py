from datetime import datetime

from sqlalchemy.orm import Mapped, mapped_column

from etrosa.db.base import Base


class TrosaModel(Base):
    """ Trosa model """
    
    __tablename__ = "trosa"
    
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    amount: Mapped[int] = mapped_column(nullable=False, default=0)
    createat: Mapped[datetime] = mapped_column(datetime, datetime.utcnow())
    