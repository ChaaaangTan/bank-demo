import { Translation, MenuItem, WealthProduct } from './types';

export const TEXTS: Translation = {
  appName: { 'zh-CN': '港湾银行', 'zh-HK': '港灣銀行', 'en': 'Harbour Bank' },
  searchPlaceholder: { 'zh-CN': '搜索股票、基金、外汇', 'zh-HK': '搜尋股票、基金、外匯', 'en': 'Search Stocks, Funds, FX' },
  
  // Home Header
  totalAssets: { 'zh-CN': '总资产 (HKD)', 'zh-HK': '總資產 (HKD)', 'en': 'Total Assets (HKD)' },
  analysis: { 'zh-CN': '资产分析', 'zh-HK': '資產分析', 'en': 'Analysis' },

  // Top Quick Actions (HK Specific)
  transfer: { 'zh-CN': '转账/转数快', 'zh-HK': '轉賬/轉數快', 'en': 'Transfer/FPS' },
  fx: { 'zh-CN': '外汇兑换', 'zh-HK': '外匯兌換', 'en': 'FX Exchange' },
  scan: { 'zh-CN': '扫码支付', 'zh-HK': '掃碼支付', 'en': 'Scan Pay' },
  cards: { 'zh-CN': '我的卡片', 'zh-HK': '我的卡片', 'en': 'My Cards' },

  // Grid Actions
  remittance: { 'zh-CN': '跨境汇款', 'zh-HK': '跨境匯款', 'en': 'Remittance' },
  timeDeposit: { 'zh-CN': '定期存款', 'zh-HK': '定期存款', 'en': 'Time Deposit' },
  stocks: { 'zh-CN': '港美股', 'zh-HK': '港美股', 'en': 'HK/US Stocks' },
  funds: { 'zh-CN': '投资基金', 'zh-HK': '投資基金', 'en': 'Funds' },
  insurance: { 'zh-CN': '保险服务', 'zh-HK': '保險服務', 'en': 'Insurance' },
  loan: { 'zh-CN': '私人贷款', 'zh-HK': '私人貸款', 'en': 'Personal Loan' },
  ipo: { 'zh-CN': '新股认购', 'zh-HK': '新股認購', 'en': 'IPO' },
  statement: { 'zh-CN': '电子结单', 'zh-HK': '電子結單', 'en': 'e-Statement' },
  crypto: { 'zh-CN': '虚拟资产', 'zh-HK': '虛擬資產', 'en': 'Crypto' },
  more: { 'zh-CN': '更多', 'zh-HK': '更多', 'en': 'More' },

  // Banner & Notification
  securityAlert: { 
    'zh-CN': '【安全提示】本行不会通过短信索取您的密码。', 
    'zh-HK': '【安全提示】本行不會透過短信索取您的密碼。', 
    'en': '[Security] We will never ask for your password via SMS.' 
  },
  
  // Wealth Section
  wealthSelection: { 'zh-CN': '精选理财', 'zh-HK': '精選理財', 'en': 'Wealth Picks' },
  view: { 'zh-CN': '查看详情', 'zh-HK': '查看詳情', 'en': 'View Details' },
  productTitle: { 'zh-CN': '美元定期存款 (3个月)', 'zh-HK': '美元定期存款 (3個月)', 'en': 'USD Time Deposit (3M)' },
  productSubtitle: { 'zh-CN': '新资金优惠利率', 'zh-HK': '新資金優惠利率', 'en': 'New Fund Preferential Rate' },
  periodDesc: { 'zh-CN': '起存金额 USD 1,000', 'zh-HK': '起存金額 USD 1,000', 'en': 'Min. USD 1,000' },
  arrivalDesc: { 'zh-CN': '保本保息', 'zh-HK': '保本保息', 'en': 'Principal Protected' },
  annualRate: { 'zh-CN': '年利率高达', 'zh-HK': '年利率高達', 'en': 'Up to p.a.' },

  // Bottom Nav
  navHome: { 'zh-CN': '首页', 'zh-HK': '首頁', 'en': 'Home' },
  navCommunity: { 'zh-CN': '市场资讯', 'zh-HK': '市場資訊', 'en': 'Insights' },
  navWealth: { 'zh-CN': '财富', 'zh-HK': '財富', 'en': 'Wealth' },
  navMe: { 'zh-CN': '我的', 'zh-HK': '我的', 'en': 'Me' },

  // Chat
  chatTitle: { 'zh-CN': '智能助理', 'zh-HK': '智能助理', 'en': 'Smart Assistant' },
  chatWelcome: { 'zh-CN': '您好，我是港湾银行智能助理。', 'zh-HK': '您好，我是港灣銀行智能助理。', 'en': 'Hello, I am Harbour Bank Smart Assistant.' },
  inputPlaceholder: { 'zh-CN': '查询汇率、股价...', 'zh-HK': '查詢匯率、股價...', 'en': 'Ask about FX, stocks...' },

  // Community & Wealth Expanded
  marketNews: { 'zh-CN': '市场要闻', 'zh-HK': '市場要聞', 'en': 'Market News' },
  expertAnalysis: { 'zh-CN': '专家分析', 'zh-HK': '專家分析', 'en': 'Expert Analysis' },
  myPortfolio: { 'zh-CN': '我的组合', 'zh-HK': '我的組合', 'en': 'My Portfolio' },
  watchlist: { 'zh-CN': '自选列表', 'zh-HK': '自選列表', 'en': 'Watchlist' },
};

export const MENU_GRID: MenuItem[] = [
  { id: '1', iconName: 'ArrowRightLeft', labelKey: 'remittance' },
  { id: '2', iconName: 'Clock', labelKey: 'timeDeposit', highlight: true },
  { id: '3', iconName: 'TrendingUp', labelKey: 'stocks', highlight: true },
  { id: '4', iconName: 'PieChart', labelKey: 'funds' },
  { id: '5', iconName: 'Shield', labelKey: 'insurance' },
  { id: '6', iconName: 'Banknote', labelKey: 'loan' },
  { id: '7', iconName: 'Zap', labelKey: 'ipo' },
  { id: '8', iconName: 'FileText', labelKey: 'statement' },
  { id: '9', iconName: 'Bitcoin', labelKey: 'crypto' },
  { id: '10', iconName: 'MoreHorizontal', labelKey: 'more' },
];

export const WEALTH_PRODUCT: WealthProduct = {
  id: 'w1',
  titleKey: 'productTitle',
  rate: '5.2%',
  periodKey: 'periodDesc',
  minAmountKey: 'arrivalDesc',
  tags: ['USD', 'Time Deposit', 'Low Risk']
};