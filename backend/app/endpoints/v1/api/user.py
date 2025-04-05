from app import app

@app.get("/api/v1/user/{user_id}")
async def get_user(user_id: int):
    # Simulate a database call
    user_data = {
        1: {"name": "John Doe", "age": 30},
        2: {"name": "Jane Smith", "age": 25},
    }
    
    user = user_data.get(user_id)
    
    if user:
        return user
    else:
        return {"error": "User not found"}