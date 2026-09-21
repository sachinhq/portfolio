import React from 'react';
import { Layers, ShieldCheck, Database, Server, ArrowDown } from 'lucide-react';

export default function ArchitectureDiagram({ type = 'kamai-kharcha' }) {
  if (type === 'kamai-kharcha') {
    return (
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-xs shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
          <span className="text-cyan-700 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            System Architecture & Data Flow
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-[10px] font-semibold">
            MERN + JWT RBAC
          </span>
        </div>

        {/* Desktop Pipeline Layout */}
        <div className="hidden sm:grid grid-cols-4 gap-3 items-center text-center">
          {/* Node 1: React */}
          <div className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-cyan-200 dark:border-cyan-500/30 shadow-sm flex flex-col items-center gap-1.5 group hover:border-cyan-400 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Layers className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 dark:text-slate-200">React Client</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">SPA / Responsive UI</span>
          </div>

          {/* Node 2: REST API Layer */}
          <div className="relative p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-blue-200 dark:border-blue-500/30 shadow-sm flex flex-col items-center gap-1.5 group hover:border-blue-400 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Server className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 dark:text-slate-200">REST API Gateway</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">Node.js + Express</span>
          </div>

          {/* Node 3: Auth Layer */}
          <div className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-purple-200 dark:border-purple-500/30 shadow-sm flex flex-col items-center gap-1.5 group hover:border-purple-400 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 dark:text-slate-200">JWT & RBAC</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">Access Control Guard</span>
          </div>

          {/* Node 4: Database */}
          <div className="p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-emerald-200 dark:border-emerald-500/30 shadow-sm flex flex-col items-center gap-1.5 group hover:border-emerald-400 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Database className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 dark:text-slate-200">MongoDB</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">Aggregation & Schemas</span>
          </div>
        </div>

        {/* Mobile vertical layout */}
        <div className="flex sm:hidden flex-col gap-2 items-center text-center">
          <div className="w-full p-2.5 rounded-lg bg-white dark:bg-slate-950/70 border border-cyan-200 dark:border-cyan-500/30 shadow-sm">
            <div className="font-bold text-slate-900 dark:text-slate-200">React Frontend</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Responsive UI & State</div>
          </div>
          <ArrowDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <div className="w-full p-2.5 rounded-lg bg-white dark:bg-slate-950/70 border border-blue-200 dark:border-blue-500/30 shadow-sm">
            <div className="font-bold text-slate-900 dark:text-slate-200">REST API (Node / Express)</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Routing & Rate Limiting</div>
          </div>
          <ArrowDown className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <div className="w-full p-2.5 rounded-lg bg-white dark:bg-slate-950/70 border border-purple-200 dark:border-purple-500/30 shadow-sm">
            <div className="font-bold text-slate-900 dark:text-slate-200">JWT Authentication & RBAC</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Token Verification Guard</div>
          </div>
          <ArrowDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <div className="w-full p-2.5 rounded-lg bg-white dark:bg-slate-950/70 border border-emerald-200 dark:border-emerald-500/30 shadow-sm">
            <div className="font-bold text-slate-900 dark:text-slate-200">MongoDB Database</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Optimized Aggregations</div>
          </div>
        </div>

        {/* Architectural footnote */}
        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400 font-sans flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>Security: Stateless JWT Bearer tokens with encrypted payload verification.</span>
          <span className="text-cyan-700 dark:text-cyan-400 font-mono font-semibold">Response optimization: ~25%</span>
        </div>
      </div>
    );
  }

  return null;
}
