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
    <div className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Sheet Container */}
      <div className="bg-white w-full sm:max-w-md h-[85vh] sm:h-[600px] rounded-t-[2.5rem] sm:rounded-3xl flex flex-col shadow-2xl relative animate-in slide-in-from-bottom duration-500 ease-out overflow-hidden">
        
        {/* Handle Bar */}
        <div className="w-full flex justify-center pt-3 pb-1" onClick={onClose}>
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="px-6 py-4 flex justify-between items-center bg-white border-b border-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center shadow-md">
                <Icons.Headset size={20} className="text-white" />
            </div>
            <div>
                <h2 className="font-bold text-slate-800 text-lg">{TEXTS.chatTitle[lang]}</h2>
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-500">Online</span>
                </div>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
          >
            <Icons.Close size={18} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
               {msg.role === 'model' && (
                   <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-2 border border-amber-200 flex-shrink-0">
                       <Icons.Headset size={14} className="text-amber-600" />
                   </div>
               )}
              <div className={`max-w-[75%] px-4 py-3 text-[15px] leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm' 
                  : 'bg-white text-slate-700 border border-gray-100 rounded-2xl rounded-tl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start items-center space-x-2 pl-10">
               <div className="flex space-x-1">
                   <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                   <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
               </div>
               <span className="text-xs text-gray-400">Thinking...</span>
            </div>
          )}
        </div>

        {/* Input - with Safe Area padding */}
        <div className="p-4 bg-white border-t border-gray-100 pb-safe">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-1.5 py-1.5 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={TEXTS.inputPlaceholder[lang]}
              className="flex-1 bg-transparent outline-none text-base pl-4 text-slate-800 placeholder-slate-400 h-10"
            />
            <button 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()}
                className={`p-2.5 rounded-full shadow-md transition-all ${
                    input.trim() ? 'bg-blue-600 text-white scale-100' : 'bg-gray-300 text-white scale-90'
                }`}
            >
              <Icons.Send size={18} className={input.trim() ? 'translate-x-0.5' : ''} />
            </button>
          </div>
          {/* Spacer for home indicator inside the modal if needed specifically, handled by pb-safe generally */}
          <div className="h-4 sm:hidden"></div> 
        </div>
      </div>
    </div>
  );
};

export default ChatOverlay;