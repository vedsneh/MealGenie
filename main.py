from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.api_v1 import api_router  # 👈 This is MISSING in your code!

from dotenv import load_dotenv
load_dotenv()


app = FastAPI(
    title="Meal Genie GenAI API",
    version="1.0.0",
    docs_url="/docs",           # ✅ Swagger UI enable
    redoc_url="/redoc",         # (optional) for ReDoc
    openapi_url="/openapi.json" # (for frontend use)
)


# CORS settings
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Include API routes
app.include_router(api_router, prefix="/api/v1")