import React, { useState, useEffect } from 'react';
import {
  Brain,
  Sparkles,
  Play,
  RotateCcw,
  Cpu,
  Database,
  Volume2,
  MessageSquare,
} from 'lucide-react';
import { aiPipelineSteps } from '../data/portfolioData';

const samplePrompts = [
  'Retrieve transaction breakdown for Q3 expense reporting and stream voice summary.',
  'Analyze MongoDB aggregation latency and formulate an optimized indexing rule.',
  'Transcribe user voice memo via Whisper and query internal RAG vector knowledge.',
];

export default function AiShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(samplePrompts[0]);

  // Simulated pipeline execution
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= aiPipelineSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleRunSimulation = () => {
    setActiveStep(0);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStep(0);
  };

  return (
    <section id="ai" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Generative AI Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Exploring the Future of AI
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Certified Generative AI workflows combining Large Language Models, Retrieval-Augmented Generation, and multimodal voice interaction.
          </p>
        </div>

        {/* Interactive Neural Pipeline Simulator */}
        <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-purple-200 dark:border-purple-500/30 relative overflow-hidden mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-700 dark:text-purple-400 uppercase tracking-wider mb-1 font-semibold">
                <Brain className="w-4 h-4" />
                <span>Interactive Pipeline Simulator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                End-to-End Multimodal Data Flow
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleRunSimulation}
                disabled={isPlaying}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 transition-all shadow-md shadow-purple-500/20"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isPlaying ? 'Running Pipeline...' : 'Run Pipeline'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sample prompt select */}
          <div className="mb-8 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            <label className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-2 font-medium">
              Select Input Prompt to Trace Execution:
            </label>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedPrompt(p);
                    setActiveStep(0);
                  }}
                  className={`text-left px-3 py-1.5 rounded-xl text-xs transition-all ${
                    selectedPrompt === p
                      ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-500/40 font-semibold'
                      : 'bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Pipeline Nodes Flow */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {aiPipelineSteps.map((step, index) => {
              const isPast = index <= activeStep;
              const isCurrent = index === activeStep;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-purple-50 dark:bg-gradient-to-b dark:from-purple-950/80 dark:to-indigo-950/80 border-purple-500 dark:border-purple-400/90 shadow-md shadow-purple-500/20 scale-105'
                      : isPast
                      ? 'bg-white dark:bg-slate-950/80 border-purple-300 dark:border-purple-500/40 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 opacity-60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-100 dark:bg-slate-900 text-purple-800 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30 font-semibold">
                        0{index + 1}
                      </span>
                      {isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
                      )}
                    </div>
                    <div className="font-mono font-bold text-xs text-slate-900 dark:text-slate-100 mb-1">
                      {step.short}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                      {step.badge}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep Inspector */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 font-mono text-xs shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
              <span className="text-purple-700 dark:text-purple-400 font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Active Node: {aiPipelineSteps[activeStep].title}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                {activeStep === aiPipelineSteps.length - 1
                  ? 'Output stream completed'
                  : 'Processing data stream...'}
              </span>
            </div>

            <p className="text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {aiPipelineSteps[activeStep].desc}
            </p>

            {/* Always dark terminal style console for authentic developer contrast */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
              <div className="text-slate-400 text-[10px] uppercase mb-1">Pipeline Console Log:</div>
              <div className="text-purple-300">
                &gt; Node [{aiPipelineSteps[activeStep].short}] executing for query:{' '}
                <span className="text-slate-100 italic">"{selectedPrompt.slice(0, 60)}..."</span>
              </div>
              <div className="text-emerald-400 mt-1">
                &gt; Latency: ~14ms | Verification: Deterministic Guardrails Active
              </div>
            </div>
          </div>
        </div>

        {/* AI Key Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl border hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-700 dark:text-purple-400 mb-4">
              <Brain className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              LLMs & GPT Systems
            </h4>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Proficient in system prompt tuning, token sampling, few-shot prompting, and structured output formatting.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-700 dark:text-indigo-400 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              RAG & Context Injection
            </h4>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Retrieval architectures integrating vector embeddings, semantic ranking, and hallucination reduction.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-700 dark:text-cyan-400 mb-4">
              <Volume2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              Whisper & STT Audio
            </h4>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              High-accuracy speech-to-text transcription for voice commands, audio indexing, and conversation logging.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 flex items-center justify-center text-pink-700 dark:text-pink-400 mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-2">
              Microsoft TTS Synthesis
            </h4>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Realistic text-to-speech audio pipelines for conversational agents and multimodal accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
