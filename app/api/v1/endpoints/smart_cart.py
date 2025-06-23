from fastapi import APIRouter
from pydantic import BaseModel
from app.core.openai_client import generate_gpt_response  # Must be updated to OpenAI v1+

router = APIRouter()

# Input model for frontend
class SmartCartInput(BaseModel):
    items: list[str]

@router.post("/smart-cart")
def analyze_smart_cart(data: SmartCartInput):
    prompt = f"Suggest 3 simple recipes using only these items: {', '.join(data.items)}"
    print("📝 Prompt to OpenAI:", prompt)

    ai_response = generate_gpt_response(prompt)
    print("🤖 OpenAI says:", ai_response)

    return {"suggestions": ai_response}
