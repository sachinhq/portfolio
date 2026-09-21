import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50 dark:bg-slate-950">
          <div className="pr-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30">
                {project.category}
              </span>
              {project.isConcept ? (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                  {project.conceptLabel || 'AI/LLM Project Concept'}
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                  Verified Engineering
                </span>
              )}
            </div>
            <h2 id="modal-project-title" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {project.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Concept notice if applicable */}
          {project.isConcept && (
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>
                <strong>Engineering Concept:</strong> This architecture demonstrates Sachin's technical mastery in LLM pipelines, RAG retrieval schemas, and audio synthesis pipelines based on his verified certifications and skills.
              </span>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Problem Statement
              </h3>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Architected Solution
              </h3>
              <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Diagram if Kamai-Kharcha or Architecture details */}
          {project.id === 'kamai-kharcha' ? (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold mb-2">
                End-to-End Architecture
              </h3>
              <ArchitectureDiagram type="kamai-kharcha" />
            </div>
          ) : (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold mb-3">
                System Architectural Layers
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs">
                {project.architecture &&
                  Object.entries(project.architecture).map(([key, val]) => (
                    <div
                      key={key}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800"
                    >
                      <span className="text-cyan-600 dark:text-cyan-400 capitalize block mb-1 text-[11px] font-bold">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 text-xs font-sans">
                        {val}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-slate-300 font-bold mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Key Engineering Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-slate-300 font-bold mb-2.5">
              Technologies & Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {project.isConcept
              ? 'Concept architecture developed for AI & backend scenarios'
              : 'Production MERN system with verified achievements'}
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub Repo
              </a>
            )}
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:from-blue-500 hover:to-cyan-400 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
