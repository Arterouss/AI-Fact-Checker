'use client';

import React from 'react';
import { ShieldCheck, Award, Heart, CheckCircle2, Globe, Lock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
          <ShieldCheck className="h-4 w-4" />
          Our Mission & Methodology
        </span>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Restoring Trust in the Information Age
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          VeriFact AI was engineered by a specialized team of Full Stack AI Engineers, NLP researchers, and journalists dedicated to transparent, evidence-based truth verification.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Non-Partisan & Objective</h3>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Our algorithmic models are strictly decoupled from political or commercial sponsorship. We evaluate claims strictly on verifiable institutional data.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
            <Globe className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Scientific Transparency</h3>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            We never provide a black-box verdict. Every score includes step-by-step reasoning, flagged suspicious sentences, and primary citations.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400">
            <Lock className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Privacy & Security</h3>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Submitted claims are processed via secure memory buffers and anonymized for auditing. We adhere to SOC-2 and GDPR compliance principles.
          </p>
        </div>
      </div>

      {/* Editorial Methodology Section */}
      <div className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-900/50 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Editorial Standards & Sources Index
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          VeriFact AI cross-references submitted assertions against primary authoritative bodies. Our credibility index prioritizes peer-reviewed studies (NEJM, Lancet, Nature), primary government agencies (WHO, CDC, NASA), and international wire services adhering to strict factual correction guidelines (Reuters, AP).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 dark:text-slate-300 pt-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Zero ad-sponsored reference weighting</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Continuous hourly index updating</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Multi-language cross-lingual verification</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Open API for public auditing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
