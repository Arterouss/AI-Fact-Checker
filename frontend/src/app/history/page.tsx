'use client';

import React, { useState, useEffect } from 'react';
import { HistorySummaryItem, PlatformType } from '@/lib/types';
import { getHistoryAPI } from '@/lib/api';
import { getVerdictConfig, formatDate } from '@/lib/utils';
import { History, Search, Filter, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HistoryPage() {
  const [items, setItems] = useState<HistorySummaryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHistoryAPI()
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredItems = items.filter(item => {
    const matchesQuery =
      item.claim_preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.verdict_label.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform =
      selectedPlatform === 'all' || item.platform === selectedPlatform;
    return matchesQuery && matchesPlatform;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
            <History className="h-3.5 w-3.5" />
            Verification Log
          </div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Historical Verification Archive
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Search and filter past fact-checking dossiers analyzed by VeriFact AI.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-all"
        >
          <ShieldCheck className="h-4 w-4" />
          Verify New Claim
        </Link>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search claims or verdicts..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="h-4 w-4 text-slate-400" />
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
          >
            <option value="all">All Platforms</option>
            <option value="news">News Articles</option>
            <option value="twitter">X / Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
          </select>
        </div>
      </div>

      {/* Archive List */}
      {loading ? (
        <div className="py-20 text-center text-sm text-slate-400">Loading historical log...</div>
      ) : filteredItems.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
          <p className="text-sm text-slate-500">No verification reports found matching your filter criteria.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const config = getVerdictConfig(item.verdict);
            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:border-blue-500/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-lg border px-2.5 py-0.5 text-[11px] font-bold ${config.badgeClass}`}
                    >
                      {config.label}
                    </span>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {item.platform}
                    </span>
                    <span className="text-xs text-slate-400">
                      • {formatDate(item.timestamp)}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100 line-clamp-2">
                    &ldquo;{item.claim_preview}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Confidence
                    </span>
                    <span className="text-lg font-black text-slate-900 dark:text-white">
                      {item.confidence_score}%
                    </span>
                  </div>

                  <Link
                    href={`/dashboard`}
                    className="inline-flex items-center gap-1 rounded-xl bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-600 hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-900/60 transition-colors"
                  >
                    Analyze
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
