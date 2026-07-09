'use client';

import React from 'react';
import { ClaimSubVerdict } from '@/lib/types';
import { getVerdictConfig } from '@/lib/utils';
import { Layers } from 'lucide-react';

interface ClaimBreakdownTableProps {
  breakdown: ClaimSubVerdict[];
}

export default function ClaimBreakdownTable({ breakdown }: ClaimBreakdownTableProps) {
  if (!breakdown || breakdown.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          {breakdown.length === 1
            ? 'Bedah Klaim Inti (Core Claim Analysis)'
            : `Bedah Poin-Poin Klaim (${breakdown.length} Pernyataan)`}
        </h3>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-200/80 bg-slate-50/80 text-slate-500 dark:border-slate-800 dark:bg-slate-950/80">
              <tr>
                <th className="px-5 py-3.5 font-semibold">Pernyataan / Klaim yang Diuji</th>
                <th className="px-5 py-3.5 font-semibold">Status Verifikasi</th>
                <th className="px-5 py-3.5 font-semibold">Akurasi</th>
                <th className="px-5 py-3.5 font-semibold">Catatan Investigasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/80">
              {breakdown.map((item, idx) => {
                const config = getVerdictConfig(item.verdict);
                return (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-medium text-slate-900 dark:text-slate-100 max-w-xs">
                      {item.claim_text}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-bold ${config.badgeClass}`}
                      >
                        {config.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-700 dark:text-slate-300">
                      {item.confidence}%
                    </td>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-400 max-w-md">
                      {item.explanation}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
