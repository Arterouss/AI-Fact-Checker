'use client';

import React, { useState } from 'react';
import { FactCheckResponse } from '@/lib/types';
import { getVerdictConfig, formatDate } from '@/lib/utils';
import ConfidenceGauge from './ConfidenceGauge';
import SourcePanel from './SourcePanel';
import ForensicAnalysisPanel from './ForensicAnalysisPanel';
import ClaimBreakdownTable from './ClaimBreakdownTable';
import EvidenceTimeline from './EvidenceTimeline';
import {
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  XCircle,
  Copy,
  Check,
  Share2,
  Printer,
  Bookmark,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface ResultCardProps {
  result: FactCheckResponse;
}

export default function ResultCard({ result }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const config = getVerdictConfig(result.verdict);

  const handleCopy = () => {
    const textToCopy = `VeriFact AI Forensic Report [ID: ${result.id}]
Verdict: ${config.label} (${result.confidence_score}% Confidence)
Summary: ${result.summary}
Sources: ${result.trusted_sources.map(s => s.domain).join(', ')}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            Report ID: {result.id}
          </span>
          <span className="text-xs text-slate-400">
            Analyzed {formatDate(result.timestamp)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Copied' : 'Copy Report'}
          </button>

          <button
            onClick={handlePrintPDF}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 transition-colors"
          >
            <Printer className="h-3.5 w-3.5" />
            Export PDF Report
          </button>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
              bookmarked
                ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" />
            {bookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>
      </div>

      {/* Hero Result Card */}
      <div className={`overflow-hidden rounded-3xl border ${config.bgCard} p-6 sm:p-8 shadow-sm`}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center">
          {/* Left Verdict Information */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-sm font-black tracking-tight ${config.badgeClass}`}
              >
                {result.verdict === 'TRUE' && <CheckCircle2 className="h-4 w-4" />}
                {result.verdict === 'LIKELY_TRUE' && <CheckCircle2 className="h-4 w-4" />}
                {result.verdict === 'UNVERIFIED' && <HelpCircle className="h-4 w-4" />}
                {result.verdict === 'MISLEADING' && <AlertTriangle className="h-4 w-4" />}
                {result.verdict === 'FALSE' && <XCircle className="h-4 w-4" />}
                {config.label}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Verified by VeriFact NLP Engine
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
              {result.verdict_label}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {result.summary}
            </p>

            {/* ELI15 Box */}
            {result.eli15_explanation && (
              <div className="mt-4 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 dark:border-amber-900/50 dark:bg-amber-950/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center rounded-lg bg-amber-500 px-2 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider">
                    Explain Like I'm 15
                  </span>
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-300">
                    Penjelasan Ringkas & Mudah Paham
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                  {result.eli15_explanation}
                </p>
              </div>
            )}

            {/* Cross-Language Fact Check Box */}
            {result.cross_language_summary && (
              <div className="mt-3 rounded-2xl border border-indigo-200/80 bg-indigo-50/60 p-3.5 dark:border-indigo-900/50 dark:bg-indigo-950/30 flex items-start gap-2.5">
                <span className="text-base">🌐</span>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                    Cross-Language Verification (ID ↔ EN)
                  </span>
                  <p className="text-xs text-indigo-950 dark:text-indigo-200 leading-relaxed mt-0.5">
                    {result.cross_language_summary}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Gauge */}
          <div className="flex justify-center md:justify-end">
            <ConfidenceGauge score={result.confidence_score} verdict={result.verdict} />
          </div>
        </div>
      </div>

      {/* Step by Step Reasoning */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Step-by-Step AI Reasoning Process
          </h3>
        </div>

        <div className="space-y-3">
          {result.reasoning_steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 dark:bg-slate-950/60"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {index + 1}
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Suspicious Sentences / Highlights */}
      {result.suspicious_highlights && result.suspicious_highlights.length > 0 && (
        <div className="rounded-2xl border border-rose-200/80 bg-rose-50/40 p-6 dark:border-rose-900/40 dark:bg-rose-950/20 space-y-3">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm">
            <AlertCircle className="h-5 w-5" />
            Flagged Suspicious Sentences & Phrasing
          </div>
          {result.suspicious_highlights.map((highlight, idx) => (
            <div key={idx} className="rounded-xl border border-rose-200 bg-white p-4 dark:border-rose-900 dark:bg-slate-900">
              <p className="font-mono text-xs font-semibold text-rose-600 dark:text-rose-400">
                &ldquo;{highlight.sentence}&rdquo;
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                <strong>Forensic Flag:</strong> {highlight.reason}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Claim Breakdown Matrix */}
      <ClaimBreakdownTable breakdown={result.claim_breakdown} />

      {/* Trusted Source Panel */}
      <SourcePanel sources={result.trusted_sources} />

      {/* Forensic NLP Diagnostics */}
      <ForensicAnalysisPanel diagnostics={result.nlp_diagnostics} />

      {/* Evidence Timeline */}
      <EvidenceTimeline timeline={result.evidence_timeline} />
    </div>
  );
}
