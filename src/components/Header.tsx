import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          O
        </div>
        <h1 className="text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
          Ocyopus
        </h1>
        <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-purple-900/50 text-purple-300 border border-purple-700/50">
          Beta
        </span>
      </div>
      <div className="text-sm text-purple-200/60 font-medium tracking-wider hidden sm:block">
        Intelligence Without Limits
      </div>
    </header>
  );
}
