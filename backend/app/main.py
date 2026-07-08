from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints import factcheck

app = FastAPI(
    title="VeriFact AI API",
    description="Enterprise-grade AI Fact Checking, NLP Diagnostic Scoring, and Source Verification Engine",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(factcheck.router, prefix="/api/v1/factcheck", tags=["Fact Check"])


@app.get("/api/v1/health", tags=["Health"])
async def health_check():
    return {
        "status": "healthy",
        "service": "VeriFact AI Backend Engine",
        "version": "2.0.0",
        "nlp_engine": "active"
    }


@app.get("/", tags=["Root"])
async def root():
    return {
        "message": "Welcome to VeriFact AI Backend Service.",
        "docs": "/docs",
        "health": "/api/v1/health"
    }
