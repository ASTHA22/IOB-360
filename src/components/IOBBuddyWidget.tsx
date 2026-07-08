import { useState, useRef, useEffect } from 'react';
import { X, Send, Menu, Sparkles } from 'lucide-react';
import mascotImg from '../assets/iob-buddy-mascot.png';
import { mockCustomer } from '../services/mockData';

interface Message {
  sender: 'buddy' | 'user';
  text: string;
}

const LANGUAGES = [
  { label: 'हिन्दी', val: 'hi' },
  { label: 'English', val: 'en' },
  { label: 'বাংলা', val: 'bn' },
  { label: 'ગુજરાતી', val: 'gu' },
  { label: 'ಕನ್ನಡ', val: 'kn' },
  { label: 'മലയാളം', val: 'ml' },
  { label: 'मराठी', val: 'mr' },
  { label: 'ଓଡ଼ିଆ', val: 'or' },
  { label: 'ਪੰਜਾਬੀ', val: 'pa' },
  { label: 'தமிழ்', val: 'ta' },
  { label: 'తెలుగు', val: 'te' },
  { label: 'اردو', val: 'ur' },
  { label: 'कोंकणी', val: 'kok' }
];

export default function IOBBuddyWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleLanguageSelect = (lang: string) => {
    setSelectedLang(lang);
    setMessages([
      {
        sender: 'buddy',
        text: `You have selected English. How can I assist you with ${mockCustomer.name}'s customer profile or pre-approved offers today?`
      }
    ]);
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputVal('');

    // Simulate IOB Buddy Response
    setTimeout(() => {
      let buddyText = '';
      const textLower = userText.toLowerCase();

      if (textLower.includes('loan') || textLower.includes('personal')) {
        buddyText = `Customer Astha Singh has a pre-approved Unsecured Personal Loan offer of ₹6,00,000 with an interest rate of 11.25% p.a. and an EMI of ₹19,720. Eligible for instant disbursement at Cathedral Branch, Chennai.`;
      } else if (textLower.includes('card') || textLower.includes('credit')) {
        buddyText = `Astha Singh has an active RuPay Select Credit Card (limit ₹1.5L) and is pre-approved for a Premium Card Limit upgrade to ₹2,50,000 with Nil Annual Fees.`;
      } else if (textLower.includes('locker') || textLower.includes('discount')) {
        buddyText = `Astha is eligible for a special 25% Locker Rental Discount on a Medium Locker at Cathedral Branch under the Royal Privilege program.`;
      } else if (textLower.includes('branch') || textLower.includes('chennai')) {
        buddyText = `The customer is mapped to the Cathedral Branch, Chennai. Managed by Rajesh Kumar (+91 94440 12345).`;
      } else if (textLower.includes('balance') || textLower.includes('savings')) {
        buddyText = `Astha's Royal Privilege Savings Account holds ₹3,80,000. She also has a High-Yield Term Deposit (FD) of ₹12,50,000 yielding 9.0% p.a. which matures in 15 days.`;
      } else {
        buddyText = `I can help you check pre-approved limits, account holdings, locker privileges, or branch details for customer Astha Singh. What would you like to review?`;
      }

      setMessages(prev => [...prev, { sender: 'buddy', text: buddyText }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Mascot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full border-2 border-fuchsia-600/80 shadow-2xl hover:scale-108 transition-all duration-300 cursor-pointer overflow-hidden bg-white group flex items-center justify-center"
        >
          <img
            src={mascotImg}
            alt="IOB Buddy"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute -top-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          </div>
        </button>
      )}

      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="w-[360px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fadeIn">
          {/* Custom Purple-Pink-Blue Gradient Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-pink-500 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white border border-white/20">
                <img src={mascotImg} alt="IOB Buddy" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-extrabold text-sm tracking-wide">IOB Buddy</p>
                <p className="text-[10px] text-white/80 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Digital Assistant
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  setSelectedLang(null);
                  setMessages([]);
                }}
                title="Reset language/chat"
                className="text-white/85 hover:text-white transition-colors cursor-pointer text-xs font-bold mr-1 p-1 hover:bg-white/10 rounded"
              >
                Reset
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer p-1 hover:bg-white/10 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {/* Initial Welcome & Language Choice */}
            {!selectedLang ? (
              <div className="space-y-4">
                <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm text-xs leading-relaxed text-slate-800">
                  <p className="font-bold text-slate-700 mb-2">
                    इंडियन ओवरसीज़ बैंक में आपका स्वागत है ! मैं IOB Buddy, आपका डिजिटल सहायक हूं 🤖। कृपया नीचे दी गई भाषाओं में से चयन करें:
                  </p>
                  <p className="mt-2 text-slate-600">
                    Welcome to Indian Overseas Bank! I am IOB Buddy, your Digital Assistant 🤖. Please select from the below mentioned languages:
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.val}
                      onClick={() => handleLanguageSelect(lang.val)}
                      className="px-2.5 py-1.5 bg-white border border-slate-200 hover:border-fuchsia-500 hover:text-fuchsia-600 hover:bg-fuchsia-50/20 text-[11px] font-bold text-slate-600 rounded-full transition-all cursor-pointer shadow-xs text-center truncate"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Chat Flow
              <div className="space-y-3.5">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-fuchsia-600 text-white shadow-sm rounded-br-none'
                        : 'bg-white border border-slate-200/80 text-slate-800 shadow-xs rounded-bl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            )}
          </div>

          {/* Typing Area */}
          <div className="p-3 border-t border-slate-200/80 bg-white">
            <div className="flex items-center gap-2 bg-slate-100/70 border border-slate-200 rounded-full px-4 py-2 text-xs">
              <button className="text-slate-400 hover:text-slate-600 p-0.5">
                <Menu className="w-4 h-4" />
              </button>
              <input
                type="text"
                placeholder={selectedLang ? "Ask about pre-approved loan, card, or locker..." : "Please select language first..."}
                disabled={!selectedLang}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-transparent outline-none text-slate-700 placeholder-slate-400"
              />
              <button
                disabled={!selectedLang}
                onClick={handleSend}
                className={`p-1 rounded-full transition-all ${
                  selectedLang && inputVal.trim()
                    ? 'text-fuchsia-600 hover:bg-fuchsia-50'
                    : 'text-slate-300'
                }`}
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </div>
            <div className="text-center mt-2 flex items-center justify-center gap-1.5">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-fuchsia-500 animate-pulse" />
                ⚡ by Floatbot
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
