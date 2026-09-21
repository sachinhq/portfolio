import React from 'react';
import { GraduationCap, CheckCircle, School, Calendar, Globe2 } from 'lucide-react';
import { education } from '../data/portfolioData';

const timelineMilestones = [
  {
    year: '2023 – 2027',
    title: 'B.Tech — Computer Science Engineering',
    institution: 'Technocrats Institute of Technology, Bhopal',
    status: 'In Progress (Active Student)',
    grade: 'CGPA: 7.2',
    details: [
      'Specializing in Full-Stack Development, Backend Architecture, and Generative AI.',
      'Key Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.',
      'Actively applying computer science theory to production microservices and AI pipelines.',
    ],
    highlight: true,
  },
  {
    year: 'Completed',
    title: 'Senior Secondary Education (Class 12th)',
    institution: 'Central Board of Secondary Education (CBSE)',
    status: 'Graduated',
    grade: 'Score: 76%',
    details: [
      'Focus in Physics, Chemistry, and Mathematics (PCM).',
      'Developed strong analytical and computational foundations.',
    ],
    highlight: false,
  },
  {
    year: 'Completed',
    title: 'Secondary School Examination (Class 10th)',
    institution: 'Central Board of Secondary Education (CBSE)',
    status: 'Graduated with Distinction',
    grade: 'Score: 93.2%',
    details: [
      'High academic distinction with top percentile across mathematics and science streams.',
    ],
    highlight: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Education & Foundation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Rigorous engineering background establishing algorithmic discipline, systems fundamentals, and academic excellence.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-400 dark:to-slate-800 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-8 sm:space-y-12">
            {timelineMilestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center z-10 shadow-md hidden sm:flex">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2">
                    <div
                      className={`glass-panel p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover:border-cyan-500/40 shadow-xl ${
                        item.highlight
                          ? 'border-cyan-200 dark:border-cyan-500/30'
                          : 'border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                        <span className="px-2.5 py-0.5 rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 font-semibold flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-bold">
                          {item.grade}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm text-blue-700 dark:text-cyan-400 mb-4 font-semibold flex items-center gap-1.5">
                        <School className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                        {item.details.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for other side on desktop */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages pill bar */}
        <div className="mt-14 max-w-xl mx-auto p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center justify-around text-center text-xs font-mono">
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-slate-900 dark:text-slate-200 font-bold">
              Languages:
            </span>
          </div>
          <div className="text-slate-700 dark:text-slate-300">
            <span className="text-cyan-700 dark:text-cyan-400 font-semibold">English:</span> Fluent
          </div>
          <div className="text-slate-700 dark:text-slate-300">
            <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Hindi:</span> Fluent (Native)
          </div>
        </div>
      </div>
    </section>
  );
}
