from fastapi import APIRouter
from pydantic import BaseModel
from app.core.openai_client import generate_gpt_response 

router = APIRouter()

class DietRequest(BaseModel):
    diet_type: str  # e.g. "vegetarian", "diabetic", "high protein"
    preferences: str

@router.post("/dietary-modes")
def dietary_mode_recipes(data: DietRequest):
    prompt = f"Give a meal plan for a {data.diet_type} person considering preferences: {data.preferences}"
    result = generate_gpt_response(prompt)

    return {"result": result}
