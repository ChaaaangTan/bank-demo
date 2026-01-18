import React from 'react';
import { Icons } from './Icons';
import { Language } from '../types';
import { TEXTS, MENU_GRID } from '../constants';

interface QuickActionsProps {
  lang: Language;
}

const QuickActions: React.FC<QuickActionsProps> = ({ lang }) => {
  // Top main actions - Replaced with HK Banking standards
  const topActions = [
    { key: 'transfer', icon: Icons.Transfer, color: 'bg-emerald-500' }, // FPS is usually green or blue
    { key: 'scan', icon: Icons.Scan, color: 'bg-blue-500' },
    { key: 'fx', icon: Icons.Lang, color: 'bg-purple-500' },
    { key: 'cards', icon: Icons.CreditCard, color: 'bg-amber-500' },
  ];

  return (
    <div className="relative px-4">
      {/* Total Assets Section */}
      <div className="pt-2 pb-8 px-2">
        <div className="flex items-center text-white/70 text-sm mb-1">
             {TEXTS.totalAssets[lang]} 
             <Icons.ChevronRight size={14} className="ml-1" />
        </div>
        <div className="flex items-baseline space-x-2">
            <h1 className="text-4xl font-light text-white tracking-tight">
                2,840,500<span className="text-xl">.00</span>
            </h1>
            <div className="bg-white/20 px-2 py-0.5 rounded text-[10px] text-white flex items-center">
                +1.2% <Icons.TrendingUp size={10} className="ml-1"/>
            </div>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {topActions.map((action, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-md bg-white/10 border border-white/10`}>
              <action.icon size={22} className="text-white" />
            </div>
            <span className="text-[11px] text-white/90 font-medium">
              {TEXTS[action.key][lang]}
            </span>
          </div>
        ))}
      </div>

      {/* Main Grid Card */}
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 relative z-10 min-h-[200px]">
        {/* Search Bar inside the card area */}
        <div className="mb-6 bg-gray-100 rounded-lg flex items-center px-3 py-2.5">
            <Icons.Search size={16} className="text-gray-400 mr-2" />
            <input 
                type="text" 
                placeholder={TEXTS.searchPlaceholder[lang]} 
                className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
            />
        </div>

        <div className="grid grid-cols-5 gap-y-8">
          {MENU_GRID.map((item) => {
            const IconComponent = (Icons as any)[item.iconName] || Icons.More;
            return (
              <div key={item.id} className="flex flex-col items-center space-y-2 cursor-pointer group">
                 <div className={`p-2 rounded-xl transition-colors ${item.highlight ? 'bg-amber-50' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
                    <IconComponent size={22} className={`${item.highlight ? 'text-amber-600' : 'text-slate-600'}`} strokeWidth={1.5} />
                 </div>
                <span className="text-[10px] text-gray-600 text-center font-medium leading-tight px-1">
                  {TEXTS[item.labelKey][lang]}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* News Ticker */}
        <div className="mt-6 border-t border-gray-100 pt-3 flex items-center">
             <div className="bg-slate-900 text-amber-400 text-[9px] font-bold px-1.5 py-0.5 rounded mr-2 uppercase tracking-wide">
                 ALERT
             </div>
             <p className="text-[11px] text-gray-500 truncate flex-1">
                 {TEXTS.securityAlert[lang]}
             </p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;