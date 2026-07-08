'use client';

import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free Researcher',
      price: '$0',
      description: 'Perfect for journalists, students, and citizens verifying everyday claims.',
      features: [
        'Up to 50 comprehensive fact checks / month',
        'All social platforms (X, FB, IG, News)',
        'Standard trusted source citations',
        'Basic confidence gauge & verdict badge',
        'Community forum support'
      ],
      cta: 'Start Verifying Free',
      href: '/dashboard',
      popular: false
    },
    {
      name: 'Pro Investigator',
      price: annual ? '$15' : '$19',
      period: '/ month',
      description: 'Built for professional newsrooms, editors, and fact-checking organizations.',
      features: [
        'Unlimited AI fact-checking dossiers',
        'Forensic NLP & Bias Diagnostics (Clickbait & Slant)',
        'Sub-claim breakdown table & Evidence timeline',
        'Export printable PDF Verification Reports',
        'Priority multi-source cross referencing',
        'API access key (1,000 requests/mo)'
      ],
      cta: 'Get Pro Investigator',
      href: '/dashboard',
      popular: true
    },
    {
      name: 'Enterprise API & Newsroom',
      price: annual ? '$159' : '$199',
      period: '/ month',
      description: 'Dedicated high-throughput API integration and custom source indexing.',
      features: [
        'High-throughput FastAPI REST endpoint access',
        'Custom internal database & archive ingestion',
        'Dedicated SLA (99.99% uptime guarantee)',
        'Automated CMS fact-check plugins',
        'Dedicated AI accuracy engineer support'
      ],
      cta: 'Contact Enterprise Team',
      href: '/documentation',
      popular: false
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
          <Sparkles className="h-4 w-4" />
          Transparent SaaS Pricing
        </span>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Plans Built for Truth & Integrity
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Start verifying claims instantly for free. Upgrade for deep NLP forensics, unlimited dossiers, and high-throughput API access.
        </p>

        {/* Billing Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-xs font-semibold ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative h-6 w-12 rounded-full bg-blue-600 transition-colors focus:outline-none"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                annual ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-xs font-semibold flex items-center gap-1.5 ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
            Annual Billing
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col justify-between rounded-3xl border p-8 transition-all ${
              plan.popular
                ? 'border-blue-600 bg-white shadow-xl dark:border-blue-500 dark:bg-slate-900 ring-2 ring-blue-600/20'
                : 'border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 right-8 rounded-full bg-blue-600 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                Most Popular
              </span>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3.5 border-t border-slate-100 pt-6 dark:border-slate-800">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href={plan.href}
                className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold transition-all ${
                  plan.popular
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-900/50 space-y-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-blue-600" />
          Frequently Asked Questions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 dark:text-slate-400">
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Can I test VeriFact AI without entering a credit card?</h4>
            <p>Yes, the Free Researcher plan is completely free forever with no credit card required.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Where do the trusted references come from?</h4>
            <p>We query open institutional databases including WHO, FDA, Reuters Fact Check, AP News, Nature, and non-partisan academic repositories.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
