'use client';

import React, { useState } from 'react';
import { PlatformType, FactCheckRequest, SampleClaimItem } from '@/lib/types';
import {
  Newspaper,
  FileText,
  Sparkles,
  Search,
  RotateCcw,
  Image as ImageIcon,
  Upload,
  X
} from 'lucide-react';
import { BrandTwitter, BrandFacebook, BrandInstagram } from '@/components/ui/Icons';

interface ClaimInputProps {
  onAnalyze: (request: FactCheckRequest) => void;
  isLoading: boolean;
  sampleClaims: SampleClaimItem[];
}

export default function ClaimInput({
  onAnalyze,
  isLoading,
  sampleClaims
}: ClaimInputProps) {
  const [text, setText] = useState('');
  const [imageData, setImageData] = useState<string | null>(null);
  const [platform, setPlatform] = useState<PlatformType>('all');

  const platforms: { id: PlatformType; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Text / Custom', icon: FileText },
    { id: 'news', label: 'News Article', icon: Newspaper },
    { id: 'twitter', label: 'X / Twitter', icon: BrandTwitter },
    { id: 'facebook', label: 'Facebook Post', icon: BrandFacebook },
    { id: 'instagram', label: 'Instagram Caption', icon: BrandInstagram },
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() && !imageData) return;
    onAnalyze({
      text: text.trim() || 'Screenshot Hoaks / Berita Palsu yang Diunggah',
      image_data: imageData || undefined,
      platform,
      include_deep_nlp: true
    });
  };

  const handleSelectSample = (sample: SampleClaimItem) => {
    setText(sample.text);
    setPlatform(sample.platform);
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-6">
      {/* Platform Switcher */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Select Source Platform
        </label>
        <div className="flex flex-wrap gap-2">
          {platforms.map((p) => {
            const Icon = p.icon;
            const active = platform === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlatform(p.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  active
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 scale-[1.02]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                {p.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Textarea Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ketik/tempel klaim berita atau upload foto screenshot hoaks di bawah..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-950/60 dark:text-white dark:focus:bg-slate-950 transition-all"
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-3">
            {text && (
              <button
                type="button"
                onClick={() => setText('')}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <RotateCcw className="h-3 w-3" />
                Clear
              </button>
            )}
            <span className="text-[11px] font-medium text-slate-400">
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
          </div>
        </div>

        {/* Screenshot / Photo Hoax Upload */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
              <ImageIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Upload Screenshot / Foto Berita Hoaks
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                AI akan membaca tulisan di foto & menelusuri berita aslinya
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {imageData ? (
              <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 px-3 py-1.5 rounded-xl">
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                  Foto Siap Diperiksa
                </span>
                <button
                  type="button"
                  onClick={() => setImageData(null)}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <label className="cursor-pointer inline-flex items-center gap-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <Upload className="h-3.5 w-3.5" />
                Pilih Foto...
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* Quick Sample Claims */}
        {sampleClaims && sampleClaims.length > 0 && (
          <div className="space-y-2">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Try Sample Claims:
            </span>
            <div className="flex flex-wrap gap-2">
              {sampleClaims.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => handleSelectSample(sample)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-blue-500/40 hover:bg-blue-50/50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 transition-colors"
                >
                  <Sparkles className="h-3 w-3 text-blue-500" />
                  {sample.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex items-center justify-end pt-2">
          <button
            type="submit"
            disabled={isLoading || (!text.trim() && !imageData)}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 transition-all active:scale-95"
          >
            {isLoading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Analyzing & Cross-Referencing...
              </>
            ) : (
              <>
                <Search className="h-4 w-4" />
                Fact-Check Content Now
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
