'use client';

import React from 'react';
import {
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Globe,
  Award,
  BookOpen,
  FileText,
  Search,
  Lock,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
  const features = [
    {
      title: 'Real-Time Forensic Claim Analysis',
      description: 'Deconstruct complex social media narratives and news articles into granular factual assertions verified against empirical datasets.',
      icon: Search,
      badge: 'Core Engine'
    },
    {
      title: 'Institutional Source Cross-Referencing',
      description: 'Automated retrieval across government registries, clinical trial archives (WHO/FDA), peer-reviewed academic journals, and major news services.',
      icon: Globe,
      badge: 'Verification'
    },
    {
      title: 'Clickbait & Emotional Language Diagnostics',
      description: 'Heuristic sentiment scoring that quantifies sensationalism, fear-inducing terminology, and viral engagement bait.',
      icon: Zap,
      badge: 'NLP Metrics'
    },
    {
      title: 'Political Slant & Framing Detection',
      description: 'Identify ideological bias, selective context omission, and commercial or advocacy framing in public statements.',
      icon: Activity,
      badge: 'Diagnostics'
    },
    {
      title: 'Sub-Claim Breakdown Matrix',
      description: 'Multi-sentence documents are segmented sentence-by-sentence so true statements are separated from misleading context.',
      icon: Layers,
      badge: 'Forensic UI'
    },
    {
      title: 'PDF Dossier & Print Export',
      description: 'Generate publication-ready fact-checking reports suitable for legal archives, editorial reviews, or research citations.',
      icon: FileText,
      badge: 'Reporting'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
          <ShieldCheck className="h-4 w-4" />
          Platform Capabilities & Technology
        </span>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Architected for Journalistic Precision
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Explore the computational NLP pipelines, credibility algorithms, and multi-tier verification workflows powering VeriFact AI.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:border-blue-500/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {feat.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {feat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Workflow Section */}
      <div className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-900/50 space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            How Verification Works Behind the Scenes
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Every submission triggers a 4-stage pipeline orchestrated by our FastAPI verification engine.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 border border-slate-200/70 dark:bg-slate-900 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">STAGE 01</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Ingestion & Extraction</h4>
            <p className="text-xs text-slate-500">Normalize social platform syntax, strip trackers, and extract core entity claims.</p>
          </div>

          <div className="rounded-2xl bg-white p-5 border border-slate-200/70 dark:bg-slate-900 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">STAGE 02</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Linguistic & Bias Diagnostics</h4>
            <p className="text-xs text-slate-500">Evaluate clickbait phrasing, emotional manipulation, and political framing indices.</p>
          </div>

          <div className="rounded-2xl bg-white p-5 border border-slate-200/70 dark:bg-slate-900 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">STAGE 03</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Source Index Query</h4>
            <p className="text-xs text-slate-500">Cross-reference statements against institutional and academic repositories.</p>
          </div>

          <div className="rounded-2xl bg-white p-5 border border-slate-200/70 dark:bg-slate-900 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">STAGE 04</span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Verdict Synthesis</h4>
            <p className="text-xs text-slate-500">Compute confidence interval and generate transparent step-by-step reasoning.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-blue-700 transition-all"
        >
          Test the Engine Now
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
