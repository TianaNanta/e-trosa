from typing import Optional, Union

from fastapi import Depends, Request
from fastapi_users import (
    BaseUserManager,
    FastAPIUsers,
    IntegerIDMixin,
    InvalidPasswordException,
)
from fastapi_users.authentication import (
    AuthenticationBackend,
    BearerTransport,
    JWTStrategy,
)

from etrosa.db.dao.user_dao import get_user_db
from etrosa.db.models.user_model import UserModel
from etrosa.web.api.users.schema import UserCreate

bearer_transport = BearerTransport(tokenUrl="auth/jwt/login")

SECRET = "SECRET"

def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600)

auth_backend = AuthenticationBackend(
    name="jwt",
    transport=bearer_transport,
    get_strategy=get_jwt_strategy,
)

class UserManager(IntegerIDMixin, BaseUserManager[UserModel, int]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET
    
    async def on_after_register(self, user: UserModel, request: Optional[Request] = None):
        print(f"User {user.id} has registered.")

    async def on_after_forgot_password(
        self, user: UserModel, token: str, request: Optional[Request] = None
    ):
        print(f"User {user.id} has forgot their password. Reset token: {token}")

    async def on_after_request_verify(
        self, user: UserModel, token: str, request: Optional[Request] = None
    ):
        print(f"Verification requested for user {user.id}. Verification token: {token}")
        
    async def validate_password(
        self,
        password: str,
        user: Union[UserCreate, UserModel],
    ) -> None:
        if len(password) < 8:
            raise InvalidPasswordException(
                reason="Password should be at least 8 characters"
            )
        if user.email in password:
            raise InvalidPasswordException(
                reason="Password should not contain e-mail"
            )
        
async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)
    
fastapi_user = FastAPIUsers[UserModel, int](
    get_user_manager,
    [auth_backend],
)

current_active_user = fastapi_user.current_user(active=True)