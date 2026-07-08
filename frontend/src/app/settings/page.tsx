'use client';

import React, { useState } from 'react';
import { Settings, Key, Shield, Bell, Moon, Sun, Save, Check } from 'lucide-react';

export default function SettingsPage() {
  const [sensitivity, setSensitivity] = useState('strict');
  const [autoSaveHistory, setAutoSaveHistory] = useState(true);
  const [apiKey, setApiKey] = useState('vf_live_9a8b7c6d5e4f3a2b1c');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleRegenerateKey = () => {
    const newKey = `vf_live_${Math.random().toString(36).substring(2, 14)}`;
    setApiKey(newKey);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-200/80 pb-6 dark:border-slate-800">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
          <Settings className="h-3.5 w-3.5" />
          Workspace Configuration
        </div>
        <h1 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
          Verification Preferences & API Keys
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Configure analysis depth, API credentials, and privacy settings for your VeriFact AI workspace.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Verification Engine Settings */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              AI Verification Rigor
            </h2>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Analysis Rigor Mode
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: 'standard', label: 'Standard Balance', desc: 'Balanced speed and primary source lookup.' },
                { id: 'strict', label: 'Strict Academic', desc: 'Requires multi-journal citation for True verdict.' },
                { id: 'fast', label: 'Fast Heuristic', desc: 'Optimized speed for high-volume social monitoring.' }
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSensitivity(m.id)}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    sensitivity === m.id
                      ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-600/20 dark:border-blue-500 dark:bg-blue-950/30'
                      : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900'
                  }`}
                >
                  <span className="block text-sm font-bold text-slate-900 dark:text-white">{m.label}</span>
                  <span className="mt-1 block text-xs text-slate-500">{m.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* API Credentials Card */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
            <Key className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              API Access Token
            </h2>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Live REST API Key
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                readOnly
                value={apiKey}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 font-mono text-xs text-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
              />
              <button
                type="button"
                onClick={handleRegenerateKey}
                className="shrink-0 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 transition-colors"
              >
                Regenerate Key
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Use this token in the <code className="font-mono">Authorization: Bearer &lt;token&gt;</code> header when calling <code className="font-mono">/api/v1/factcheck/analyze</code>.
            </p>
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex items-center justify-end gap-4">
          {saved && (
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <Check className="h-4 w-4" /> Preferences Saved Successfully
            </span>
          )}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-all active:scale-95"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
