import React from 'react';
import { Icons } from './Icons';
import { Language } from '../types';
import { TEXTS } from '../constants';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onOpenChat }) => {
  return (
    // pt-safe handles the notch/dynamic island, added extra padding for spacing
    <div className="pt-safe px-6 flex items-center justify-between text-white z-20 relative transition-all duration-300">
      <div className="pt-2 pb-2 w-full flex justify-between items-center">
        {/* Left: Brand/Logo Text */}
        <div className="flex flex-col animate-in fade-in slide-in-from-left-4 duration-700">
          <span className="font-serif text-lg font-bold tracking-wider text-amber-400 drop-shadow-sm">
              {lang === 'en' ? 'HARBOUR' : '港灣'}
          </span>
          <span className="text-[10px] text-white/70 tracking-[0.2em] uppercase font-medium">
              {lang === 'en' ? 'PRIVATE BANKING' : '私人銀行'}
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenChat} 
            className="relative p-2.5 bg-white/10 rounded-full backdrop-blur-md border border-white/5 active:scale-90 active:bg-white/20 transition-all duration-200"
          >
            <Icons.Headset size={20} className="text-white" />
            <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-slate-900 shadow-sm"></span>
          </button>
          
          <button className="relative p-2.5 bg-white/10 rounded-full backdrop-blur-md border border-white/5 active:scale-90 active:bg-white/20 transition-all duration-200">
            <Icons.Message size={20} className="text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-slate-900 shadow-sm">
              3
            </span>
          </button>
          
          <button 
            onClick={onToggleLang} 
            className="h-10 px-3 bg-white/10 rounded-full backdrop-blur-md border border-white/5 flex items-center justify-center active:scale-95 active:bg-white/20 transition-all duration-200"
          >
              <span className="text-xs font-bold font-serif text-white/90">{lang === 'en' ? 'EN' : '繁'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;