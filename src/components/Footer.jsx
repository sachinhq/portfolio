import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 transition-colors z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs shadow-sm">
                SK
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {personalInfo.name}
              </h2>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
              Full-Stack Developer | AI/ML | Generative AI
            </p>
          </div>

          {/* Center Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sachin Kumar GitHub Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-300 dark:hover:border-cyan-500/30 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sachin Kumar LinkedIn Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-300 dark:hover:border-cyan-500/30 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Email Sachin Kumar"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-300 dark:hover:border-cyan-500/30 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.codechef}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sachin Kumar CodeChef Profile"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-300 dark:hover:border-cyan-500/30 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <CodeChefIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Right Back to top button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>© 2026 Sachin Kumar. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Crafted for high-performance engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
