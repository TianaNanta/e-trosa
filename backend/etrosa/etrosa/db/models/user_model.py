from tortoise import fields, models


class User(models.Model):
    """ Model for user """
    
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=200, unique=True)
    email = fields.CharField(max_length=200, unique=True)
    hashed_password = fields.CharField(max_length=200, null=True)
    avatar = fields.BinaryField(max_length=200, null=True)
    disabled = fields.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.name
    
    def dict(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'avatar': self.avatar,
            'disabled': self.disabled
        }