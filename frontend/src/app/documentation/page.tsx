'use client';

import React, { useState } from 'react';
import { BookOpen, Terminal, Code, Copy, Check, ExternalLink } from 'lucide-react';

export default function DocumentationPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const curlExample = `curl -X POST "http://localhost:8000/api/v1/factcheck/analyze" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Secret microchips are being injected into citizens through routine vaccines...",
    "platform": "facebook",
    "include_deep_nlp": true
  }'`;

  const pythonExample = `import httpx

url = "http://localhost:8000/api/v1/factcheck/analyze"
payload = {
    "text": "Drinking 2 to 3 cups of coffee daily is linked to longer lifespan...",
    "platform": "news",
    "include_deep_nlp": True
}

response = httpx.post(url, json=payload)
data = response.json()

print("Verdict:", data["verdict_label"])
print("Confidence Score:", f'{data["confidence_score"]}%')
for source in data["trusted_sources"]:
    print(f'- Source: {source["title"]} ({source["domain"]})')`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
            <BookOpen className="h-3.5 w-3.5" />
            Developer API Docs
          </div>
          <h1 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
            API Reference & Integration Guide
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Integrate VeriFact AI verification and forensic NLP diagnostics into your Python backend, Next.js app, or editorial CMS.
          </p>
        </div>

        <a
          href="http://localhost:8000/docs"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-all"
        >
          Interactive Swagger UI
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* REST Endpoints Overview */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Endpoints Summary</h2>

        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-200/80 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950">
              <tr>
                <th className="px-5 py-3.5 font-bold">HTTP Method</th>
                <th className="px-5 py-3.5 font-bold">Endpoint Path</th>
                <th className="px-5 py-3.5 font-bold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800">
              <tr>
                <td className="px-5 py-3.5 font-mono font-bold text-blue-600 dark:text-blue-400">POST</td>
                <td className="px-5 py-3.5 font-mono font-semibold">/api/v1/factcheck/analyze</td>
                <td className="px-5 py-3.5 text-slate-600 dark:text-slate-300">Run comprehensive fact-checking & NLP diagnostics on text or claim.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-mono font-bold text-emerald-600 dark:text-emerald-400">GET</td>
                <td className="px-5 py-3.5 font-mono font-semibold">/api/v1/factcheck/examples</td>
                <td className="px-5 py-3.5 text-slate-600 dark:text-slate-300">Get curated demo claims covering True, False, and Misleading verdicts.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-mono font-bold text-emerald-600 dark:text-emerald-400">GET</td>
                <td className="px-5 py-3.5 font-mono font-semibold">/api/v1/factcheck/history</td>
                <td className="px-5 py-3.5 text-slate-600 dark:text-slate-300">List verified dossier history with optional platform filtering.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-mono font-bold text-emerald-600 dark:text-emerald-400">GET</td>
                <td className="px-5 py-3.5 font-mono font-semibold">/api/v1/factcheck/stats</td>
                <td className="px-5 py-3.5 text-slate-600 dark:text-slate-300">Retrieve global verification accuracy benchmarks and metrics.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Snippets */}
      <div className="space-y-8" id="sdk">
        {/* cURL Example */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-900 p-6 text-white shadow-sm dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-blue-400" />
              <span className="text-xs font-semibold">cURL Request Example</span>
            </div>
            <button
              onClick={() => handleCopy(curlExample, 'curl')}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700"
            >
              {copiedSection === 'curl' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              {copiedSection === 'curl' ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre className="overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed">
            <code>{curlExample}</code>
          </pre>
        </div>

        {/* Python Example */}
        <div className="rounded-2xl border border-slate-200/80 bg-slate-900 p-6 text-white shadow-sm dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold">Python SDK / HTTPX Example</span>
            </div>
            <button
              onClick={() => handleCopy(pythonExample, 'python')}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700"
            >
              {copiedSection === 'python' ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              {copiedSection === 'python' ? 'Copied' : 'Copy'}
            </button>
          </div>
          <pre className="overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed">
            <code>{pythonExample}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
