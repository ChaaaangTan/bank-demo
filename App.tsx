import React, { useState } from 'react';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import WealthCard from './components/WealthCard';
import BottomNav from './components/BottomNav';
import ChatOverlay from './components/ChatOverlay';
import { Icons } from './components/Icons';
import { Language } from './types';
import { TEXTS } from './constants';

// --- Sub-Components for Pages (Styled for iOS) ---

const WealthView = ({ lang }: { lang: Language }) => (
    <div className="pb-32 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
        {/* iOS Large Title Header */}
        <div className="bg-white pt-safe px-6 pb-2 sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-100">
             <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-2 tracking-tight">{TEXTS.navWealth[lang]}</h2>
        </div>
        
        <div className="p-4 space-y-6">
             {/* Portfolio Summary */}
             <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl shadow-slate-900/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="relative z-10">
                    <div className="text-sm text-slate-400 mb-1 font-medium">{TEXTS.myPortfolio[lang]}</div>
                    <div className="flex items-baseline space-x-2">
                         <div className="text-3xl font-bold text-white tracking-tight">+12.4%</div>
                         <span className="text-emerald-400 text-xs font-bold py-0.5 px-2 bg-emerald-500/20 rounded-lg">YTD</span>
                    </div>
                    
                    <div className="mt-6 flex space-x-6">
                         <div>
                             <div className="text-xs text-slate-400 mb-1">Assets</div>
                             <div className="font-semibold">HKD 1.2M</div>
                         </div>
                         <div>
                             <div className="text-xs text-slate-400 mb-1">Profit</div>
                             <div className="font-semibold text-emerald-400">+145.2K</div>
                         </div>
                    </div>
                </div>
             </div>

             {/* Watchlist Group */}
             <div>
                <div className="flex justify-between items-center mb-3 px-2">
                     <h3 className="font-bold text-slate-800 text-lg">{TEXTS.watchlist[lang]}</h3>
                     <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center active:bg-gray-200">
                        <Icons.MoreHorizontal size={18} className="text-slate-600" />
                     </button>
                </div>
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                     {[
                         { code: '0700.HK', name: 'Tencent', price: '382.40', change: '+1.2%', up: true, logo: 'bg-blue-500' },
                         { code: '9988.HK', name: 'Alibaba', price: '72.15', change: '-0.8%', up: false, logo: 'bg-orange-500' },
                         { code: 'AAPL.US', name: 'Apple', price: '185.90', change: '+0.5%', up: true, logo: 'bg-gray-800' },
                     ].map((stock, i) => (
                         <div key={i} className="flex justify-between items-center p-4 border-b border-gray-50 last:border-0 active:bg-slate-50 transition-colors">
                             <div className="flex items-center space-x-3">
                                 <div className={`w-10 h-10 ${stock.logo} rounded-full text-white flex items-center justify-center font-bold text-xs`}>
                                     {stock.name[0]}
                                 </div>
                                 <div>
                                     <div className="font-bold text-slate-900">{stock.name}</div>
                                     <div className="text-[11px] text-gray-500 font-medium">{stock.code}</div>
                                 </div>
                             </div>
                             <div className="text-right">
                                 <div className="font-bold text-slate-900">{stock.price}</div>
                                 <div className={`text-xs font-bold px-1.5 py-0.5 rounded ${stock.up ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                     {stock.change}
                                 </div>
                             </div>
                         </div>
                     ))}
                </div>
             </div>
             
             {/* Fund Highlight */}
             <div>
                <h3 className="font-bold text-slate-800 text-lg mb-3 px-2">{TEXTS.funds[lang]}</h3>
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-5 active:scale-[0.98] transition-transform">
                    <div className="flex items-center space-x-4 mb-4">
                         <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                             <Icons.PieChart size={24} />
                         </div>
                         <div className="flex-1">
                             <div className="text-base font-bold text-slate-900">Global Tech Fund</div>
                             <div className="text-xs text-gray-500 mt-0.5">High Risk • Equity</div>
                         </div>
                         <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md">USD</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-2xl font-bold text-blue-600">+24.5%</div>
                            <div className="text-xs text-slate-400">Annual Return</div>
                        </div>
                        <button className="bg-slate-900 text-white text-sm font-bold px-6 py-2 rounded-full">Buy</button>
                    </div>
                </div>
             </div>
        </div>
    </div>
);

const CommunityView = ({ lang }: { lang: Language }) => (
    <div className="pb-32 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
        <div className="bg-white/90 backdrop-blur-xl pt-safe px-6 sticky top-0 z-30 border-b border-gray-100 pb-0">
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">{TEXTS.navCommunity[lang]}</h2>
            <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-0">
                <span className="text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-3 whitespace-nowrap px-1">
                    {TEXTS.marketNews[lang]}
                </span>
                <span className="text-sm font-medium text-gray-400 pb-3 whitespace-nowrap px-1">
                    {TEXTS.expertAnalysis[lang]}
                </span>
                <span className="text-sm font-medium text-gray-400 pb-3 whitespace-nowrap px-1">ETF</span>
                <span className="text-sm font-medium text-gray-400 pb-3 whitespace-nowrap px-1">Web3</span>
            </div>
        </div>
        
        <div className="p-4 space-y-4 pt-6">
             {/* Featured Article */}
             <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 group active:scale-[0.98] transition-transform">
                 <div className="h-48 bg-gray-200 relative overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1611974765215-e2862a346d02?q=80&w=800&auto=format&fit=crop" alt="news" className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                     <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-2">MUST READ</div>
                        <h3 className="font-bold text-white text-xl leading-snug drop-shadow-sm">Fed Holds Rates Steady: What It Means for HK Mortgages</h3>
                     </div>
                 </div>
                 <div className="p-5">
                     <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">The Federal Reserve's decision to maintain interest rates has significant implications for the Hong Kong housing market and HIBOR trends.</p>
                     <div className="flex items-center justify-between mt-4 text-xs text-gray-400 font-medium">
                         <div className="flex items-center space-x-2">
                             <div className="w-5 h-5 bg-amber-500 rounded-full"></div>
                             <span>Harbour Research</span>
                         </div>
                         <span>2h ago</span>
                     </div>
                 </div>
             </div>

             {/* News List */}
             {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex space-x-4 active:bg-slate-50 transition-colors">
                     <div className="flex-1 py-1">
                         <h4 className="font-bold text-slate-800 text-[15px] mb-2 leading-snug line-clamp-2">HKEX to implement new severe weather trading rules starting next month.</h4>
                         <span className="text-xs text-gray-400 font-medium">Market News • 10:3{i} AM</span>
                     </div>
                     <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
                         <img src={`https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=200&h=200&fit=crop&q=80`} alt="thumb" className="w-full h-full object-cover" />
                     </div>
                 </div>
             ))}
        </div>
    </div>
);

const MeView = ({ lang, toggleLang }: { lang: Language, toggleLang: () => void }) => (
    <div className="pb-32 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
        <div className="bg-slate-900 pt-safe pb-16 px-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
             
             <div className="flex items-center space-x-5 relative z-10 mt-6">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-4 border-slate-800/50 flex items-center justify-center text-slate-900 font-bold text-2xl shadow-lg">
                     AC
                 </div>
                 <div>
                     <h2 className="text-2xl font-bold text-white tracking-tight">Alex Chen</h2>
                     <div className="text-sm text-slate-400 mt-1 font-medium">Private Banking Client</div>
                 </div>
             </div>
             
             <div className="flex justify-between mt-10 text-center relative z-10 bg-white/5 p-4 rounded-2xl backdrop-blur-md border border-white/5">
                 <div className="flex-1 border-r border-white/10">
                     <div className="text-xl font-bold text-white">4</div>
                     <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Cards</div>
                 </div>
                 <div className="flex-1 border-r border-white/10">
                     <div className="text-xl font-bold text-white">12.5k</div>
                     <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Points</div>
                 </div>
                 <div className="flex-1">
                     <div className="text-xl font-bold text-amber-400">Diamond</div>
                     <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Tier</div>
                 </div>
             </div>
        </div>

        <div className="px-4 -mt-8 relative z-20 space-y-6">
            {/* iOS Grouped List Style */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                {[
                    { icon: Icons.User, label: 'Personal Info', color: 'text-blue-500 bg-blue-50' },
                    { icon: Icons.Shield, label: 'Security Center', color: 'text-emerald-500 bg-emerald-50' },
                    { icon: Icons.File, label: 'e-Statements', color: 'text-purple-500 bg-purple-50' },
                ].map((item, i) => (
                    <button key={i} className="w-full flex items-center p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                        <div className={`p-2 rounded-full mr-4 ${item.color}`}>
                            <item.icon size={20} />
                        </div>
                        <span className="flex-1 text-base font-medium text-slate-800 text-left">{item.label}</span>
                        <Icons.ChevronRight size={18} className="text-gray-300" />
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                 <button className="w-full flex items-center p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                    <div className="p-2 rounded-full mr-4 text-amber-500 bg-amber-50">
                        <Icons.Headset size={20} />
                    </div>
                    <span className="flex-1 text-base font-medium text-slate-800 text-left">Contact RM</span>
                    <Icons.ChevronRight size={18} className="text-gray-300" />
                </button>
            </div>

            <button 
                onClick={toggleLang}
                className="w-full py-4 border border-slate-200 rounded-3xl text-sm text-slate-600 bg-white active:bg-gray-100 font-bold shadow-sm"
            >
                Switch Language / 切換語言
            </button>
            
            <div className="text-center text-xs text-gray-300 pt-4 pb-8">
                Version 2.4.0 (Build 184)
            </div>
        </div>
    </div>
);


const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh-HK'); // Default to HK
  const [activeTab, setActiveTab] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleLang = () => {
    if (lang === 'zh-CN') setLang('zh-HK');
    else if (lang === 'zh-HK') setLang('en');
    else setLang('zh-CN');
  };

  const renderHome = () => (
    <div className="animate-in fade-in duration-500 pb-32">
      <div className="bg-slate-900 pb-20 rounded-b-[3rem] relative overflow-hidden shadow-2xl shadow-slate-900/20">
        {/* Background Patterns - Smoother gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-blue-600 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-amber-600 rounded-full blur-[120px]"></div>
        </div>
        
        <Header 
          lang={lang} 
          onToggleLang={toggleLang} 
          onOpenChat={() => setIsChatOpen(true)}
        />
        <QuickActions lang={lang} />
      </div>

      <div className="-mt-12 relative z-10">
        <WealthCard lang={lang} />
      </div>
      
      {/* Featured Banner */}
      <div className="mx-4 mb-8">
         <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center px-2">
            {lang === 'en' ? 'For You' : '專屬推薦'}
         </h3>
         <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-4 px-2 -mx-2">
             <div className="min-w-[85%] bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 active:scale-[0.98] transition-transform">
                 <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-500">
                        <Icons.Crown size={20} />
                    </div>
                    <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-full font-bold text-slate-500">PROMO</span>
                 </div>
                 <h4 className="font-bold text-slate-900 text-lg">Premium Banking</h4>
                 <p className="text-sm text-gray-500 mt-1">Upgrade to enjoy 0% FX fees and dedicated RM support.</p>
             </div>
             <div className="min-w-[85%] bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 active:scale-[0.98] transition-transform">
                 <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                        <Icons.Globe size={20} />
                    </div>
                 </div>
                 <h4 className="font-bold text-slate-900 text-lg">Travel Insurance</h4>
                 <p className="text-sm text-gray-500 mt-1">Instant coverage for your Japan trip. Up to 20% off today.</p>
             </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-200 text-slate-900">
      {/* Container - removed max-w-md for mobile PWA feel, kept for desktop preview context */}
      <div className="mx-auto bg-slate-50 min-h-screen relative shadow-2xl overflow-hidden ring-1 ring-black/5 md:max-w-md">
        
        {activeTab === 'home' && renderHome()}
        {activeTab === 'wealth' && <WealthView lang={lang} />}
        {activeTab === 'community' && <CommunityView lang={lang} />}
        {activeTab === 'me' && <MeView lang={lang} toggleLang={toggleLang} />}

        <BottomNav 
          lang={lang} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        <ChatOverlay 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
          lang={lang} 
        />
      </div>
    </div>
  );
};

export default App;