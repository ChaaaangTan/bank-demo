import React, { useState } from 'react';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import WealthCard from './components/WealthCard';
import BottomNav from './components/BottomNav';
import ChatOverlay from './components/ChatOverlay';
import { Icons } from './components/Icons';
import { Language } from './types';
import { TEXTS } from './constants';

// --- Sub-Components for Pages ---

const WealthView = ({ lang }: { lang: Language }) => (
    <div className="pb-24 animate-in fade-in duration-500">
        <div className="bg-slate-900 pt-16 pb-6 px-6 rounded-b-[2rem] shadow-xl">
             <h2 className="text-2xl font-bold text-white mb-6">{TEXTS.navWealth[lang]}</h2>
             
             {/* Portfolio Summary */}
             <div className="flex space-x-4 mb-4">
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-slate-300 mb-1">{TEXTS.myPortfolio[lang]}</div>
                    <div className="text-xl font-bold text-white">+12.4%</div>
                    <div className="h-1 w-full bg-slate-700 mt-2 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 w-3/4"></div>
                    </div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/5">
                     <div className="text-xs text-slate-300 mb-1">USD/HKD</div>
                     <div className="text-xl font-bold text-white">7.8245</div>
                     <div className="text-[10px] text-red-400 mt-1">-0.002%</div>
                </div>
             </div>
        </div>

        {/* Watchlist */}
        <div className="px-4 -mt-4 relative z-10">
            <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
                 <div className="flex justify-between items-center mb-4">
                     <h3 className="font-bold text-slate-800">{TEXTS.watchlist[lang]}</h3>
                     <Icons.MoreHorizontal size={16} className="text-gray-400" />
                 </div>
                 {[
                     { code: '0700.HK', name: 'Tencent', price: '382.40', change: '+1.2%', up: true },
                     { code: '9988.HK', name: 'Alibaba', price: '72.15', change: '-0.8%', up: false },
                     { code: 'AAPL.US', name: 'Apple', price: '185.90', change: '+0.5%', up: true },
                 ].map((stock, i) => (
                     <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                         <div>
                             <div className="font-bold text-slate-800">{stock.name}</div>
                             <div className="text-[10px] text-gray-500 bg-gray-100 inline-block px-1 rounded">{stock.code}</div>
                         </div>
                         <div className="text-right">
                             <div className="font-medium text-slate-800">{stock.price}</div>
                             <div className={`text-xs ${stock.up ? 'text-emerald-500' : 'text-red-500'}`}>{stock.change}</div>
                         </div>
                     </div>
                 ))}
            </div>
            
            {/* Fund Grid */}
             <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-slate-800 mb-4">{TEXTS.funds[lang]}</h3>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                         <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xs">TECH</div>
                         <div className="flex-1">
                             <div className="text-sm font-medium">Global Tech Fund</div>
                             <div className="text-xs text-gray-500">High Risk • Equity</div>
                         </div>
                         <button className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-full">Buy</button>
                    </div>
                </div>
             </div>
        </div>
    </div>
);

const CommunityView = ({ lang }: { lang: Language }) => (
    <div className="pb-24 animate-in fade-in duration-500">
        <div className="bg-white pt-16 px-6 sticky top-0 z-10 border-b border-gray-100 pb-2">
            <h2 className="text-2xl font-bold text-slate-900">{TEXTS.navCommunity[lang]}</h2>
            <div className="flex space-x-4 mt-4 overflow-x-auto no-scrollbar">
                <span className="text-sm font-bold text-amber-600 border-b-2 border-amber-600 pb-2 whitespace-nowrap">{TEXTS.marketNews[lang]}</span>
                <span className="text-sm text-gray-500 pb-2 whitespace-nowrap">{TEXTS.expertAnalysis[lang]}</span>
                <span className="text-sm text-gray-500 pb-2 whitespace-nowrap">ETF</span>
                <span className="text-sm text-gray-500 pb-2 whitespace-nowrap">Web3</span>
            </div>
        </div>
        
        <div className="p-4 space-y-4">
             {/* Featured Article */}
             <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                 <div className="h-40 bg-gray-200 relative">
                     <img src="https://picsum.photos/600/300?grayscale" alt="news" className="w-full h-full object-cover" />
                     <div className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded">MUST READ</div>
                 </div>
                 <div className="p-4">
                     <h3 className="font-bold text-slate-800 text-lg mb-2">Fed Holds Rates Steady: What It Means for HK Mortgages</h3>
                     <p className="text-gray-500 text-xs line-clamp-2">The Federal Reserve's decision to maintain interest rates has significant implications for the Hong Kong housing market and HIBOR trends.</p>
                     <div className="flex items-center justify-between mt-3 text-[10px] text-gray-400">
                         <span>Harbour Research</span>
                         <span>2 hrs ago</span>
                     </div>
                 </div>
             </div>

             {/* News List */}
             {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex space-x-4">
                     <div className="flex-1">
                         <h4 className="font-medium text-slate-800 text-sm mb-2 line-clamp-2">HKEX to implement new severe weather trading rules starting next month.</h4>
                         <span className="text-[10px] text-gray-400">Market News • 10:3{i} AM</span>
                     </div>
                     <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                         <img src={`https://picsum.photos/100/100?random=${i}`} alt="thumb" className="w-full h-full object-cover mix-blend-multiply" />
                     </div>
                 </div>
             ))}
        </div>
    </div>
);

