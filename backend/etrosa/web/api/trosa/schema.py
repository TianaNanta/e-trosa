from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class TrosaRead(BaseModel):
    id: int
    amount: int
    createat: Optional[datetime]
    
class TrosaCreate(BaseModel):
    amount: int
    
class TrosaUpdate(BaseModel):
    amount: int