from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS `user` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL UNIQUE,
    `email` VARCHAR(200) NOT NULL UNIQUE,
    `hashed_password` VARCHAR(200),
    `avatar` LONGBLOB,
    `disabled` BOOL NOT NULL  DEFAULT 0
) CHARACTER SET utf8mb4 COMMENT='Model for user ';;"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        DROP TABLE IF EXISTS `user`;"""
