from typing import List, Optional
from passlib.context import CryptContext

from etrosa.db.models.user_model import User

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserDAO:
    """ Class for accessing User Table. """
    
    def hash_password(self, password: str) -> str:
        """
        Hash password.
        
        :param password: password of a user.
        :return: hashed password.
        """
        return pwd_context.hash(password)
    
    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        """
        Verify password.
        
        :param plain_password: plain password of a user.
        :param hashed_password: hashed password of a user.
        :return: boolean.
        """
        return pwd_context.verify(plain_password, hashed_password)
    
    async def create_user_model(self, name: str, email: str, hashed_password: Optional[str]) -> None:
        """
        Add single dummy to session.
        
        :param name: name of a dummy.
        """
        await User.create(name=name, email=email, hashed_password=hashed_password)
        
    async def get_all_users(self, limit: int, offset: int) -> List[User]:
        """
        Get all dummy models with limit/offset pagination.
        
        :param limit: limit of dummies.
        :param offset: offset of dummies.
        :return: stream of dummies.
        """
        return await User.all().offset(offset).limit(limit)
    
    async def get_user_by_email(self, email: str) -> Optional[User]:
        """
        Get dummy by email.
        
        :param email: email of a dummy.
        :return: dummy.
        """
        return await User.filter(email=email).first()
    
    async def update_avatar(self, user_id: int, avatar: bytes) -> None:
        """
        Update avatar of a user.
        
        :param user_id: id of a user.
        :param avatar: avatar of a user.
        """
        await User.filter(id=user_id).update(avatar=avatar)
    
    # function to delete user model
    async def delete_user(self, user_id: int) -> None:
        """
        Delete user.
        
        :param user_id: id of a user.
        """
        await User.filter(id=user_id).delete()
    