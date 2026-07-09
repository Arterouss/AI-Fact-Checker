'use client';

import React from 'react';
import { EvidenceTimelineItem } from '@/lib/types';
import { GitCommit, Calendar } from 'lucide-react';

interface EvidenceTimelineProps {
  timeline: EvidenceTimelineItem[];
}

export default function EvidenceTimeline({ timeline }: EvidenceTimelineProps) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <GitCommit className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Timeline Kronologi Bukti & Investigasi (Evidence Timeline)
        </h3>
      </div>

      <div className="relative border-l-2 border-blue-500/30 ml-4 pl-6 space-y-6">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Circle pin */}
            <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-950"></div>
            <div className="space-y-1 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
