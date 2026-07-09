export type PlatformType = 'all' | 'news' | 'twitter' | 'facebook' | 'instagram' | 'claim';

export type FactVerdict = 'TRUE' | 'LIKELY_TRUE' | 'UNVERIFIED' | 'MISLEADING' | 'FALSE';

export interface TrustedSource {
  title: string;
  domain: string;
  url: string;
  summary: string;
  credibility_score: number;
  source_type: string;
  stance?: 'refuting' | 'supporting' | 'neutral' | string;
  language?: string;
}

export interface ClaimSubVerdict {
  claim_text: string;
  verdict: FactVerdict;
  explanation: string;
  confidence: number;
}

export interface SuspiciousHighlight {
  sentence: string;
  reason: string;
  severity: 'low' | 'medium' | 'high';
}

export interface EvidenceTimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface NLPDiagnostics {
  clickbait_score: number;
  emotional_language_score: number;
  emotional_tone: string;
  political_bias: string;
  source_credibility_index: number;
  reading_time_seconds: number;
  detected_language: string;
}

export interface FactCheckRequest {
  text: string;
  image_data?: string;
  platform: PlatformType;
  include_deep_nlp?: boolean;
}

export interface FactCheckResponse {
  id: string;
  timestamp: string;
  verdict: FactVerdict;
  verdict_label: string;
  confidence_score: number;
  summary: string;
  eli15_explanation?: string;
  cross_language_summary?: string;
  reasoning_steps: string[];
  suspicious_highlights: SuspiciousHighlight[];
  claim_breakdown: ClaimSubVerdict[];
  trusted_sources: TrustedSource[];
  evidence_timeline: EvidenceTimelineItem[];
  nlp_diagnostics: NLPDiagnostics;
}

export interface HistorySummaryItem {
  id: string;
  timestamp: string;
  claim_preview: string;
  verdict: FactVerdict;
  verdict_label: string;
  confidence_score: number;
  platform: PlatformType;
}

export interface SampleClaimItem {
  id: string;
  title: string;
  text: string;
  platform: PlatformType;
  expected_verdict: FactVerdict;
}
