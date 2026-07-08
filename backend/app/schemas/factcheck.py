from enum import Enum
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from datetime import datetime


class PlatformType(str, Enum):
    ALL = "all"
    NEWS = "news"
    TWITTER = "twitter"
    FACEBOOK = "facebook"
    INSTAGRAM = "instagram"
    CLAIM = "claim"


class FactVerdict(str, Enum):
    TRUE = "TRUE"
    LIKELY_TRUE = "LIKELY_TRUE"
    UNVERIFIED = "UNVERIFIED"
    MISLEADING = "MISLEADING"
    FALSE = "FALSE"


class TrustedSource(BaseModel):
    title: str = Field(..., description="Title of the trusted reference document or article")
    domain: str = Field(..., description="Domain name (e.g. who.int, reuters.com)")
    url: str = Field(..., description="External URL to source")
    summary: str = Field(..., description="Short summary of what the trusted reference states")
    credibility_score: int = Field(..., ge=0, le=100, description="Credibility index of this source out of 100")
    source_type: str = Field("News Agency", description="Category: Official Body, Academic Paper, News Agency, or Government")


class ClaimSubVerdict(BaseModel):
    claim_text: str = Field(..., description="Extracted sub-claim from the user's text")
    verdict: FactVerdict = Field(..., description="Verdict for this specific sub-claim")
    explanation: str = Field(..., description="Concise explanation for why this sub-claim is true/false/misleading")
    confidence: int = Field(..., ge=0, le=100)


class SuspiciousHighlight(BaseModel):
    sentence: str = Field(..., description="Sentence or phrase flagged by the NLP engine")
    reason: str = Field(..., description="Why this sentence looks suspicious (e.g. emotional manipulation, unverified statistic)")
    severity: str = Field("medium", description="low, medium, or high")


class EvidenceTimelineItem(BaseModel):
    date: str = Field(..., description="Approximate or actual date/year")
    title: str = Field(..., description="Milestone or event title")
    description: str = Field(..., description="Summary of evidence emergence")


class NLPDiagnostics(BaseModel):
    clickbait_score: int = Field(..., ge=0, le=100, description="Clickbait probability score")
    emotional_language_score: int = Field(..., ge=0, le=100, description="Emotional intensity score")
    emotional_tone: str = Field(..., description="e.g. Neutral, Fear-Inducing, Sensational, Provocative")
    political_bias: str = Field(..., description="e.g. Center / Objective, Left-Leaning, Right-Leaning")
    source_credibility_index: int = Field(..., ge=0, le=100, description="Overall source backing index")
    reading_time_seconds: int = Field(..., description="Estimated reading time")
    detected_language: str = Field("English", description="Detected ISO or full language name")


class FactCheckRequest(BaseModel):
    text: str = Field(..., min_length=10, description="Content or claim text to analyze")
    platform: PlatformType = Field(PlatformType.ALL, description="Platform source type")
    include_deep_nlp: bool = Field(True, description="Whether to compute bonus NLP diagnostics")


class FactCheckResponse(BaseModel):
    id: str = Field(..., description="Unique verification report ID")
    timestamp: str = Field(..., description="ISO timestamp")
    verdict: FactVerdict = Field(..., description="Overall fact check classification")
    verdict_label: str = Field(..., description="Human readable label (e.g. 'Likely True')")
    confidence_score: int = Field(..., ge=0, le=100, description="Confidence percentage")
    summary: str = Field(..., description="AI Executive Summary of the fact-check")
    reasoning_steps: List[str] = Field(..., description="Step-by-step reasoning behind the conclusion")
    suspicious_highlights: List[SuspiciousHighlight] = Field(default_factory=list)
    claim_breakdown: List[ClaimSubVerdict] = Field(default_factory=list)
    trusted_sources: List[TrustedSource] = Field(default_factory=list)
    evidence_timeline: List[EvidenceTimelineItem] = Field(default_factory=list)
    nlp_diagnostics: NLPDiagnostics = Field(...)


class HistorySummaryItem(BaseModel):
    id: str
    timestamp: str
    claim_preview: str
    verdict: FactVerdict
    verdict_label: str
    confidence_score: int
    platform: PlatformType
