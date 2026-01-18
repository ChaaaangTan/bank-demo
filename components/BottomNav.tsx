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
    // iOS Standard Tab Bar: Heavy Blur + Translucent White/Gray
    <div className="fixed bottom-0 left-0 right-0 bg-white/85 backdrop-blur-xl border-t border-gray-200/50 flex justify-between items-center z-50 pb-safe pt-2 px-6 shadow-[0_-1px_3px_rgba(0,0,0,0.05)] transition-all">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex flex-col items-center justify-center space-y-1 w-16 h-12 active:scale-90 transition-transform duration-200"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className={`transition-all duration-300 relative ${isActive ? '-translate-y-0.5' : ''}`}>
                <tab.icon 
                    size={24} 
                    className={`transition-colors duration-300 ${isActive ? 'text-blue-600 fill-blue-600/10' : 'text-gray-400'}`} 
                    strokeWidth={isActive ? 2.5 : 2}
                />
            </div>
            <span className={`text-[10px] font-medium tracking-wide leading-none transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
              {TEXTS[tab.labelKey][lang]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;