'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Newspaper,
  Layers,
  Activity,
  Globe,
  Lock,
  Search
} from 'lucide-react';
import { BrandGithub } from '@/components/ui/Icons';

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[550px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/70 via-transparent to-transparent dark:from-blue-950/40"></div>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm dark:border-blue-800/80 dark:bg-blue-950/60 dark:text-blue-300">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            Next-Gen AI Fact-Checking SaaS Engine v2.0
          </div>

          {/* Headline */}
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white leading-[1.08]">
            Verify Information <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Combat online misinformation, clickbait, and manipulated claims in seconds. Analyze news articles, X/Twitter posts, Facebook updates, and captions with forensic NLP and instant cross-referencing against trusted scientific & journalistic databases.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 hover:bg-blue-700 transition-all active:scale-95"
            >
              Try Now
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="https://github.com/Arterouss/AI-Fact-Checker"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-all"
            >
              <BrandGithub className="h-5 w-5" />
              GitHub Repo
            </a>
          </div>

          {/* Animated AI Verification Illustration Showcase */}
          <div className="mt-14 w-full max-w-5xl rounded-3xl border border-slate-200/80 bg-white/90 p-3 sm:p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900/90 backdrop-blur-sm">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 dark:border-slate-800/80 dark:bg-slate-950/80 text-left space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/60 pb-4 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="flex h-3 w-3 rounded-full bg-amber-400"></span>
                  <span className="flex h-3 w-3 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-xs font-mono font-medium text-slate-400">
                    verifact-ai.engine/live-forensic-scan
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-500/20 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Live Verification Demo
                </div>
              </div>

              {/* Sample Claim Preview */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Claim Input Example (News & Social Post):
                </span>
                <p className="rounded-xl border border-slate-200/80 bg-white p-4 text-sm font-medium text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 italic">
                  &ldquo;Studies published in medical journals confirm that drinking 2 to 3 cups of coffee daily is linked to longer lifespan and better cardiovascular health.&rdquo;
                </p>
              </div>

              {/* Sample Output Preview Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/50 p-4 dark:bg-emerald-950/20 space-y-1.5">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Verdict Status
                  </span>
                  <div className="text-lg font-black text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="h-5 w-5" />
                    Verified True
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    94% Confidence based on 2 prospective medical cohort studies.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-50/40 p-4 dark:bg-blue-950/20 space-y-1.5">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Institutional Backing
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    NEJM & American Heart Association
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Cross-referenced over 400,000 participant data points.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 space-y-1.5">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Sensationalism Index
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Low Clickbait (18%)
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Objective analytical reporting without emotional manipulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y border-slate-200/80 bg-slate-50/70 py-10 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Cross-Referencing Standards & Verified References
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-black text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Globe className="h-5 w-5 text-blue-500" /> REUTERS ARCHIVE
            </span>
            <span className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Newspaper className="h-5 w-5 text-blue-500" /> AP NEWS STANDARD
            </span>
            <span className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <ShieldCheck className="h-5 w-5 text-blue-500" /> FACTCHECK.ORG
            </span>
            <span className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Layers className="h-5 w-5 text-blue-500" /> WHO GLOBAL REGISTRY
            </span>
            <span className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Activity className="h-5 w-5 text-blue-500" /> NATURE SCIENCE
            </span>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Enterprise-Grade Factual Intelligence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Built for journalists, researchers, and rigorous fact-checkers who demand step-by-step transparency and verifiable evidence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md transition-all dark:border-slate-800 dark:bg-slate-900 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
              <Newspaper className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Multi-Platform Source Ingestion
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Paste URLs or raw text from news agencies, Facebook updates, X/Twitter threads, or Instagram captions for instant cross-platform analysis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md transition-all dark:border-slate-800 dark:bg-slate-900 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Forensic Claim Decomposition
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Complex multi-sentence claims are broken down into granular factual assertions. Each sub-claim receives an independent verdict and explanation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md transition-all dark:border-slate-800 dark:bg-slate-900 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Deep NLP & Clickbait Diagnostics
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Detect emotional manipulation, framing slant, sensational phrasing, and clickbait probability scores with high statistical precision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-6 py-12 sm:px-12 sm:py-16 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Ready to Verify Your First Claim?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-blue-100">
            Launch the interactive VeriFact AI verification hub now or integrate our REST API directly into your workflows.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-lg hover:bg-blue-50 transition-all active:scale-95"
            >
              Open Verification Dashboard
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
