'use client';

import React from 'react';
import { TrustedSource } from '@/lib/types';
import { ExternalLink, CheckCircle2, Shield, Globe } from 'lucide-react';

interface SourcePanelProps {
  sources: TrustedSource[];
}

export default function SourcePanel({ sources }: SourcePanelProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Trusted Reference Sources ({sources.length})
          </h3>
        </div>
        <span className="text-xs font-medium text-slate-500">
          Cross-referenced from primary indexed repositories
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sources.map((source, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:border-blue-500/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                  <Globe className="h-3 w-3" />
                  {source.domain}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-500/20 dark:bg-emerald-950/50 dark:text-emerald-300">
                  <CheckCircle2 className="h-3 w-3" />
                  {source.credibility_score}% Credibility
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {source.title}
              </h4>

              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {source.summary}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800/80">
              <span className="text-[11px] font-semibold text-slate-400">
                Type: {source.source_type}
              </span>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                View Source
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
