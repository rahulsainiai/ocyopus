import React from 'react';

interface Props {
  role: 'user' | 'ai';
  content: string;
  isThinking?: boolean;
}

export default function MessageBubble({ role, content, isThinking }: Props) {
  const isUser = role === 'user';
  
  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] gap-3 md:gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
          isUser 
            ? 'bg-purple-800 text-purple-100' 
            : 'bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-[0_0_10px_rgba(139,92,246,0.3)]'
        }`}>
          {isUser ? 'U' : 'O'}
        </div>
        
        {/* Bubble */}
        <div className={`px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
          isUser 
            ? 'bg-purple-600 text-white rounded-tr-sm' 
            : 'glass text-purple-100/90 rounded-tl-sm'
        }`}>
          {isThinking ? (
            <div className="flex items-center gap-1.5 h-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 typing-dot" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 typing-dot" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 typing-dot" />
            </div>
          ) : (
            <div className="whitespace-pre-wrap">{content}</div>
          )}
        </div>
      </div>
    </div>
  );
}
