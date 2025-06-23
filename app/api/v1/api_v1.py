from fastapi import APIRouter

from app.api.v1.endpoints import (
    smart_cart, recipe_gen, missing_ingredients,
    dietary_modes, budget_buddy
)

api_router = APIRouter()
api_router.include_router(smart_cart.router, prefix="/genai", tags=["Smart Cart"])
api_router.include_router(recipe_gen.router, prefix="/genai", tags=["Recipe Generator"])
api_router.include_router(missing_ingredients.router, prefix="/genai", tags=["Missing Ingredients"])
api_router.include_router(dietary_modes.router, prefix="/genai", tags=["Dietary Modes"])
api_router.include_router(budget_buddy.router, prefix="/genai", tags=["Budget Buddy"])

