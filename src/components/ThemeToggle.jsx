import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2.5 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50
        border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-cyan-500/40 shadow-sm"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
      </div>
    </button>
  );
}
