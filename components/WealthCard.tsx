import React from 'react';
import { Language } from '../types';
import { TEXTS, WEALTH_PRODUCT } from '../constants';
import { Icons } from './Icons';

interface WealthCardProps {
  lang: Language;
}

const WealthCard: React.FC<WealthCardProps> = ({ lang }) => {
  return (
    <div className="mx-4 mt-6 mb-24">
      <div className="flex justify-between items-center mb-4 px-2">
        <h3 className="text-lg font-bold text-slate-800 flex items-center">
            <Icons.Crown size={20} className="text-amber-500 mr-2 fill-amber-500" />
            {TEXTS.wealthSelection[lang]}
        </h3>
        <button className="text-xs text-slate-400 flex items-center hover:text-amber-600 active:opacity-60 transition-colors font-medium">
            {TEXTS.more[lang]} <Icons.ChevronRight size={14} className="ml-0.5" />
        </button>
      </div>

      <div className="group active:scale-[0.98] transition-all duration-300 ease-out">
        <div className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-[2rem] shadow-2xl shadow-slate-300/50 p-6 text-white relative overflow-hidden ring-1 ring-white/10">
            {/* Decorative circle */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Header */}
            <div className="flex items-start justify-between mb-8 relative z-10">
            <div>
                <div className="flex items-center space-x-2 mb-1.5">
                    <span className="text-base font-semibold text-white tracking-wide">
                        {TEXTS[WEALTH_PRODUCT.titleKey][lang]}
                    </span>
                    <span className="text-[9px] font-bold bg-amber-500 text-slate-900 px-1.5 py-0.5 rounded text-center shadow-sm">
                        HOT
                    </span>
                </div>
                <p className="text-xs text-slate-400 font-medium">{TEXTS[WEALTH_PRODUCT.minAmountKey][lang]}</p>
            </div>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-md border border-white/5">
                <Icons.Shield size={20} className="text-emerald-400" />
            </div>
            </div>

            {/* Content */}
            <div className="flex items-end justify-between relative z-10">
                <div>
                    <div className="text-[2.5rem] font-light text-amber-400 mb-0 tracking-tighter leading-none">
                        {WEALTH_PRODUCT.rate}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">
                        {TEXTS.annualRate[lang]}
                    </div>
                </div>

                <div className="mb-1">
                    <button className="bg-white text-slate-900 text-sm font-bold px-6 py-2.5 rounded-full shadow-lg shadow-white/10 active:bg-slate-100 transition-colors">
                        {TEXTS.view[lang]}
                    </button>
                </div>
            </div>
            
            {/* Footer Tags */}
            <div className="flex space-x-2 mt-6 pt-5 border-t border-white/10">
                {WEALTH_PRODUCT.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] bg-slate-700/40 text-slate-300 border border-slate-600/30 px-2.5 py-1 rounded-md backdrop-blur-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default WealthCard;