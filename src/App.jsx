import React from 'react';
import { useTheme } from './hooks/useTheme';
import NetworkBackground from './components/NetworkBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import AiShowcase from './sections/AiShowcase';
import Certifications from './sections/Certifications';
import ProblemSolving from './sections/ProblemSolving';
import Education from './sections/Education';
import GithubSection from './sections/GithubSection';
import Contact from './sections/Contact';

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-background-dark dark:text-slate-100 transition-colors duration-300">
      {/* Dynamic neural canvas background with mouse spotlight */}
      <NetworkBackground isDark={isDark} />

      {/* Floating Glass Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AiShowcase />
        <Certifications />
        <ProblemSolving />
        <Education />
        <GithubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
