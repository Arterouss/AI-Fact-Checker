from typing import List, Dict, Any
from app.schemas.factcheck import HistorySummaryItem, FactVerdict, PlatformType


SAMPLE_CLAIMS = [
    {
        "id": "sample-1",
        "title": "Vaccines Contain Tracking Microchips",
        "text": "Secret microchips are being injected into citizens through routine vaccines to track movement via 5G towers.",
        "platform": "facebook",
        "expected_verdict": "FALSE"
    },
    {
        "id": "sample-2",
        "title": "Moderate Coffee Intake & Longevity",
        "text": "Studies published in medical journals show that drinking 2 to 3 cups of coffee daily is linked to longer lifespan and better heart health.",
        "platform": "news",
        "expected_verdict": "TRUE"
    },
    {
        "id": "sample-3",
        "title": "NASA Secretly Admits Global Cooling",
        "text": "NASA secretly admitted that global temperatures have dropped since 2016 and climate change models are completely wrong.",
        "platform": "twitter",
        "expected_verdict": "FALSE"
    },
    {
        "id": "sample-4",
        "title": "AI Models Consume 10x More Energy Than Reported",
        "text": "According to new reports, large AI data centers consume 10 times more electricity than utility providers originally projected.",
        "platform": "claim",
        "expected_verdict": "LIKELY_TRUE"
    }
]


IN_MEMORY_HISTORY: List[HistorySummaryItem] = [
    HistorySummaryItem(
        id="vf-a841c9b2",
        timestamp="2026-07-08T10:15:00Z",
        claim_preview="Secret microchips are being injected to track citizens via 5G networks...",
        verdict=FactVerdict.FALSE,
        verdict_label="False / Debunked Conspiracy",
        confidence_score=99,
        platform=PlatformType.FACEBOOK
    ),
    HistorySummaryItem(
        id="vf-b219e4c1",
        timestamp="2026-07-08T09:42:00Z",
        claim_preview="Drinking 2 to 3 cups of coffee daily is linked to longer lifespan...",
        verdict=FactVerdict.TRUE,
        verdict_label="True (Evidence-Backed)",
        confidence_score=94,
        platform=PlatformType.NEWS
    ),
    HistorySummaryItem(
        id="vf-c773a81f",
        timestamp="2026-07-07T18:20:00Z",
        claim_preview="NASA secretly admitted that global temperatures have dropped since 2016...",
        verdict=FactVerdict.FALSE,
        verdict_label="False / Misrepresented Data",
        confidence_score=97,
        platform=PlatformType.TWITTER
    ),
    HistorySummaryItem(
        id="vf-d901f28b",
        timestamp="2026-07-07T14:10:00Z",
        claim_preview="Central Bank announces new digital currency replacing physical cash in 30 days...",
        verdict=FactVerdict.MISLEADING,
        verdict_label="Misleading / Out of Context",
        confidence_score=89,
        platform=PlatformType.INSTAGRAM
    ),
    HistorySummaryItem(
        id="vf-e612c04d",
        timestamp="2026-07-06T11:05:00Z",
        claim_preview="Renewable solar generation reached record 45% peak grid output in May...",
        verdict=FactVerdict.LIKELY_TRUE,
        verdict_label="Likely True (Requires Context)",
        confidence_score=84,
        platform=PlatformType.NEWS
    )
]


def get_system_stats() -> Dict[str, Any]:
    return {
        "total_verified_claims": 142850,
        "accuracy_benchmark": 98.4,
        "trusted_sources_indexed": 48200,
        "average_verification_time_ms": 380,
        "verdicts_breakdown": {
            "TRUE": 34,
            "LIKELY_TRUE": 22,
            "UNVERIFIED": 12,
            "MISLEADING": 18,
            "FALSE": 14
        }
    }
