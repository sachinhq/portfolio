import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, BookOpen, GitCommit, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function GithubSection() {
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/sachinhq');
        if (userRes.ok) {
          const userData = await userRes.json();
          setProfileData(userData);
        }

        const repoRes = await fetch('https://api.github.com/users/sachinhq/repos?sort=updated&per_page=6');
        if (repoRes.ok) {
          const repoData = await repoRes.json();
          if (Array.isArray(repoData)) {
            setRepos(repoData);
          }
        }
      } catch (err) {
        console.warn('GitHub API fetch bypassed / rate limited', err);
      }
    };

    fetchGithub();
  }, []);

  const weeks = 28;
  const days = 7;
  const contributionGrid = Array.from({ length: weeks * days }).map((_, i) => {
    const val = (i * 3 + (i % 7) * 5) % 9;
    return val > 6 ? 3 : val > 4 ? 2 : val > 2 ? 1 : 0;
  });

  return (
    <section id="github" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Open Source & Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            GitHub Activity & Repositories
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Public code repositories, full-stack commits, and open-source contributions by Sachin Kumar.
          </p>
        </div>

        {/* GitHub Profile Card */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 mb-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-md">
                <GithubIcon className="w-9 h-9" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Sachin Kumar
                  </h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">@sachinhq</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Full-Stack Developer • AI/ML Enthusiast • Generative AI
                </p>
              </div>
            </div>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Activity Visualizer Grid */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 mb-3">
              <span className="flex items-center gap-1.5 font-medium">
                <GitCommit className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Commit & Development Rhythm
              </span>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-200 dark:bg-slate-800 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-200 dark:bg-cyan-950 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 dark:bg-cyan-700 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600 dark:bg-cyan-400 inline-block" />
                <span>More</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 overflow-x-auto">
              <div
                className="grid grid-rows-7 grid-flow-col gap-1.5 w-max min-w-[500px]"
                style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
              >
                {contributionGrid.map((level, i) => {
                  const colors = [
                    'bg-slate-200 dark:bg-slate-800/60',
                    'bg-cyan-200 dark:bg-cyan-900/70',
                    'bg-cyan-400 dark:bg-cyan-600/80',
                    'bg-cyan-600 dark:bg-cyan-400',
                  ];
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm ${colors[level]} transition-colors hover:ring-1 hover:ring-cyan-400`}
                      title="Active engineering day"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Real Repositories if loaded from GitHub API */}
        {repos.length > 0 ? (
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-4 flex items-center gap-2 font-semibold">
              <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Public Repositories on GitHub
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.slice(0, 6).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-500" />
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                      {repo.description || 'Public engineering repository.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{repo.language || 'Code'}</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center p-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <span>Explore all repositories and code samples directly on </span>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:underline font-mono font-semibold"
            >
              github.com/sachinhq
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
