import React, { useState, useEffect, useRef } from 'react';
import { Icons } from './Icons';
import { Language, Message } from '../types';
import { TEXTS } from '../constants';
import { generateResponse } from '../services/geminiService';

interface ChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const ChatOverlay: React.FC<ChatOverlayProps> = ({ isOpen, onClose, lang }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', text: TEXTS.chatWelcome[lang] }]);
    }
  }, [isOpen, lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateResponse(userMsg, lang);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full sm:max-w-md h-[80vh] sm:h-[600px] rounded-t-2xl sm:rounded-2xl flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-300">
        
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-2xl">
          <div className="flex items-center space-x-2">
            <Icons.Headset size={20} />
            <h2 className="font-bold">{TEXTS.chatTitle[lang]}</h2>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full">
            <Icons.Close size={20} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.role === 'user' 
                  ? 'bg-red-500 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-gray-200 px-4 py-2 rounded-full text-xs text-gray-500 animate-pulse">
                 AI Thinking...
               </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t bg-white safe-area-bottom">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={TEXTS.inputPlaceholder[lang]}
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button 
                onClick={handleSend} 
                disabled={isLoading}
                className={`p-2 rounded-full ${isLoading ? 'text-gray-400' : 'text-red-500'}`}
            >
              <Icons.Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatOverlay;
