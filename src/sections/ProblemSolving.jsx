import React from 'react';
import {
  Code,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { problemSolving } from '../data/portfolioData';

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Algorithmic Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Problem Solving & System Design
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {problemSolving.summary}
          </p>
        </div>

        {/* CodeChef Spotlight Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl glass-panel border border-emerald-200 dark:border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Code className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-semibold">
                  Competitive Programming
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">@{problemSolving.codechefUser}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                Active CodeChef Competitive Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mt-0.5">
                Practicing algorithmic problem solving, time-complexity analysis, and edge-case resilience in C++ and Java.
              </p>
            </div>
          </div>

          <a
            href={problemSolving.codechefUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 shrink-0"
          >
            <span>View CodeChef Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemSolving.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="glass-card p-6 rounded-2xl border flex flex-col justify-between hover:border-emerald-500/40 transition-colors group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                  {idx === 0 && <Cpu className="w-5 h-5" />}
                  {idx === 1 && <Network className="w-5 h-5" />}
                  {idx === 2 && <Database className="w-5 h-5" />}
                  {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                </div>

                <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
                  {pillar.title}
                </h4>

                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
