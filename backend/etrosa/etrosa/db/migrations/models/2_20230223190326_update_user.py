from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE `user` DROP COLUMN `first_name`;
        ALTER TABLE `user` ADD UNIQUE INDEX `uid_user_name_76f409` (`name`);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE `user` DROP INDEX `idx_user_name_76f409`;
        ALTER TABLE `user` ADD `first_name` VARCHAR(200) NOT NULL;"""
