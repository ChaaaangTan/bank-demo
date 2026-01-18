// Removed GoogleGenAI import to run locally without API keys

export const generateResponse = async (prompt: string, language: string): Promise<string> => {
  // Simulate network delay for a realistic "thinking" effect
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lowerPrompt = prompt.toLowerCase();
  const isEn = language === 'en';
  const isHk = language === 'zh-HK';

  // --- Local Mock Logic for Demo ---

  // 1. Greetings
  if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('你好') || lowerPrompt.includes('早晨')) {
    if (isEn) return "Hello! Welcome to Harbour Bank. How can I assist with your wealth management today?";
    return isHk ? "您好！歡迎來到港灣銀行。今日有咩可以幫到您管理財富？" : "您好！欢迎来到港湾银行。今天有什么可以帮您管理财富？";
  }

  // 2. Interest Rates / Deposit
  if (lowerPrompt.includes('rate') || lowerPrompt.includes('interest') || lowerPrompt.includes('deposit') || lowerPrompt.includes('利息') || lowerPrompt.includes('利率') || lowerPrompt.includes('定存')) {
    if (isEn) return "Our current 3-month USD time deposit promotion offers up to 5.2% p.a. for new funds. Would you like to set one up now?";
    return isHk ? "現時美元3個月定期存款推廣年利率高達 5.2%（新資金）。您想立即開立嗎？" : "现时美元3个月定期存款推广年利率高达 5.2%（新资金）。您想立即开立吗？";
  }

  // 3. Stock / Market
  if (lowerPrompt.includes('stock') || lowerPrompt.includes('market') || lowerPrompt.includes('share') || lowerPrompt.includes('price') || lowerPrompt.includes('股票') || lowerPrompt.includes('股市') || lowerPrompt.includes('價')) {
    if (isEn) return "The HK market is currently trading sideways. Tencent (0700.HK) is at 382.40 (+1.2%). Your watchlist stocks are mostly green today.";
    return isHk ? "港股市場現時窄幅上落。騰訊 (0700.HK) 現報 382.40 (+1.2%)。您自選列表內的股票今日普遍造好。" : "港股市场现时窄幅上落。腾讯 (0700.HK) 现报 382.40 (+1.2%)。您自选列表内的股票今日普遍造好。";
  }

  // 4. FX / Exchange
  if (lowerPrompt.includes('fx') || lowerPrompt.includes('exchange') || lowerPrompt.includes('usd') || lowerPrompt.includes('jp') || lowerPrompt.includes('外匯') || lowerPrompt.includes('匯率') || lowerPrompt.includes('換')) {
    if (isEn) return "Real-time rates: USD/HKD 7.8210, JPY/HKD 0.0523. As a Diamond member, you enjoy 0% spread on your first 3 transactions this month.";
    return isHk ? "即時匯率：美元/港元 7.8210，日圓/港元 0.0523。作為鑽石級會員，本月首 3 筆交易可享 0% 差價優惠。" : "即时汇率：美元/港元 7.8210，日圆/港元 0.0523。作为钻石级会员，本月首 3 笔交易可享 0% 差价优惠。";
  }
  
  // 5. Transfer / FPS
  if (lowerPrompt.includes('transfer') || lowerPrompt.includes('fps') || lowerPrompt.includes('pay') || lowerPrompt.includes('轉賬') || lowerPrompt.includes('轉數快') || lowerPrompt.includes('过数')) {
    if (isEn) return "You can use FPS for instant transfers. Daily limit remaining: HKD 50,000. Tap the 'Transfer' button on the homepage to start.";
    return isHk ? "您可以使用轉數快 (FPS) 進行即時轉賬。今日剩餘限額：HKD 50,000。請點擊首頁的「轉賬」按鈕開始。" : "您可以使用转数快 (FPS) 进行即时转账。今日剩余限额：HKD 50,000。请点击首页的「转账」按钮开始。";
  }

  // Default Fallback
  if (isEn) return "I'm a demo assistant running locally. I can simulate answers about 'Rates', 'Stocks', 'FX', or 'Transfers'. Try asking one of those!";
  return isHk ? "我是本地運行的演示助理。我可以模擬回答關於「利率」、「股票」、「匯率」或「轉賬」的問題。試試問下啦！" : "我是本地运行的演示助理。我可以模拟回答关于“利率”、“股票”、“汇率”或“转账”的问题。试着问问看！";
};