import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Globe, Heart } from 'lucide-react';
import { BrandGithub, BrandTwitter, BrandLinkedin } from '@/components/ui/Icons';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                VeriFact <span className="text-blue-600 dark:text-blue-400">AI</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Enterprise-grade AI verification and misinformation detection engine. Combining forensic NLP diagnostics with real-time multi-source cross referencing.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://github.com/Arterouss/AI-Fact-Checker" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                <BrandGithub className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <BrandTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <BrandLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><Link href="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">Verification Hub</Link></li>
              <li><Link href="/history" className="hover:text-blue-600 dark:hover:text-blue-400">Claim History & Archive</Link></li>
              <li><Link href="/features" className="hover:text-blue-600 dark:hover:text-blue-400">Forensic AI Engine</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400">SaaS Pricing Plans</Link></li>
            </ul>
          </div>

          {/* Documentation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Developers & Resources
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><Link href="/documentation" className="hover:text-blue-600 dark:hover:text-blue-400">API Documentation</Link></li>
              <li><Link href="/documentation#sdk" className="hover:text-blue-600 dark:hover:text-blue-400">Python & TS SDKs</Link></li>
              <li><a href="http://localhost:8000/docs" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">FastAPI Swagger Specs</a></li>
              <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">Methodology & Ethics</Link></li>
            </ul>
          </div>

          {/* System Status */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Verification Engine
            </h3>
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">System Status</span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  99.9% Operational
                </span>
              </div>
              <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                Avg Analysis Time: <span className="font-semibold text-slate-700 dark:text-slate-200">380ms</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/80 pt-6 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VeriFact AI Inc. Built with Next.js 15 & FastAPI.</p>
          <div className="mt-3 sm:mt-0 flex items-center gap-1">
            <span>Engineered for integrity & journalistic transparency.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
