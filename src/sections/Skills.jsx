import React, { useState } from 'react';
import {
  Terminal,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  ArrowDown,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const categoryIcons = {
  PROGRAMMING: Terminal,
  FRONTEND: Layout,
  BACKEND: Server,
  DATABASES: Database,
  'DEVELOPER TOOLS': Wrench,
  'AI & NLP': Brain,
};

const aiSkillMapNodes = [
  {
    id: 'llm',
    name: 'LLM (GPT-based)',
    badge: 'Foundation Reasoning',
    desc: 'Foundational transformer models for general instruction comprehension, structured JSON output, and coding assistance.',
    tech: 'GPT-4 / Llama / Prompt Engineering',
  },
  {
    id: 'rag',
    name: 'RAG (Retrieval-Augmented)',
    badge: 'Context Injection',
    desc: 'Vector embeddings, chunking strategies, semantic similarity search, and grounding against hallucination.',
    tech: 'Vector Databases / Embeddings / Chunking',
  },
  {
    id: 'nlp',
    name: 'NLP (Natural Language Processing)',
    badge: 'Linguistic Parsing',
    desc: 'Tokenization, named entity recognition (NER), semantic intent classification, and syntax normalization.',
    tech: 'Tokenization / Intent Modeling',
  },
  {
    id: 'stt',
    name: 'STT (Whisper Audio)',
    badge: 'Acoustic Transcription',
    desc: 'OpenAI Whisper for noise-resilient speech-to-text conversion and real-time audio chunk processing.',
    tech: 'OpenAI Whisper / Audio Buffering',
  },
  {
    id: 'tts',
    name: 'TTS (Microsoft Speech)',
    badge: 'Voice Synthesis',
    desc: 'Neural speech synthesis via Microsoft Cognitive Services with realistic prosody, cadence, and multi-language support.',
    tech: 'Microsoft Cognitive Services / SSML',
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedAiNode, setSelectedAiNode] = useState(aiSkillMapNodes[0]);

  const filteredCategories =
    activeCategory === 'ALL'
      ? technicalSkills
      : technicalSkills.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 uppercase mb-3">
            <span>Engineering Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Technical Skills & Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Comprehensive toolkit spanning full-stack web engineering, database architecture, and generative AI systems.
          </p>
        </div>

        {/* AI Skill Map Showcase */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden border border-cyan-200 dark:border-cyan-500/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1 font-semibold">
                <Brain className="w-4 h-4" />
                <span>INTERACTIVE AI ARCHITECTURE MAP</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                End-to-End Generative AI & NLP Pipeline
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Click any node to inspect technical pipeline details
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Visual Animated Skill Flow (LLM -> RAG -> NLP -> STT -> TTS) */}
            <div className="lg:col-span-7 flex flex-col items-center gap-3 w-full">
              {aiSkillMapNodes.map((node, index) => {
                const isSelected = selectedAiNode.id === node.id;
                return (
                  <React.Fragment key={node.id}>
                    <div
                      onClick={() => setSelectedAiNode(node)}
                      className={`w-full max-w-md p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                        isSelected
                          ? 'bg-blue-50/90 dark:bg-gradient-to-r dark:from-cyan-950/70 dark:to-blue-950/70 border-blue-500 dark:border-cyan-400/80 shadow-md shadow-cyan-500/10 scale-[1.02]'
                          : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-cyan-500/40'
                      } flex items-center justify-between group`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-colors ${
                            isSelected
                              ? 'bg-cyan-500 text-white dark:text-slate-950 shadow-sm'
                              : 'bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-cyan-400 group-hover:bg-cyan-500/20'
                          }`}
                        >
                          0{index + 1}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                            {node.name}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {node.badge}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-900/90 text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700/50">
                          {node.id.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {index < aiSkillMapNodes.length - 1 && (
                      <div className="flex items-center justify-center text-cyan-600 dark:text-cyan-400 animate-pulse">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Right Node Inspector */}
            <div className="lg:col-span-5 w-full">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    Pipeline Inspector
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30">
                    {selectedAiNode.badge}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {selectedAiNode.name}
                </h4>

                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-5">
                  {selectedAiNode.desc}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 mb-4 font-mono text-xs">
                  <span className="text-slate-500 dark:text-slate-400 block mb-1 text-[10px] uppercase">
                    Key Technology:
                  </span>
                  <span className="text-cyan-700 dark:text-cyan-300 font-semibold">{selectedAiNode.tech}</span>
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Integrated in Sachin's AI architectures & coursework</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {['ALL', ...technicalSkills.map((c) => c.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Terminal;
            return (
              <div
                key={group.category}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-mono text-xs font-bold tracking-wider text-slate-900 dark:text-slate-100">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between hover:border-cyan-500/30 transition-colors"
                      >
                        <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-700 dark:text-cyan-400 font-semibold">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
