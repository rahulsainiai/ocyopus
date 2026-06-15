import React from 'react';

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full mt-20 md:mt-32 px-4 mb-8">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-[0_0_40px_rgba(139,92,246,0.4)] flex items-center justify-center mb-8 rotate-3 transform hover:rotate-6 transition-transform duration-500">
        <span className="text-4xl md:text-5xl text-white font-bold tracking-tighter">O</span>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center">
        Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">Ocyopus</span>
      </h2>
      
      <p className="text-lg md:text-xl text-purple-200/80 font-medium mb-2 text-center">
        Your intelligent AI assistant
      </p>
      
      <p className="text-sm md:text-base text-purple-300/60 mb-12 text-center max-w-md">
        Ask anything in Hindi or English
      </p>
    </div>
  );
}
