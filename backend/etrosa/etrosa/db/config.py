from typing import List

from etrosa.settings import settings

MODELS_MODULES: List[str] = ["etrosa.db.models.dummy_model", "etrosa.db.models.user_model"]  # noqa: WPS407

TORTOISE_CONFIG = {  # noqa: WPS407
    "connections": {
        "default": str(settings.db_url),
    },
    "apps": {
        "models": {
            "models": MODELS_MODULES + ["aerich.models"],
            "default_connection": "default",
        },
    },
}
