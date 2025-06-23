from fastapi import APIRouter
from pydantic import BaseModel
from app.core.openai_client import generate_gpt_response 

router = APIRouter()

class MissingIngredientsInput(BaseModel):
    partial_ingredients: str

@router.post("/missing-ingredients")
def suggest_missing(data: MissingIngredientsInput):
    prompt = f"These ingredients are available: {data.partial_ingredients}. What additional ingredients are needed to complete a good dish?"
    result = generate_gpt_response(prompt)

    return {"missing_ingredients": result}
