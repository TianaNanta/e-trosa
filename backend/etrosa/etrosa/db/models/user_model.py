from tortoise import fields, models


class User(models.Model):
    """ Model for user """
    
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=200)
    first_name = fields.CharField(max_length=200)
    email = fields.CharField(max_length=200)
    hashed_password = fields.CharField(max_length=200, null=True)
    avatar = fields.BinaryField(max_length=200, null=True)
    is_active = fields.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.name
    
    def dict(self) -> dict:
        return {
            'id': self.id,
            'name': self.name,
            'first_name': self.first_name,
            'avatar': self.avatar,
        }