const MeView = ({ lang, toggleLang }: { lang: Language, toggleLang: () => void }) => (
    <div className="pb-24 animate-in fade-in duration-500">
        <div className="bg-slate-900 text-white pt-20 pb-12 px-6 rounded-b-[2rem]">
             <div className="flex items-center space-x-4">
                 <div className="w-16 h-16 rounded-full bg-amber-400 border-4 border-slate-800 flex items-center justify-center text-slate-900 font-bold text-xl">
                     A
                 </div>
                 <div>
                     <h2 className="text-xl font-bold">Alex Chen</h2>
                     <div className="text-xs text-slate-400 mt-1">Private Banking Client</div>
                 </div>
             </div>
             
             <div className="flex justify-between mt-8 text-center">
                 <div>
                     <div className="text-xl font-bold text-white">4</div>
                     <div className="text-[10px] text-slate-400 uppercase tracking-wider">Cards</div>
                 </div>
                 <div>
                     <div className="text-xl font-bold text-white">12,500</div>
                     <div className="text-[10px] text-slate-400 uppercase tracking-wider">Points</div>
                 </div>
                 <div>
                     <div className="text-xl font-bold text-white">Diamond</div>
                     <div className="text-[10px] text-slate-400 uppercase tracking-wider">Tier</div>
                 </div>
             </div>
        </div>

        <div className="p-4 -mt-6">
            <div className="bg-white rounded-xl shadow-sm p-2">
                {[
                    { icon: Icons.User, label: 'Personal Info' },
                    { icon: Icons.Shield, label: 'Security Center' },
                    { icon: Icons.File, label: 'e-Statements' },
                    { icon: Icons.Headset, label: 'Contact RM' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer">
                        <div className="p-2 bg-slate-50 rounded-lg mr-4 text-slate-700">
                            <item.icon size={20} />
                        </div>
                        <span className="flex-1 text-sm font-medium text-slate-700">{item.label}</span>
                        <Icons.ChevronRight size={16} className="text-gray-300" />
                    </div>
                ))}
            </div>

            <button 
                onClick={toggleLang}
                className="w-full mt-6 py-3 border border-slate-200 rounded-xl text-sm text-slate-600 bg-white hover:bg-gray-50 font-medium"
            >
                Change Language / 切換語言
            </button>
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
    <div className="animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 pb-16 rounded-b-[2.5rem] relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-500 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500 rounded-full blur-[100px]"></div>
        </div>
        
        <Header 
          lang={lang} 
          onToggleLang={toggleLang} 
          onOpenChat={() => setIsChatOpen(true)}
        />
        <QuickActions lang={lang} />
      </div>

      <WealthCard lang={lang} />
      
      {/* Featured Banner */}
      <div className="mx-4 mb-24">
         <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
            {lang === 'en' ? 'For You' : '專屬推薦'}
         </h3>
         <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-2">
             <div className="min-w-[80%] bg-white p-4 rounded-xl shadow-sm border-l-4 border-amber-400">
                 <h4 className="font-bold text-slate-800">Premium Banking</h4>
                 <p className="text-xs text-gray-500 mt-1">Upgrade to enjoy 0% FX fees.</p>
             </div>
             <div className="min-w-[80%] bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-400">
                 <h4 className="font-bold text-slate-800">Travel Insurance</h4>
                 <p className="text-xs text-gray-500 mt-1">Instant coverage for your Japan trip.</p>
             </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-200">
      <div className="pb-safe max-w-md mx-auto bg-slate-50 min-h-screen relative shadow-2xl overflow-hidden ring-1 ring-black/5">
        
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