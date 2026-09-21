import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { personalInfo } from '../data/portfolioData';
import InteractiveTerminal from '../components/InteractiveTerminal';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-300 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping inline-block" />
              <span>{personalInfo.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.12] mb-6">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-300">
                scalable applications
              </span>{' '}
              and intelligent AI experiences.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
              {personalInfo.subheading}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Sachin-Kumar-Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700/80 bg-white dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Profile Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Direct Profiles:
              </span>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono ml-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Intern @ Pitavya</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Panel */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <InteractiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
