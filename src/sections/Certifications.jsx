import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Official Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Professional Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Industry-accredited qualifications validating engineering standards in Generative AI and REST API architectures.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Header with Issuer & Date */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        cert.color === 'amber'
                          ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30'
                          : 'bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-500/30'
                      }`}
                    >
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
                        {cert.issuer}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Issued: {cert.date}
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    Verified
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                  {cert.description}
                </p>

                {/* Skills Covered Tags */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2.5 font-medium">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>Credential ID: {cert.badgeId}</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-medium">Authentic Industry Certificate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
