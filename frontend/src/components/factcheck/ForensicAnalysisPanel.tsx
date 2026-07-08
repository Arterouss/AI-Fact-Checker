'use client';

import React from 'react';
import { NLPDiagnostics } from '@/lib/types';
import { Activity, Zap, Flame, Compass, Award, Clock, Languages } from 'lucide-react';

interface ForensicAnalysisPanelProps {
  diagnostics: NLPDiagnostics;
}

export default function ForensicAnalysisPanel({ diagnostics }: ForensicAnalysisPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Forensic NLP & Credibility Diagnostics
          </h3>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
          Advanced Metrics
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Clickbait Probability */}
        <div className="space-y-2 rounded-xl bg-white p-4 border border-slate-200/70 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Zap className="h-4 w-4 text-amber-500" />
              Clickbait Probability
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {diagnostics.clickbait_score}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${diagnostics.clickbait_score}%`,
                backgroundColor:
                  diagnostics.clickbait_score > 60
                    ? '#F43F5E'
                    : diagnostics.clickbait_score > 35
                    ? '#F59E0B'
                    : '#10B981'
              }}
            />
          </div>
          <span className="block text-[11px] text-slate-500">
            {diagnostics.clickbait_score > 55
              ? 'High probability of sensationalized title/framing'
              : 'Low clickbait patterns detected'}
          </span>
        </div>

        {/* Emotional Language Intensity */}
        <div className="space-y-2 rounded-xl bg-white p-4 border border-slate-200/70 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Flame className="h-4 w-4 text-rose-500" />
              Emotional Language Score
            </span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {diagnostics.emotional_language_score}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${diagnostics.emotional_language_score}%`,
                backgroundColor:
                  diagnostics.emotional_language_score > 60
                    ? '#F43F5E'
                    : diagnostics.emotional_language_score > 35
                    ? '#F59E0B'
                    : '#3B82F6'
              }}
            />
          </div>
          <span className="block text-[11px] text-slate-500">
            Tone classified as: <span className="font-semibold text-slate-700 dark:text-slate-300">{diagnostics.emotional_tone}</span>
          </span>
        </div>

        {/* Political / Framing Bias */}
        <div className="flex items-center justify-between rounded-xl bg-white p-4 border border-slate-200/70 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-300">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500">Framing Slant</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {diagnostics.political_bias}
              </span>
            </div>
          </div>
        </div>

        {/* Source Credibility Index */}
        <div className="flex items-center justify-between rounded-xl bg-white p-4 border border-slate-200/70 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-300">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-500">Source Credibility Index</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {diagnostics.source_credibility_index} / 100
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Meta Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-4 text-xs text-slate-500 dark:border-slate-800">
        <div className="flex items-center gap-1.5">
          <Languages className="h-4 w-4 text-slate-400" />
          <span>Detected Language: <strong className="text-slate-700 dark:text-slate-300">{diagnostics.detected_language}</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-slate-400" />
          <span>Estimated Reading Time: <strong className="text-slate-700 dark:text-slate-300">{diagnostics.reading_time_seconds} seconds</strong></span>
        </div>
      </div>
    </div>
  );
}
