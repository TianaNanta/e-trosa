from typing import List
from datetime import timedelta

from fastapi import APIRouter, Depends, File, HTTPException, status, UploadFile
from fastapi.security import OAuth2PasswordRequestForm

from etrosa.db.dao.user_dao import UserDAO
from etrosa.db.models.user_model import User
from etrosa.web.api.user.schema import UserAvatar, UserBase, UserCreate, UserShow, Token
from etrosa.settings import settings
from etrosa.services.user_auth import authenticate_user, create_access_token, get_current_user, get_current_active_user

router = APIRouter()

@router.get("", response_model=List[UserShow])
async def get_users(
    limit: int = 10,
    offset: int = 0,
    user_dao: UserDAO = Depends(),
) -> List[User]:
    """
    Retrieve all users from the database.

    :param limit: limit of users, defaults to 10.
    :param offset: offset of users, defaults to 0.
    :param user_dao: DAO for users.
    :return: list of users from database.
    """
    return await user_dao.get_all_users(limit=limit, offset=offset)

@router.post("/signup", response_model=UserShow)
async def create_user(
    user: UserCreate,
    user_dao: UserDAO = Depends(),
) -> User:
    """
    Create a new user.

    :param user: user to create.
    :param user_dao: DAO for users.
    :return: created user.
    """
    return await user_dao.create_user_model(
        name=user.name,
        email=user.email,
        hashed_password=user_dao.hash_password(user.password),
    )
    
@router.post("/login", response_model=Token)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
):
    """
    Login for access token.

    :param form_data: form data.
    :param user_dao: DAO for users.
    :return: user.
    """
    user = await authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = await create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {
        "access_token": access_token,
        "token_type": "bearer",
    }
    
@router.get("/me", response_model=UserShow)
async def get_current_user(
    user: UserShow = Depends(get_current_user),
):
    """
    Get current user.

    :param user: user.
    :return: user.
    """
    return user

# PUT method to update user avatar
@router.put("/avatar")
async def update_avatar(
    avatar: UploadFile = File(...),
    user: User = Depends(get_current_user),
    user_dao: UserDAO = Depends(),
):
    """
    Update avatar of a user.

    :param avatar: avatar of a user.
    :param user: user.
    :param user_dao: DAO for users.
    :return: user.
    """
    await user_dao.update_avatar(user_id=user.id, avatar=avatar.file.read())
    
# DELETE method to delete authenticated user
@router.delete("/me")
async def delete_user(
    user: User = Depends(get_current_user),
    user_dao: UserDAO = Depends(),
):
    """
    Delete authenticated user
    
    :param user: User.
    :param user_dao: DAO for users.
    """
    await user_dao.delete_user(user_id=user.id)