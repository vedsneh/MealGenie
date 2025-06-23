from fastapi import APIRouter
from pydantic import BaseModel
from app.core.openai_client import generate_gpt_response 


router = APIRouter()

class IngredientInput(BaseModel):
    ingredients: str

@router.post("/recipe-gen")
def generate_recipe(data: IngredientInput):
    prompt = f"Create a unique recipe using these ingredients: {data.ingredients}"
    result = generate_gpt_response(prompt)

    return {"recipe": result}

