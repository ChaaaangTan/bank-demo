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
    { key: 'transfer', icon: Icons.Transfer, color: 'bg-emerald-500', gradient: 'from-emerald-400 to-emerald-600' }, 
    { key: 'scan', icon: Icons.Scan, color: 'bg-blue-500', gradient: 'from-blue-400 to-blue-600' },
    { key: 'fx', icon: Icons.Lang, color: 'bg-purple-500', gradient: 'from-purple-400 to-purple-600' },
    { key: 'cards', icon: Icons.CreditCard, color: 'bg-amber-500', gradient: 'from-amber-400 to-amber-600' },
  ];

  return (
    <div className="relative px-4">
      {/* Total Assets Section */}
      <div className="pt-4 pb-8 px-2">
        <div className="flex items-center text-white/70 text-sm mb-1 font-medium">
             {TEXTS.totalAssets[lang]} 
             <Icons.ChevronRight size={14} className="ml-1 opacity-70" />
        </div>
        <div className="flex items-baseline space-x-2">
            <h1 className="text-[2.75rem] font-light text-white tracking-tight leading-none">
                2,840,500<span className="text-2xl text-white/80">.00</span>
            </h1>
            <div className="bg-emerald-500/20 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] text-emerald-300 font-semibold flex items-center border border-emerald-500/30">
                +1.2% <Icons.TrendingUp size={10} className="ml-1"/>
            </div>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {topActions.map((action, idx) => (
          <button 
            key={idx} 
            className="flex flex-col items-center space-y-2 group active:scale-95 transition-transform duration-200"
          >
            <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center shadow-lg bg-gradient-to-br ${action.gradient} text-white shadow-lg shadow-black/10`}>
              <action.icon size={24} className="drop-shadow-md" />
            </div>
            <span className="text-[11px] text-white/90 font-medium tracking-wide">
              {TEXTS[action.key][lang]}
            </span>
          </button>
        ))}
      </div>

      {/* Main Grid Card */}
      <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-xl shadow-slate-900/10 p-6 relative z-10 min-h-[200px] border border-white/50">
        {/* Search Bar inside the card area */}
        <div className="mb-6 bg-slate-100 rounded-xl flex items-center px-4 py-3 transition-colors active:bg-slate-200">
            <Icons.Search size={18} className="text-slate-400 mr-3" />
            <input 
                type="text" 
                placeholder={TEXTS.searchPlaceholder[lang]} 
                className="bg-transparent text-sm w-full outline-none text-slate-800 placeholder-slate-400 font-medium"
            />
        </div>

        <div className="grid grid-cols-5 gap-y-8">
          {MENU_GRID.map((item) => {
            const IconComponent = (Icons as any)[item.iconName] || Icons.More;
            return (
              <button key={item.id} className="flex flex-col items-center space-y-2 cursor-pointer active:scale-90 transition-transform duration-200">
                 <div className={`p-2.5 rounded-2xl transition-colors ${item.highlight ? 'bg-amber-50 text-amber-600' : 'bg-slate-50 text-slate-600'}`}>
                    <IconComponent size={24} strokeWidth={1.5} />
                 </div>
                <span className="text-[10px] text-slate-600 text-center font-medium leading-tight px-1 scale-95">
                  {TEXTS[item.labelKey][lang]}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* News Ticker */}
        <div className="mt-6 border-t border-slate-100 pt-4 flex items-center">
             <div className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded mr-2 uppercase tracking-wide shadow-sm">
                 ALERT
             </div>
             <p className="text-[11px] text-slate-500 truncate flex-1 font-medium">
                 {TEXTS.securityAlert[lang]}
             </p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;