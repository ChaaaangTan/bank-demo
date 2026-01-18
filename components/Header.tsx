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
    <div className="pt-12 pb-2 px-6 flex items-center justify-between text-white z-20 relative">
      {/* Left: Brand/Logo Text */}
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold tracking-wider text-amber-400">
            {lang === 'en' ? 'HARBOUR' : '港灣'}
        </span>
        <span className="text-[10px] text-white/60 tracking-widest uppercase">
            {lang === 'en' ? 'PRIVATE BANKING' : '私人銀行'}
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-5">
        <button onClick={onOpenChat} className="relative p-2 bg-white/10 rounded-full backdrop-blur-md">
          <Icons.Headset size={20} className="text-white" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-slate-900"></span>
        </button>
        <button className="relative p-2 bg-white/10 rounded-full backdrop-blur-md">
          <Icons.Message size={20} className="text-white" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center border-2 border-slate-900">
            3
          </span>
        </button>
        <button onClick={onToggleLang} className="p-2 bg-white/10 rounded-full backdrop-blur-md">
            <span className="text-xs font-bold font-serif">{lang === 'en' ? 'EN' : '繁'}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;