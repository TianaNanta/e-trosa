from typing import List

from fastapi import APIRouter, Depends
from fastapi_users import FastAPIUsers

from etrosa.db.models.user_model import UserModel
from etrosa.services.jwtauth import auth_backend, current_active_user, fastapi_user
from etrosa.web.api.users.schema import UserCreate, UserRead, UserUpdate

router = APIRouter()

# Login and Logout routes
router.include_router(
    fastapi_user.get_auth_router(auth_backend),
    prefix="/auth",
)

# Register routes
router.include_router(
    fastapi_user.get_register_router(UserRead, UserCreate),
    prefix="",
)

# Update routes
router.include_router(
    fastapi_user.get_users_router(UserRead, UserUpdate),
    prefix="",
)

# Reset password routes
router.include_router(
    fastapi_user.get_reset_password_router(),
    prefix="",
)

# Verify
router.include_router(
    fastapi_user.get_verify_router(UserRead),
    prefix="",
)