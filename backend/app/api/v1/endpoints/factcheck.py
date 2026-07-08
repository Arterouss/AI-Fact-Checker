from fastapi import APIRouter, HTTPException, Query
from typing import List, Dict, Any, Optional
from app.schemas.factcheck import (
    FactCheckRequest,
    FactCheckResponse,
    HistorySummaryItem,
    PlatformType
)
from app.services.ai_analyzer import VeriFactAIEngine
from app.services.sample_database import SAMPLE_CLAIMS, IN_MEMORY_HISTORY, get_system_stats

router = APIRouter()
ai_engine = VeriFactAIEngine()


@router.post("/analyze", response_model=FactCheckResponse, summary="Analyze claim text or social media post")
async def analyze_claim(request: FactCheckRequest):
    """
    Run comprehensive AI Fact Checking, NLP diagnostic scoring,
    and trusted source cross-referencing on submitted content.
    """
    if len(request.text.strip()) < 5:
        raise HTTPException(status_code=400, detail="Claim text must be at least 5 characters long.")
    
    result = ai_engine.analyze_claim(request)

    # Prepend to in-memory history
    history_item = HistorySummaryItem(
        id=result.id,
        timestamp=result.timestamp,
        claim_preview=request.text[:95] + ("..." if len(request.text) > 95 else ""),
        verdict=result.verdict,
        verdict_label=result.verdict_label,
        confidence_score=result.confidence_score,
        platform=request.platform
    )
    IN_MEMORY_HISTORY.insert(0, history_item)
    
    return result


@router.get("/examples", summary="Get sample claims across different platforms")
async def get_example_claims():
    """
    Returns curated sample claims to test various verdicts (True, False, Misleading).
    """
    return {"examples": SAMPLE_CLAIMS}


@router.get("/history", response_model=List[HistorySummaryItem], summary="Get verification history")
async def get_verification_history(
    platform: Optional[str] = Query(None, description="Filter by platform"),
    search: Optional[str] = Query(None, description="Search query string")
):
    """
    Retrieve recently analyzed claims with optional search and platform filter.
    """
    items = IN_MEMORY_HISTORY
    return items


@router.get("/stats", summary="Get global system accuracy and verification statistics")
async def get_stats():
    return get_system_stats()
