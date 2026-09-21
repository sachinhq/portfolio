import React, { useState } from 'react';
import {
  ExternalLink,
  Maximize2,
  Layers,
  BrainCircuit,
  Mic,
  Server,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

const projectIcons = {
  'kamai-kharcha': Layers,
  'ai-doc-assistant': BrainCircuit,
  'ai-voice-assistant': Mic,
  'rest-auth-platform': Server,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const filteredProjects =
    filter === 'ALL'
      ? projects
      : filter === 'PROD'
      ? projects.filter((p) => !p.isConcept)
      : projects.filter((p) => p.isConcept);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 uppercase mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Production-quality web applications, robust backend microservices, and specialized AI/LLM architectures.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('ALL')}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'ALL'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setFilter('PROD')}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'PROD'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Production & Backends
          </button>
          <button
            onClick={() => setFilter('AI')}
            type="button"
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'AI'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            AI/LLM Concepts & Prototypes
          </button>
        </div>

        {/* Main Flagship Feature Card: KAMAI-KHARCHA */}
        {filter !== 'AI' && (
          <div className="mb-14 p-6 sm:p-10 rounded-3xl glass-panel relative overflow-hidden border border-cyan-200 dark:border-cyan-500/30 group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  FLAGSHIP APPLICATION
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 font-medium">
                  Full-Stack MERN
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(projects[0])}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-500/30 border border-cyan-200 dark:border-cyan-500/40 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
                  {projects[0].name}
                </h3>
                <div className="text-sm font-semibold text-blue-700 dark:text-cyan-400 mb-4">
                  {projects[0].subtitle}
                </div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                  {projects[0].description}
                </p>

                {/* Key feature list */}
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {projects[0].features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                  {projects[0].technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Diagram preview */}
              <div className="lg:col-span-5 w-full">
                <ArchitectureDiagram type="kamai-kharcha" />
              </div>
            </div>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => {
            const Icon = projectIcons[proj.id] || Layers;
            return (
              <div
                key={proj.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative border"
              >
                <div>
                  {/* Card Top badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    {proj.isConcept ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                        {proj.conceptLabel || 'AI Concept'}
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                        Verified Build
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {proj.name}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    {proj.subtitle}
                  </div>

                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mb-5 line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        +{proj.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span>Expand Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
