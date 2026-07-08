'use client';

import React from 'react';
import { FactVerdict } from '@/lib/types';
import { getVerdictConfig } from '@/lib/utils';

interface ConfidenceGaugeProps {
  score: number;
  verdict: FactVerdict;
}

export default function ConfidenceGauge({ score, verdict }: ConfidenceGaugeProps) {
  const config = getVerdictConfig(verdict);
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex h-32 w-32 items-center justify-center">
        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 110 110">
          {/* Background circle */}
          <circle
            cx="55"
            cy="55"
            r={radius}
            strokeWidth="10"
            className="stroke-slate-200 dark:stroke-slate-800 fill-none"
          />
          {/* Progress circle */}
          <circle
            cx="55"
            cy="55"
            r={radius}
            strokeWidth="10"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              stroke: config.colorHex,
              transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            className="fill-none"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            {score}%
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Confidence
          </span>
        </div>
      </div>
    </div>
  );
}
