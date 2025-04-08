from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    email: str
    is_active: bool = True
    is_superuser: bool = False
    

    class Config:
        orm_mode = True

    def __init__(self, **data):
        super().__init__(**data)
        self.password = self.hash_password(self.password)

    def hash_password(self, password: str) -> str:
        # Implement your password hashing logic here
        return password  # Placeholder for actual hashed password
class UserInDB(User):
    hashed_password: str