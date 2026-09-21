import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const currentExp = experience[0];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 uppercase mb-3">
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Professional Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Documented industry experience developing secure backend architectures, APIs, and microservices.
          </p>
        </div>

        {/* Animated Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {currentExp.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl text-center flex flex-col items-center justify-center group hover:border-cyan-500/40 transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-1 group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </span>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Experience Timeline Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Timeline Node Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-slate-800/80 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {currentExp.role}
                  </h3>
                  <div className="text-sm font-semibold text-blue-700 dark:text-cyan-400 flex items-center gap-2 mt-0.5">
                    <span>{currentExp.company}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                      {currentExp.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                {currentExp.period}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Role
              </span>
            </div>
          </div>

          {/* Achievement Bullets */}
          <div className="space-y-4 mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold">
              Verified Technical Contributions:
            </h4>
            <div className="grid md:grid-cols-2 gap-3.5">
              {currentExp.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed group hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold block mb-3">
              Technologies Utilized:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentExp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
