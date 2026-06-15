import React from 'react';

const SUGGESTED_PROMPTS = [
  "भारत में AI क्यों जरूरी है?",
  "What is artificial intelligence?",
  "Who are you?",
  "Explain AI hallucination"
];

interface Props {
  onSelect: (prompt: string) => void;
}

export default function SuggestedPrompts({ onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl mx-auto mb-8 px-4">
      {SUGGESTED_PROMPTS.map((prompt, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(prompt)}
          className="text-left p-4 rounded-xl glass-hover text-purple-200/90 text-sm md:text-base font-medium transition-all duration-200 hover:text-white hover:-translate-y-0.5"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
