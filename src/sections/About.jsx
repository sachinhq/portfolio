import React from 'react';
import { Layers, Server, BrainCircuit, Code2, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo, aboutPillars, education } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  Server: Server,
  BrainCircuit: BrainCircuit,
  Code2: Code2,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 uppercase mb-3">
            <span>Engineering Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            About Me
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Computer Science Engineering student bridging robust full-stack architecture with production Generative AI systems.
          </p>
        </div>

        {/* Top Profile & Education Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Photo & Quick Badges */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-30 dark:opacity-40 group-hover:opacity-60 transition duration-500" />
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl">
                <img
                  src={personalInfo.profileImage}
                  alt="Sachin Kumar"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 text-cyan-600 dark:text-cyan-400 font-mono text-5xl font-bold">SK<span class="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans">Sachin Kumar</span></div>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-white font-bold text-base">{personalInfo.name}</div>
                  <div className="text-cyan-300 text-xs font-mono flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    Bhopal, MP, India
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Badge */}
            <div className="mt-4 px-4 py-2 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Pitavya Pvt Ltd Intern</span>
            </div>
          </div>

          {/* Academic Journey & Engineering Story */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
                <GraduationCap className="w-4 h-4" />
                Academic Background
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {education.degree}
              </h3>
              <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                {education.institution}
              </div>

              <div className="flex flex-wrap items-center gap-3 my-4 font-mono text-xs">
                <span className="px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 font-semibold">
                  CGPA: {education.cgpa}
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                  Period: {education.period}
                </span>
                <span className="px-3 py-1 rounded-md bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 font-semibold">
                  Focus: Full-Stack & Generative AI
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {personalInfo.bio}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 grid sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                  <span>12th Standard (CBSE): 76%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                  <span>10th Standard (CBSE): 93.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Animated Focus Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aboutPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Layers;
            return (
              <div
                key={pillar.title}
                className="glass-card p-6 rounded-2xl relative group hover:-translate-y-1.5 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
