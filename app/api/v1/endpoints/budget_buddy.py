from fastapi import APIRouter
from pydantic import BaseModel
from app.core.openai_client import generate_gpt_response  

router = APIRouter()

class BudgetInput(BaseModel):
    groceries: str
    budget: float

@router.post("/budget-buddy")
def suggest_within_budget(data: BudgetInput):
    prompt = f"Suggest how to optimize this grocery list within ₹{data.budget}: {data.groceries}. Include smart swaps and savings tips."
    result = generate_gpt_response(prompt)

    return {"result": result}
