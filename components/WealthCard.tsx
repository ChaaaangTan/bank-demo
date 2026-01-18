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
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-slate-800 flex items-center">
            <Icons.Crown size={18} className="text-amber-500 mr-2" />
            {TEXTS.wealthSelection[lang]}
        </h3>
        <span className="text-xs text-slate-500 flex items-center cursor-pointer hover:text-amber-600">
            {TEXTS.more[lang]} <Icons.ChevronRight size={14} />
        </span>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg p-5 text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>

        {/* Header */}
        <div className="flex items-start justify-between mb-6 relative z-10">
          <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-base font-medium text-white">
                    {TEXTS[WEALTH_PRODUCT.titleKey][lang]}
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded">
                    HOT
                </span>
              </div>
              <p className="text-xs text-slate-400">{TEXTS[WEALTH_PRODUCT.minAmountKey][lang]}</p>
          </div>
          <Icons.Shield size={20} className="text-emerald-400/80" />
        </div>

        {/* Content */}
        <div className="flex items-end justify-between relative z-10">
            <div>
                <div className="text-4xl font-light text-amber-400 mb-1 tracking-tighter">
                    {WEALTH_PRODUCT.rate}
                </div>
                <div className="text-xs text-slate-400">
                    {TEXTS.annualRate[lang]}
                </div>
            </div>

            <div className="mb-1">
                <button className="bg-white text-slate-900 text-sm font-semibold px-5 py-2 rounded-lg hover:bg-amber-50 transition-colors">
                    {TEXTS.view[lang]}
                </button>
            </div>
        </div>
        
        {/* Footer Tags */}
        <div className="flex space-x-2 mt-4 pt-4 border-t border-white/10">
            {WEALTH_PRODUCT.tags.map((tag, i) => (
                <span key={i} className="text-[10px] bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WealthCard;