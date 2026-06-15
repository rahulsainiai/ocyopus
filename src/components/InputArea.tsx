import React, { useState, KeyboardEvent } from 'react';

interface Props {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function InputArea({ onSend, disabled }: Props) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 w-full max-w-3xl mx-auto">
      <div className="relative flex items-center bg-[rgba(20,15,35,0.7)] border border-purple-800/40 rounded-2xl p-2 shadow-lg backdrop-blur-md transition-all focus-within:border-purple-500/60 focus-within:ring-1 focus-within:ring-purple-500/60">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything in Hindi or English..."
          disabled={disabled}
          rows={1}
          className="flex-1 bg-transparent text-purple-100 placeholder-purple-400/50 resize-none outline-none py-3 px-4 max-h-32 min-h-[52px]"
          style={{ fieldSizing: 'content' }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          className="shrink-0 w-10 h-10 ml-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900/50 disabled:text-purple-400/40 text-white flex items-center justify-center transition-colors disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -mr-0.5 mt-0.5">
            <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
          </svg>
        </button>
      </div>
      <div className="text-center mt-3 text-xs text-purple-300/40">
        Ocyopus can make mistakes. Consider verifying important information.
      </div>
    </div>
  );
}
