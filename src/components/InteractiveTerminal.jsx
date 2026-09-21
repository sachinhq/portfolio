import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState('bash');
  const [copied, setCopied] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  const bashLines = [
    { type: 'cmd', text: 'whoami' },
    { type: 'res', text: 'Sachin Kumar — Full-Stack & Generative AI Developer' },
    { type: 'cmd', text: 'cat current_role.txt' },
    { type: 'res', text: 'Full-Stack Developer Intern @ Pitavya Pvt Ltd' },
    { type: 'cmd', text: 'echo $TECH_STACK' },
    { type: 'res', text: 'React • Node.js • Express.js • MongoDB • Python • LLM / RAG' },
    { type: 'cmd', text: 'oci ai cert --status' },
    { type: 'res', text: 'Verified: Oracle 2025 Certified Generative AI Professional' },
    { type: 'cmd', text: 'git status' },
    { type: 'res', text: 'On branch main: Building scalable applications & intelligent AI experiences.' },
  ];

  // Progressive reveal for terminal output
  useEffect(() => {
    if (currentLine < bashLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 420);
      return () => clearTimeout(timer);
    }
  }, [currentLine, bashLines.length]);

  const handleCopy = () => {
    const textToCopy = `whoami: Sachin Kumar
role: Full-Stack Developer Intern @ Pitavya Pvt Ltd
stack: React, Node.js, Express, MongoDB, Python, AI/LLM
certification: Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
status: Building intelligent software...`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Subtle glowing halo behind terminal */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

      <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 dark:border-slate-800 light:border-slate-300/80 bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-900 shadow-2xl shadow-cyan-950/20 text-slate-200">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-800 border-b border-slate-800 dark:border-slate-800 light:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
            <span className="text-xs font-mono text-slate-400 ml-2 font-medium flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              sachin@dev-box: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switcher */}
            <div className="flex bg-slate-950/60 rounded-lg p-0.5 border border-slate-800 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setActiveTab('bash')}
                className={`px-2 py-0.5 rounded transition-all ${
                  activeTab === 'bash'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                bash
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('json')}
                className={`px-2 py-0.5 rounded transition-all ${
                  activeTab === 'json'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                profile.json
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 text-slate-400 hover:text-cyan-300 hover:bg-slate-800/80 rounded-md transition-colors"
              title="Copy details"
              aria-label="Copy terminal text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed min-h-[310px] overflow-x-auto">
          {activeTab === 'bash' && (
            <div className="space-y-2">
              {bashLines.slice(0, currentLine).map((line, idx) => (
                <div key={idx} className="transition-opacity duration-200">
                  {line.type === 'cmd' ? (
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-emerald-400 select-none">➜</span>
                      <span className="text-blue-400 select-none">~</span>
                      <span className="font-semibold text-slate-100">$ {line.text}</span>
                    </div>
                  ) : (
                    <div className="pl-5 text-slate-300 dark:text-slate-300 font-normal">
                      {line.text.includes('Verified:') ? (
                        <span className="text-amber-300 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-400 inline" />
                          {line.text}
                        </span>
                      ) : line.text.includes('React • Node.js') ? (
                        <span className="text-cyan-300">{line.text}</span>
                      ) : (
                        line.text
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Blinking active cursor */}
              <div className="flex items-center gap-2 text-cyan-400 pt-1">
                <span className="text-emerald-400 select-none">➜</span>
                <span className="text-blue-400 select-none">~</span>
                <span className="text-slate-300">$</span>
                <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block"></span>
              </div>
            </div>
          )}

          {activeTab === 'json' && (
            <pre className="text-slate-300 text-xs">
              <code>
{`{
  "engineer": "Sachin Kumar",
  "education": "B.Tech CSE (2023-2027) @ TIT Bhopal",
  "experience": "Pitavya Pvt Ltd (Full-Stack Intern)",
  "metrics": {
    "rest_apis": "10+",
    "users_secured": "100+",
    "endpoints_tested": "20+",
    "api_latency_reduction": "25%"
  },
  "certifications": [
    "Oracle 2025 Certified Generative AI Professional",
    "Postman API Fundamentals Student Expert"
  ],
  "focus": [
    "Full-Stack Web Engineering",
    "Scalable REST Microservices",
    "Generative AI & RAG Workflows"
  ],
  "status": "Available for high-impact engineering roles"
}`}
              </code>
            </pre>
          )}
        </div>

        {/* Terminal Footer Status Bar */}
        <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 font-medium">status: Ready</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>UTF-8</span>
            <span>node v25.2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
