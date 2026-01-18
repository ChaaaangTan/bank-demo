import React from 'react';
import { Icons } from './Icons';
import { Language } from '../types';
import { TEXTS } from '../constants';

interface BottomNavProps {
  lang: Language;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ lang, activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: Icons.Home, labelKey: 'navHome' },
    { id: 'wealth', icon: Icons.Wealth, labelKey: 'navWealth' },
    { id: 'community', icon: Icons.News, labelKey: 'navCommunity' },
    { id: 'me', icon: Icons.Me, labelKey: 'navMe' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 py-2 px-6 flex justify-between items-center z-40 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex flex-col items-center space-y-1.5 w-16 group"
          >
            <div className={`transition-all duration-300 ${isActive ? '-translate-y-1' : ''}`}>
                <tab.icon 
                    size={22} 
                    className={`transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-gray-400 group-hover:text-gray-500'}`} 
                    strokeWidth={isActive ? 2.5 : 2}
                />
            </div>
            <span className={`text-[10px] tracking-wide ${isActive ? 'text-slate-900 font-bold' : 'text-gray-400'}`}>
              {TEXTS[tab.labelKey][lang]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;