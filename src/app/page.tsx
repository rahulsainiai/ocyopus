"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import WelcomeScreen from "@/components/WelcomeScreen";
import SuggestedPrompts from "@/components/SuggestedPrompts";
import MessageBubble from "@/components/MessageBubble";
import InputArea from "@/components/InputArea";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  isThinking?: boolean;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (content: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setIsThinking(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      setIsThinking(false);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: "I am Ocyopus, an intelligent AI assistant built to help with learning, coding, writing, reasoning, and problem-solving. Real AI backend will be connected soon.",
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      
      <main className="flex-1 overflow-y-auto w-full relative">
        {messages.length === 0 ? (
          <div className="flex flex-col min-h-full pb-8">
            <WelcomeScreen />
            <SuggestedPrompts onSelect={handleSend} />
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto px-4 py-8 pb-32">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} role={msg.role} content={msg.content} />
            ))}
            {isThinking && (
              <MessageBubble role="ai" content="" isThinking={true} />
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)] to-transparent pt-6 pb-2 px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <InputArea onSend={handleSend} disabled={isThinking} />
        </div>
      </div>
    </div>
  );
}
