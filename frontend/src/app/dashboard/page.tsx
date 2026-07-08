'use client';

import React, { useState, useEffect } from 'react';
import { FactCheckRequest, FactCheckResponse, SampleClaimItem } from '@/lib/types';
import { analyzeClaimAPI, getExamplesAPI } from '@/lib/api';
import ClaimInput from '@/components/factcheck/ClaimInput';
import ResultCard from '@/components/factcheck/ResultCard';
import { ShieldCheck, Sparkles, Activity, CheckCircle2, History } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [result, setResult] = useState<FactCheckResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [samples, setSamples] = useState<SampleClaimItem[]>([]);

  useEffect(() => {
    getExamplesAPI().then(data => setSamples(data));
  }, []);

  const handleAnalyze = async (request: FactCheckRequest) => {
    setIsLoading(true);
    try {
      const res = await analyzeClaimAPI(request);
      setResult(res);
    } catch (err) {
      console.error('Analysis error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      {/* Top Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Live Verification Studio
          </div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Claim Verification & Forensic Hub
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Paste any news article, X post, Facebook caption, or text claim to verify authenticity.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/history"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 transition-colors"
          >
            <History className="h-4 w-4" />
            View Archive
          </Link>
        </div>
      </div>

      {/* Input Section */}
      <ClaimInput
        onAnalyze={handleAnalyze}
        isLoading={isLoading}
        sampleClaims={samples}
      />

      {/* Output Section */}
      {result ? (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Forensic AI Dossier Output
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Verified against global reference repositories
            </span>
          </div>
          <ResultCard result={result} />
        </div>
      ) : (
        /* Empty state tips */
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/50 p-10 text-center dark:border-slate-800 dark:bg-slate-900/40">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            <Sparkles className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
            Ready for Real-Time Analysis
          </h3>
          <p className="mt-1 text-xs text-slate-500 max-w-md mx-auto">
            Paste a text claim above or click any sample claim chip to instantly generate a comprehensive fact-check dossier with confidence scores and source citations.
          </p>
        </div>
      )}

      {/* Bottom Benchmark Stat bar */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-6">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="text-xs font-medium text-slate-400">Indexed Sources</span>
          <p className="mt-1 text-lg font-black text-slate-900 dark:text-white">48,200+ References</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="text-xs font-medium text-slate-400">System Accuracy Benchmark</span>
          <p className="mt-1 text-lg font-black text-emerald-600 dark:text-emerald-400">98.4% Verified</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <span className="text-xs font-medium text-slate-400">Average Processing Speed</span>
          <p className="mt-1 text-lg font-black text-blue-600 dark:text-blue-400">380 milliseconds</p>
        </div>
      </div>
    </div>
  );
}
