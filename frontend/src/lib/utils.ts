import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FactVerdict } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getVerdictConfig(verdict: FactVerdict) {
  switch (verdict) {
    case 'TRUE':
      return {
        label: 'Verified True',
        badgeClass: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
        bgCard: 'border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20',
        colorHex: '#10B981',
        iconName: 'check-circle'
      };
    case 'LIKELY_TRUE':
      return {
        label: 'Likely True',
        badgeClass: 'bg-teal-500/15 text-teal-700 dark:text-teal-400 border-teal-500/30',
        bgCard: 'border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20',
        colorHex: '#14B8A6',
        iconName: 'check'
      };
    case 'UNVERIFIED':
      return {
        label: 'Unverified / Inconclusive',
        badgeClass: 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30',
        bgCard: 'border-amber-500/30 bg-amber-50/40 dark:bg-amber-950/20',
        colorHex: '#F59E0B',
        iconName: 'help-circle'
      };
    case 'MISLEADING':
      return {
        label: 'Misleading / Out of Context',
        badgeClass: 'bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30',
        bgCard: 'border-rose-500/30 bg-rose-50/40 dark:bg-rose-950/20',
        colorHex: '#F43F5E',
        iconName: 'alert-triangle'
      };
    case 'FALSE':
      return {
        label: 'Debunked False',
        badgeClass: 'bg-red-600/15 text-red-700 dark:text-red-400 border-red-600/30',
        bgCard: 'border-red-600/30 bg-red-50/40 dark:bg-red-950/20',
        colorHex: '#E11D48',
        iconName: 'x-circle'
      };
    default:
      return {
        label: 'Analyzed',
        badgeClass: 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30',
        bgCard: 'border-blue-500/30 bg-blue-50/40 dark:bg-blue-950/20',
        colorHex: '#2563EB',
        iconName: 'info'
      };
  }
}

export function formatDate(isoDate: string) {
  try {
    const d = new Date(isoDate);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return isoDate;
  }
}
