import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Award, CreditCard, Briefcase, User, Phone, Mail, MessageSquare, Shield, Clock, Globe, Users, FileText, Landmark, BarChart2, Activity } from 'lucide-react';
import { mockCustomer, mockCreditProducts, mockTriggers, customerExtended, spendingCategories } from '../services/mockData';
import logoImg from '../assets/logo.png';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

type TabType = 'profile' | 'offers' | 'insights';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [cltvScore, setCltvScore] = useState(84);
  const [termDepositOpt, setTermDepositOpt] = useState(false);
  const [supplyChainOpt, setSupplyChainOpt] = useState(false);
  const [creditCardOpt, setCreditCardOpt] = useState(false);
  const [whatsappAlertsOpt, setWhatsappAlertsOpt] = useState(false);

  const calcCLTVScore = () => {
    let score = cltvScore;
    if (termDepositOpt) score += 4;
    if (supplyChainOpt) score += 5;
    if (creditCardOpt) score += 3;
    if (whatsappAlertsOpt) score += 2;
    return Math.min(100, score);
  };

  const calcAnnualYield = () => {
    let yieldVal = 112500;
    if (termDepositOpt) yieldVal += 40000;
    if (supplyChainOpt) yieldVal += 75000;
    if (creditCardOpt) yieldVal += 12000;
    if (whatsappAlertsOpt) yieldVal += 2000;
    return yieldVal;
  };

  const calcPPCIndex = () => {
    let ppc = 3.0;
    if (termDepositOpt) ppc += 1;
    if (supplyChainOpt) ppc += 1;
    if (creditCardOpt) ppc += 1;
    return ppc;
  };
  const [appSessions, setAppSessions] = useState(92);
  const [waOpenRate, setWaOpenRate] = useState(85);
  const [crossSell, setCrossSell] = useState(67);
  const [isLive] = useState(true);
  const [showOffers, setShowOffers] = useState(false);

  const handleViewOffers = () => {
    setShowOffers(!showOffers);
  };

  const handleBuildOffer = () => {
    navigate('/mobile');
  };

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setCltvScore(prev => Math.min(100, prev + Math.floor(Math.random() * 2)));
      setAppSessions(prev => Math.min(100, prev + Math.floor(Math.random() * 3) - 1));
      setWaOpenRate(prev => Math.min(100, prev + Math.floor(Math.random() * 2)));
      setCrossSell(prev => Math.min(100, prev + Math.floor(Math.random() * 2)));
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-unity-slate">
      {/* Main Content */}
      <div className="flex flex-col">
        {/* Top Bar with Tabs */}
        <div className="bg-white border-b border-unity-gold-border/60 px-6 py-3 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Link to="/" className="text-unity-slate/40 hover:text-unity-gold-dark transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="relative h-10 w-[200px] md:w-[250px] flex-shrink-0">
                <img 
                  src={logoImg} 
                  className="absolute top-1/2 -translate-y-1/2 left-0 h-[130px] md:h-[160px] w-auto max-w-none object-contain z-10" 
                  alt="Unity Small Finance Bank" 
                />
              </div>
              <div className="border-l border-slate-200 pl-3 ml-1 hidden sm:block">
                <p className="text-unity-slate/50 text-[10px] font-bold uppercase tracking-wider">Customer 360 Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-700 text-[10px] font-bold">LIVE CORE SYNC</span>
              </div>
              <span className="text-unity-slate/50 text-[10px] font-bold">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-100 pl-0 sm:pl-[240px] md:pl-[290px] transition-all">
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-3 px-2 text-xs font-bold border-b-2 tracking-wider uppercase transition-all ${
                activeTab === 'profile'
                  ? 'border-unity-gold-dark text-unity-gold-dark'
                  : 'border-transparent text-unity-slate/60 hover:text-unity-slate hover:border-gray-200'
              }`}
            >
              Customer Profile
            </button>
            <button
              onClick={() => setActiveTab('offers')}
              className={`pb-3 px-2 text-xs font-bold border-b-2 tracking-wider uppercase transition-all ${
                activeTab === 'offers'
                  ? 'border-unity-gold-dark text-unity-gold-dark'
                  : 'border-transparent text-unity-slate/60 hover:text-unity-slate hover:border-gray-200'
              }`}
            >
              Offers & Products
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`pb-3 px-2 text-xs font-bold border-b-2 tracking-wider uppercase transition-all ${
                activeTab === 'insights'
                  ? 'border-unity-gold-dark text-unity-gold-dark'
                  : 'border-transparent text-unity-slate/60 hover:text-unity-slate hover:border-gray-200'
              }`}
            >
              AI Insights
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-8 py-6 bg-[#FAF9F6]">
          {/* Customer Profile Tab */}
          {activeTab === 'profile' && (
            <div className="animate-fadeIn max-w-6xl mx-auto">
              {/* Header card: converted from dark to a premium light golden-cream card with slate text */}
              <div className="bg-gradient-to-r from-unity-gold-light via-[#FFFDF5] to-white border-2 border-unity-gold-border rounded-xl shadow-sm p-5 mb-6 text-unity-slate relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-unity-gold/5 to-transparent animate-shimmer"></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-unity-gold/15 border border-unity-gold-border rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-unity-gold-dark" />
                    </div>
                    <div>
                      <h1 className="text-xl font-black text-unity-slate tracking-tight">{mockCustomer.name}</h1>
                      <p className="text-unity-slate/70 text-xs">CIF: {customerExtended.kyc.cif} • {mockCustomer.segment}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-unity-slate/60 text-xs mb-2">Customer since {mockCustomer.since}</p>
                    <div className="inline-flex items-center gap-1.5 bg-unity-gold/20 text-unity-gold-dark px-3 py-1 rounded-full font-bold text-xs border border-unity-gold-border">
                      <Award className="w-3.5 h-3.5" />
                      {mockCustomer.tier} Tier
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 relative z-10">
                  <div className="bg-white/80 border border-unity-gold-border/60 rounded-xl p-3.5 card-hover transform transition-all duration-300 hover:scale-102 shadow-xs">
                    <p className="text-unity-slate/50 text-[10px] font-bold uppercase mb-1">CLTV Score</p>
                    <p className="text-xl font-extrabold text-unity-slate">{cltvScore}/100</p>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                      <div className="bg-unity-gold h-1.5 rounded-full transition-all duration-500" style={{ width: `${cltvScore}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-white/80 border border-unity-gold-border/60 rounded-xl p-3.5 card-hover transform transition-all duration-300 hover:scale-102 shadow-xs">
                    <p className="text-unity-slate/50 text-[10px] font-bold uppercase mb-1">Monthly Income</p>
                    <p className="text-xl font-extrabold text-unity-slate">₹{(mockCustomer.monthlyIncome / 100000).toFixed(1)}L</p>
                  </div>
                  <div className="bg-white/80 border border-unity-gold-border/60 rounded-xl p-3.5 card-hover transform transition-all duration-300 hover:scale-102 shadow-xs">
                    <p className="text-unity-slate/50 text-[10px] font-bold uppercase mb-1">FOIR Headroom</p>
                    <p className="text-xl font-extrabold text-unity-slate">{mockCustomer.foir}%</p>
                  </div>
                  <div className="bg-white/80 border border-unity-gold-border/60 rounded-xl p-3.5 card-hover transform transition-all duration-300 hover:scale-102 shadow-xs">
                    <p className="text-unity-slate/50 text-[10px] font-bold uppercase mb-1">Credit Score</p>
                    <p className="text-xl font-extrabold text-unity-slate">{mockCustomer.creditScore}</p>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                      <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${(mockCustomer.creditScore / 900) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-6 animate-slideInLeft items-stretch">
                {/* Column 1 - Customer Profile */}
                <div className="bg-white rounded-2xl shadow-sm p-5 card-hover border border-unity-gold-border/50 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-unity-gold/10 rounded-full flex items-center justify-center text-unity-gold-dark flex-shrink-0">
                        <User className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-extrabold text-unity-slate mb-2">Customer Profile</h2>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                             <p className="text-unity-slate/50 font-bold uppercase">Segment</p>
                             <p className="font-semibold text-unity-slate">{mockCustomer.segment}</p>
                          </div>
                          <div>
                             <p className="text-unity-slate/50 font-bold uppercase">Tier</p>
                             <p className="font-semibold text-unity-gold-dark">{mockCustomer.tier}</p>
                          </div>
                          <div>
                             <p className="text-unity-slate/50 font-bold uppercase">Customer Since</p>
                             <p className="font-semibold text-unity-slate">{mockCustomer.since}</p>
                          </div>
                          <div>
                             <p className="text-unity-slate/50 font-bold uppercase">CLTV Status</p>
                             <p className="font-semibold text-emerald-600">Excellent ({cltvScore})</p>
                          </div>
                          <div>
                             <p className="text-unity-slate/50 font-bold uppercase">Digital Index</p>
                             <p className="font-semibold text-unity-slate">92/100 (High)</p>
                          </div>
                          <div>
                             <p className="text-unity-slate/50 font-bold uppercase">Risk Profile</p>
                             <p className="font-semibold text-emerald-600">Low Risk</p>
                          </div>
                        </div>
                      </div>
                    </div>
   
                    <div className="border-t border-gray-100 pt-3">
                      <h3 className="font-bold text-unity-slate/80 mb-3 text-xs uppercase tracking-wider">Business Behavior & Insight</h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/20 border border-unity-gold-border rounded-lg p-2.5">
                          <p className="text-[10px] font-bold text-unity-gold-dark mb-1">MoM Growth</p>
                          <p className="text-xl font-extrabold text-unity-slate">+22%</p>
                          <p className="text-[9px] text-unity-slate/60">Current Account</p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-[#FAF9F6] border border-slate-200 rounded-lg p-2.5">
                          <p className="text-[10px] font-bold text-unity-slate/80 mb-1">Avg Balance</p>
                          <p className="text-xl font-extrabold text-unity-slate">₹3.1L</p>
                          <p className="text-[9px] text-unity-slate/60">MAB Compliant</p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-50/30 to-slate-50 border border-unity-gold-border rounded-lg p-2.5">
                          <p className="text-[10px] font-bold text-unity-gold-dark mb-1">Product / Customer</p>
                          <p className="text-xl font-extrabold text-unity-slate">3.0</p>
                          <p className="text-[9px] text-unity-slate/60">Active CA, FD, OD</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <h3 className="font-bold text-unity-slate/80 mb-2 text-xs uppercase tracking-wider">Contact Information</h3>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-unity-slate/40" />
                        <span className="text-unity-slate/60">Phone:</span>
                        <span className="font-bold text-unity-slate">{mockCustomer.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-unity-slate/40" />
                        <span className="text-unity-slate/60">Email:</span>
                        <span className="font-bold text-unity-slate">{mockCustomer.email}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Engagement Momentum + Product Stack */}
                <div className="grid grid-rows-[auto_1fr] gap-6 w-full">
                  <div className="bg-white rounded-2xl shadow-sm p-5 border border-unity-gold-border/50 card-hover">
                    <h2 className="text-base font-extrabold text-unity-slate mb-3 uppercase tracking-wider">Engagement Momentum</h2>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
                        <span className="text-[10px] font-bold text-emerald-950 block mb-1.5 leading-tight">App<br/>Sessions</span>
                        <div className="w-full bg-emerald-200 rounded-full h-1 mt-1 mb-1.5">
                          <div className="bg-emerald-600 h-1 rounded-full transition-all duration-500" style={{ width: `${appSessions}%` }}></div>
                        </div>
                        <span className="text-sm font-extrabold text-emerald-700">{appSessions}%</span>
                      </div>

                      <div className="bg-amber-50 border border-unity-gold-border rounded-lg p-2.5">
                        <span className="text-[10px] font-bold text-unity-slate block mb-1.5 leading-tight">WhatsApp<br/>Open Rate</span>
                        <div className="w-full bg-amber-200 rounded-full h-1 mt-1 mb-1.5">
                          <div className="bg-unity-gold-dark h-1 rounded-full transition-all duration-500" style={{ width: `${waOpenRate}%` }}></div>
                        </div>
                        <span className="text-sm font-extrabold text-unity-gold-dark">{waOpenRate}%</span>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
                        <span className="text-[10px] font-bold text-unity-slate block mb-1.5 leading-tight">Cross-Sell<br/>Affinity</span>
                        <div className="w-full bg-slate-200 rounded-full h-1 mt-1 mb-1.5">
                          <div className="bg-unity-slate-light h-1 rounded-full transition-all duration-500" style={{ width: `${crossSell}%` }}></div>
                        </div>
                        <span className="text-sm font-extrabold text-unity-slate">{crossSell}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Stack Card */}
                  <div className="bg-white rounded-2xl shadow-sm p-5 border border-unity-gold-border/50 card-hover flex flex-col">
                    <h3 className="font-extrabold text-unity-slate mb-3 text-xs uppercase tracking-wider">Product Stack</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5 p-2.5 bg-gradient-to-r from-amber-50/50 to-white rounded-lg border border-unity-gold-border/60">
                        <div className="w-8 h-8 bg-unity-gold/15 border border-unity-gold-border rounded-lg flex items-center justify-center">
                          <span className="text-unity-gold-dark font-extrabold text-xs">CA</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-unity-slate text-xs">Current Business Account</p>
                          <p className="text-[10px] text-unity-slate/70 truncate">₹3,18,400 • RuPay Select Credit Card Linked</p>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[9px] font-bold">ACTIVE</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 bg-gradient-to-r from-amber-50/70 to-white rounded-lg border border-unity-gold-border/80">
                        <div className="w-8 h-8 bg-unity-gold/20 border border-unity-gold-border rounded-lg flex items-center justify-center">
                          <span className="text-unity-gold-dark font-extrabold text-xs">FD</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-unity-slate text-xs">High-Yield Fixed Deposit</p>
                          <p className="text-[10px] text-unity-slate/70 truncate">₹12,50,000 • 9.0% p.a. yield</p>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[9px] font-bold">ACTIVE</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 bg-gradient-to-r from-slate-50 to-white rounded-lg border border-slate-200">
                        <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center">
                          <span className="text-unity-slate font-extrabold text-xs">OD</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-unity-slate text-xs">Business Overdraft Limit</p>
                          <p className="text-[10px] text-unity-slate/70 truncate">Limit: ₹3,00,000 • Utilized: 15%</p>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[9px] font-bold">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3 - Unity SFB Premium Card Flavor */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-unity-gold-border/50 card-hover flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-extrabold text-unity-slate text-xs uppercase tracking-wider">Active Credit Card</h3>
                      <span className="text-[10px] text-unity-slate/50 font-bold uppercase tracking-wider">RuPay Select Credit</span>
                    </div>
                    
                    {/* Visual Card Mockup */}
                    <div className="w-full aspect-[1.586/1] rounded-xl bg-gradient-to-br from-[#2A3649] via-[#3C4C63] to-[#1C2532] text-white p-4 flex flex-col justify-between shadow-md relative overflow-hidden border border-slate-700/50">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#F5BE18]/15 to-transparent rounded-full -mr-8 -mt-8 pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-radial from-[#F5BE18]/10 to-transparent rounded-full -ml-8 -mb-8 pointer-events-none"></div>
                      
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[9px] font-black tracking-wider text-unity-gold uppercase leading-none">Unity Small Finance Bank</p>
                          <p className="text-[6px] text-white/50 tracking-widest uppercase leading-none mt-1">Pearl Business Credit</p>
                        </div>
                        <div className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded text-[8px] font-bold border border-white/10 text-unity-gold">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                          ACTIVE
                        </div>
                      </div>

                      {/* Card Chip & Contactless */}
                      <div className="flex justify-between items-end mt-2">
                        <div className="w-7 h-5 rounded bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 border border-amber-600/30 flex flex-col justify-between p-1">
                          <div className="flex justify-between h-full">
                            <div className="w-0.5 h-full bg-amber-900/20"></div>
                            <div className="w-0.5 h-full bg-amber-900/20"></div>
                            <div className="w-0.5 h-full bg-amber-900/20"></div>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 17.5c2.5-2.5 2.5-6.5 0-9M7.5 20c3.5-3.5 3.5-9.5 0-13M10 22.5c4.5-4.5 4.5-12.5 0-17" strokeLinecap="round" />
                        </svg>
                      </div>

                      {/* Card Number */}
                      <div className="mt-3 font-mono text-sm tracking-widest text-white/95">
                        4321 8901 2345 6789
                      </div>

                      {/* Cardholder & RuPay Platinum */}
                      <div className="flex justify-between items-end mt-1">
                        <div>
                          <p className="text-[5px] text-white/40 uppercase tracking-widest">Card Holder</p>
                          <p className="text-[10px] font-bold tracking-wide uppercase text-white/90">Rohan Mehta</p>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] font-black italic tracking-wide text-white/90">RuPay</span>
                          <span className="block text-[5.5px] font-bold tracking-wider uppercase text-unity-gold -mt-1">SELECT CREDIT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Controls & Limits */}
                  <div className="border-t border-gray-100 pt-4 mt-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[10px] font-bold text-unity-slate/50 uppercase tracking-wider mb-2">Card Limit & Spends</h4>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-unity-slate/60">Total Limit</span>
                          <span className="font-bold text-unity-slate">₹3,00,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-unity-slate/60">Utilized Limit</span>
                          <span className="font-bold text-unity-slate">₹45,000</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1">
                          <div className="bg-unity-gold-dark h-1.5 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100/70 pt-3">
                      <div className="flex justify-between gap-2 text-[10px]">
                        <button className="flex-1 bg-slate-50 hover:bg-slate-100 text-unity-slate font-bold py-1.5 px-2 rounded border border-slate-200 uppercase tracking-wider text-center transition-colors">
                          Reset PIN
                        </button>
                        <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 font-bold py-1.5 px-2 rounded border border-red-200 uppercase tracking-wider text-center transition-colors">
                          Block Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Financial Overview & Credit Portfolio */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-unity-gold-border/50 card-hover">
                  <h2 className="text-base font-extrabold text-unity-slate mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <CreditCard className="w-5 h-5 text-unity-gold-dark" />
                    Credit Portfolio
                  </h2>
                  
                  <div className="space-y-3">
                    {mockCreditProducts.map((product, idx) => (
                      <div key={idx} className="border border-unity-gold-border/40 rounded-lg p-3 bg-[#FFFDF5]/40">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-unity-gold-dark" />
                            <h3 className="font-bold text-unity-slate text-xs">{product.type}</h3>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${
                            product.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                            product.status === 'closed' ? 'bg-slate-50 text-slate-600 border-slate-200' :
                            'bg-amber-50 text-unity-gold-dark border-unity-gold-border'
                          }`}>
                            {product.status.toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-[10px] text-unity-slate/85">
                          <div>
                            <p className="text-unity-slate/50 font-semibold uppercase">Outstanding</p>
                            <p className="font-bold text-unity-slate">
                              {product.outstanding > 0 ? `₹${(product.outstanding / 100000).toFixed(1)}L` : '₹0'}
                            </p>
                          </div>
                          <div>
                            <p className="text-unity-slate/50 font-semibold uppercase">Monthly EMI</p>
                            <p className="font-bold text-unity-slate">
                              {product.emi > 0 ? `₹${product.emi.toLocaleString()}` : 'N/A'}
                            </p>
                          </div>
                          <div>
                            <p className="text-unity-slate/50 font-semibold uppercase">Tenure</p>
                            <p className="font-bold text-unity-slate">{product.tenure}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {showOffers && (
                    <div className="mt-4 space-y-3 animate-fadeIn">
                      <div className="bg-gradient-to-r from-amber-50/50 to-white border-2 border-unity-gold-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-unity-slate text-xs">Pre-Approved Business Growth Loan</h4>
                          <span className="px-2 py-0.5 bg-unity-gold text-unity-slate rounded-full text-[9px] font-bold">PRE-APPROVED</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs text-unity-slate/85">
                          <div>
                            <p className="text-unity-slate/50">Amount</p>
                            <p className="font-bold text-unity-slate">₹5,00,000</p>
                          </div>
                          <div>
                            <p className="text-unity-slate/50">Interest Rate</p>
                            <p className="font-bold text-unity-slate">14.5% p.a.</p>
                          </div>
                          <div>
                            <p className="text-unity-slate/50">Tenure</p>
                            <p className="font-bold text-unity-slate">24 months</p>
                          </div>
                          <div>
                            <p className="text-unity-slate/50">Processing Fee</p>
                            <p className="font-bold text-unity-slate">₹4,999 (Discounted)</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-300 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-unity-slate text-xs">Business Expansion Overdraft</h4>
                          <span className="px-2 py-0.5 bg-slate-200 text-unity-slate rounded-full text-[9px] font-bold">ELIGIBLE</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs text-unity-slate/85">
                          <div>
                            <p className="text-unity-slate/50">Limit Amount</p>
                            <p className="font-bold text-unity-slate">₹3,00,000</p>
                          </div>
                          <div>
                            <p className="text-unity-slate/50">Interest Rate</p>
                            <p className="font-bold text-unity-slate">12.0% p.a.</p>
                          </div>
                          <div>
                            <p className="text-unity-slate/50">Tenure</p>
                            <p className="font-bold text-unity-slate">Annual Renewal</p>
                          </div>
                          <div>
                            <p className="text-unity-slate/50">Processing Fee</p>
                            <p className="font-bold text-unity-slate">1% + GST</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={handleViewOffers}
                    className="w-full mt-4 bg-gradient-to-r from-unity-gold to-unity-gold-dark hover:from-unity-gold-dark hover:to-unity-gold text-unity-slate font-bold py-2.5 rounded-lg transition-all duration-300 cursor-pointer shadow-xs text-xs uppercase tracking-wider"
                  >
                    {showOffers ? 'Hide Pre-Approved Offers' : 'View Pre-Approved Offers'}
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-5 border border-unity-gold-border/50 card-hover">
                  <h2 className="text-base font-extrabold text-unity-slate mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <TrendingUp className="w-5 h-5 text-unity-gold-dark" />
                    AI-Powered Insights
                  </h2>
                  
                  <p className="text-[10px] font-bold text-unity-slate/50 mb-4 uppercase tracking-wider">
                    UNITY AI ENGINE • Real-time Stream
                  </p>

                  <div className="space-y-3">
                    {mockTriggers.map((trigger) => (
                      <div key={trigger.id} className={`border-l-4 rounded-r-lg p-3.5 ${
                        trigger.urgency === 'high' ? 'border-amber-500 bg-amber-50/20' :
                        trigger.urgency === 'medium' ? 'border-yellow-500 bg-yellow-50/10' :
                        'border-slate-500 bg-slate-50'
                      }`}>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-unity-slate text-xs">{trigger.name}</h3>
                          <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${
                            trigger.urgency === 'high' ? 'bg-amber-100 text-unity-gold-dark' :
                            trigger.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-slate-200 text-slate-700'
                          }`}>
                            {trigger.type.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-[11px] text-unity-slate/80 leading-relaxed">{trigger.description}</p>
                        <p className="text-[9px] text-unity-slate/50 font-bold mt-2">
                          {trigger.timestamp.toLocaleDateString()} • {trigger.urgency.toUpperCase()} URGENCY
                        </p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={handleBuildOffer}
                    className="w-full mt-4 bg-gradient-to-r from-unity-slate to-unity-slate-light text-white font-bold py-2.5 rounded-lg transition-all duration-300 cursor-pointer shadow-xs text-xs uppercase tracking-wider animate-pulse-slow"
                  >
                    Start Business Loan Journey
                  </button>
                </div>
              </div>

              {/* KYC, Interaction, Preferences Grid */}
              <div className="grid lg:grid-cols-3 gap-6 mb-6 mt-6">
                {/* KYC & Validation */}
                <div className="bg-white rounded-2xl shadow-sm p-5 card-hover border border-unity-gold-border/50">
                  <h2 className="text-xs font-bold text-unity-slate/80 mb-4 flex items-center gap-2 uppercase tracking-widest border-b border-gray-100 pb-2">
                    <FileText className="w-4 h-4 text-unity-gold-dark" />
                    KYC & Validation
                  </h2>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-unity-slate/60 font-semibold">KYC Status</span>
                      <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold">
                        {customerExtended.kyc.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-unity-slate/60 font-semibold">CIF Number</span>
                      <span className="font-bold text-unity-slate">{customerExtended.kyc.cif}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-unity-slate/60 font-semibold">Last Updated</span>
                      <span className="font-bold text-unity-slate">{customerExtended.kyc.lastUpdated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-unity-slate/60 font-semibold">Risk Category</span>
                      <span className="font-bold text-emerald-600">{customerExtended.riskProfile.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-unity-slate/60 font-semibold">Payment History</span>
                      <span className="font-bold text-unity-slate">{customerExtended.riskProfile.paymentHistory}</span>
                    </div>
                  </div>
                </div>

                {/* Interaction History */}
                <div className="bg-white rounded-2xl shadow-sm p-5 card-hover border border-unity-gold-border/50">
                  <h2 className="text-xs font-bold text-unity-slate/80 mb-4 flex items-center gap-2 uppercase tracking-widest border-b border-gray-100 pb-2">
                    <MessageSquare className="w-4 h-4 text-unity-gold-dark" />
                    Interaction History
                  </h2>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 p-2 bg-amber-50/30 rounded-lg border border-unity-gold-border/30">
                      <Phone className="w-4 h-4 text-unity-gold-dark" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-unity-slate uppercase">Customer Support Calls</p>
                        <p className="text-[9px] text-unity-slate/70">{customerExtended.interactions.ccCalls} total • Last: {customerExtended.interactions.lastCall}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded-lg border border-slate-200/50">
                      <Mail className="w-4 h-4 text-unity-slate/60" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-unity-slate uppercase">Email Desk</p>
                        <p className="text-[9px] text-unity-slate/70">{customerExtended.interactions.emails} emails sent</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 bg-amber-50/30 rounded-lg border border-unity-gold-border/30">
                      <MessageSquare className="w-4 h-4 text-unity-gold-dark" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-unity-slate uppercase">WhatsApp & Chatbot</p>
                        <p className="text-[9px] text-unity-slate/70">{customerExtended.interactions.chats} interactive sessions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded-lg border border-slate-200/50">
                      <Clock className="w-4 h-4 text-unity-slate/60" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-unity-slate uppercase">Portal Sessions</p>
                        <p className="text-[9px] text-unity-slate/70">{customerExtended.interactions.lastAppLogin} • {customerExtended.interactions.appUsageFrequency}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preferences & Behavior */}
                <div className="bg-white rounded-2xl shadow-sm p-5 card-hover border border-unity-gold-border/50">
                  <h2 className="text-xs font-bold text-unity-slate/80 mb-4 flex items-center gap-2 uppercase tracking-widest border-b border-gray-100 pb-2">
                    <Globe className="w-4 h-4 text-unity-gold-dark" />
                    Preferences & Behavior
                  </h2>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-unity-slate/60 font-semibold">Preferred Channel</span>
                      <span className="font-bold text-unity-gold-dark">{customerExtended.preferences.contactChannel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-unity-slate/60 font-semibold">Contact Time</span>
                      <span className="font-bold text-unity-slate">{customerExtended.preferences.contactTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-unity-slate/60 font-semibold">Preferred Language</span>
                      <span className="font-bold text-unity-slate">{customerExtended.preferences.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-unity-slate/60 font-semibold">Digital Propensity</span>
                      <span className="font-bold text-emerald-600">{customerExtended.preferences.digitalPreference}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-unity-slate/60 font-semibold">Customer Segment</span>
                      <span className="font-bold text-unity-slate-light">{customerExtended.persona}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Linked Accounts & Risk Metrics */}
              <div className="grid lg:grid-cols-2 gap-6 mt-6 animate-fadeIn">
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-unity-gold-border/50 card-hover">
                  <h2 className="text-base font-extrabold text-unity-slate mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <Users className="w-5 h-5 text-unity-gold-dark" />
                    Linked Accounts
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-unity-slate/50 uppercase mb-2">Co-Borrowers & Directors</p>
                      {customerExtended.linkedAccounts.coBorrowers.map((borrower, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200/50 rounded-lg">
                          <User className="w-4 h-4 text-unity-slate/60" />
                          <span className="text-xs text-unity-slate font-medium">{borrower}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-unity-slate/50 uppercase mb-2">High-Yield Deposit Portfolio</p>
                      <div className="space-y-2">
                        {customerExtended.linkedAccounts.deposits.map((deposit, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-amber-50/30 border border-unity-gold-border/40 rounded-lg">
                            <Landmark className="w-4 h-4 text-unity-gold-dark" />
                            <span className="text-xs text-unity-slate font-medium">{deposit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-5 border border-unity-gold-border/50 card-hover">
                  <h2 className="text-base font-extrabold text-unity-slate mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <Shield className="w-5 h-5 text-unity-gold-dark" />
                    Risk Matrix & Delinquency checks
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg text-center">
                        <p className="text-2xl font-black text-emerald-700">{customerExtended.alerts.bureauTriggers}</p>
                        <p className="text-[10px] text-emerald-950 font-bold uppercase mt-1">Bureau Alerts</p>
                      </div>
                      <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg text-center">
                        <p className="text-2xl font-black text-emerald-700">{customerExtended.alerts.dpd}</p>
                        <p className="text-[10px] text-emerald-950 font-bold uppercase mt-1">Days Past Due</p>
                      </div>
                    </div>
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3">
                      <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <div>
                        <p className="font-extrabold text-emerald-950 text-xs uppercase">Underwriting Clearance</p>
                        <p className="text-[10px] text-emerald-800 leading-tight">Verified clean repayment track. Zero default signals. Recommended for automated approval.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics & Insights Charts */}
              <div className="grid lg:grid-cols-2 gap-6 mt-6">
                {/* Outflow Chart */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-unity-gold-border/50 card-hover">
                  <h3 className="text-base font-extrabold text-unity-slate mb-4 uppercase tracking-wider flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-unity-gold-dark" />
                    Business Outflow Distribution
                  </h3>
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={spendingCategories}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="percentage"
                        >
                          {spendingCategories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Share']}
                          contentStyle={{ background: '#2A3649', border: 'none', borderRadius: '8px', fontSize: '12px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                    {spendingCategories.map((entry, index) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }}></span>
                        <span className="text-unity-slate/70 truncate">{entry.name}</span>
                        <span className="font-bold text-unity-slate ml-auto">{entry.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Balance & Inflow History */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-unity-gold-border/50 card-hover">
                  <h3 className="text-base font-extrabold text-unity-slate mb-4 uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-unity-gold-dark" />
                    Customer Balance & Inflow History
                  </h3>
                  <p className="text-[10px] text-unity-slate/50 font-bold uppercase tracking-wider mb-2">Monthly Inflows vs Average Account Balance (₹)</p>
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={[
                          { month: 'Sep 25', Inflow: 85000, Balance: 150000 },
                          { month: 'Oct 25', Inflow: 92000, Balance: 185000 },
                          { month: 'Nov 25', Inflow: 110000, Balance: 210000 },
                          { month: 'Dec 25', Inflow: 105000, Balance: 235000 },
                          { month: 'Jan 26', Inflow: 115000, Balance: 265000 },
                          { month: 'Feb 26', Inflow: 120000, Balance: 318400 },
                        ]}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2A3649" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#2A3649" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorInflow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F5BE18" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#F5BE18" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="month" stroke="#2A3649" fontSize={10} fontWeight="bold" />
                        <YAxis 
                          stroke="#2A3649" 
                          fontSize={10} 
                          fontWeight="bold" 
                          tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                          width={55}
                        />
                        <Tooltip 
                          formatter={(value, name) => [`₹${(Number(value) / 100000).toFixed(1)}L`, name]}
                          contentStyle={{ background: '#2A3649', border: 'none', borderRadius: '8px', fontSize: '12px' }} 
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 'bold' }} />
                        <Area type="monotone" dataKey="Balance" stroke="#2A3649" strokeWidth={2} fillOpacity={1} fill="url(#colorBalance)" name="Avg Balance" />
                        <Area type="monotone" dataKey="Inflow" stroke="#F5BE18" strokeWidth={2} fillOpacity={1} fill="url(#colorInflow)" name="Monthly Inflows" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Offers & Products Tab */}
          {activeTab === 'offers' && (
            <div className="animate-fadeIn space-y-6 max-w-6xl mx-auto">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-100 pb-3">
                <div>
                  <h2 className="text-lg font-black text-unity-slate uppercase tracking-wider">Limits, Offers & RM Workbench</h2>
                  <p className="text-xs text-unity-slate/60 font-semibold mt-0.5">Customize relationship value and simulate cross-sell impacts</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Two Columns: Offer Cards */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Business Growth Loan */}
                    <div className="bg-gradient-to-br from-amber-50/50 via-[#FFFDF5] to-white border-2 border-unity-gold-border rounded-xl p-5 shadow-sm card-hover">
                      <div className="flex items-center justify-between mb-3 border-b border-unity-gold-border/50 pb-2">
                        <h3 className="text-base font-extrabold text-unity-slate">Business Growth Loan</h3>
                        <span className="px-2.5 py-0.5 bg-unity-gold text-unity-slate rounded-full text-[10px] font-bold">PRE-APPROVED</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-unity-slate/85">
                        <div>
                          <p className="text-unity-slate/50 font-semibold uppercase">Offered Limit</p>
                          <p className="text-lg font-black text-unity-slate">₹5,00,000</p>
                        </div>
                        <div>
                          <p className="text-unity-slate/50 font-semibold uppercase">Interest Rate</p>
                          <p className="text-lg font-black text-unity-gold-dark">14.5% p.a.</p>
                        </div>
                        <div>
                          <p className="text-unity-slate/50 font-semibold uppercase">Tenure</p>
                          <p className="text-sm font-bold text-unity-slate">24 months</p>
                        </div>
                        <div>
                          <p className="text-unity-slate/50 font-semibold uppercase">Processing Fee</p>
                          <p className="text-sm font-bold text-unity-slate">₹4,999</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => navigate('/mobile')}
                        className="w-full bg-unity-slate hover:bg-unity-slate-light text-white py-2.5 rounded-lg font-bold transition-all text-xs uppercase tracking-wider cursor-pointer"
                      >
                        Initiate Application →
                      </button>
                    </div>

                    {/* Business Overdraft Limit */}
                    <div className="bg-white border-2 border-unity-gold-border/40 rounded-xl p-5 shadow-sm card-hover">
                      <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                        <h3 className="text-base font-extrabold text-unity-slate">Business Overdraft Limit</h3>
                        <span className="px-2.5 py-0.5 bg-slate-100 text-unity-slate border border-slate-200 rounded-full text-[10px] font-bold">ELIGIBLE</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-unity-slate/85">
                        <div>
                          <p className="text-unity-slate/50 font-semibold uppercase">Pre-approved Overdraft</p>
                          <p className="text-lg font-black text-unity-slate">₹3,00,000</p>
                        </div>
                        <div>
                          <p className="text-unity-slate/50 font-semibold uppercase">Interest Rate</p>
                          <p className="text-lg font-black text-unity-slate">12.0% p.a.</p>
                        </div>
                        <div>
                          <p className="text-unity-slate/50 font-semibold uppercase">Validity</p>
                          <p className="text-sm font-bold text-unity-slate">12 Months (FD Backed)</p>
                        </div>
                        <div>
                          <p className="text-unity-slate/50 font-semibold uppercase">Processing Fee</p>
                          <p className="text-sm font-bold text-unity-slate">1% + GST</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          alert('Eligibility Confirmed: Overdraft against Fixed Deposit limit verified for Rohan Mehta.');
                        }}
                        className="w-full bg-white border border-unity-gold text-unity-gold-dark hover:bg-amber-50/20 py-2.5 rounded-lg font-bold transition-all text-xs uppercase tracking-wider cursor-pointer"
                      >
                        Check Eligibility Limit →
                      </button>
                    </div>
                  </div>

                  {/* Active Products Holdings */}
                  <div className="bg-white border border-unity-gold-border/30 rounded-xl p-5 shadow-sm">
                    <h3 className="text-xs font-bold text-unity-slate/50 uppercase tracking-wider mb-3">Customer Holding Distribution</h3>
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200/50 rounded-lg text-xs">
                        <div>
                          <p className="font-bold text-unity-slate">Current Business Account (CA)</p>
                          <p className="text-[10px] text-unity-slate/60">A/C: XXXX321456 • Active Credit Card Linked</p>
                        </div>
                        <span className="font-extrabold text-unity-slate">₹3,18,400</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200/50 rounded-lg text-xs">
                        <div>
                          <p className="font-bold text-unity-slate">High-Yield Term Deposit (FD)</p>
                          <p className="text-[10px] text-unity-slate/60">A/C: XXXX98012 • 9.0% p.a. yield (Matures in 15 days)</p>
                        </div>
                        <span className="font-extrabold text-unity-slate">₹12,50,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: RM Optimizer Workbench */}
                <div className="bg-gradient-to-br from-amber-50/40 via-[#FFFDF7] to-white border-2 border-unity-gold-border rounded-2xl p-5 shadow-sm card-hover">
                  <h3 className="text-xs font-extrabold text-unity-slate uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-unity-gold-dark" />
                    CLTV Optimizer Workbench
                  </h3>
                  <p className="text-[10px] text-unity-slate/60 leading-relaxed mb-4">
                    Select additional relationship enhancers to calculate projected customer lifetime value and bank yield.
                  </p>

                  {/* Checkbox inputs */}
                  <div className="space-y-3 mb-5">
                    <label className="flex items-start gap-2.5 p-2 bg-white border border-unity-gold-border/60 rounded-lg cursor-pointer hover:bg-[#FFFDF3] transition-colors text-xs text-unity-slate">
                      <input 
                        type="checkbox" 
                        checked={termDepositOpt}
                        onChange={() => setTermDepositOpt(!termDepositOpt)}
                        className="mt-0.5 rounded border-unity-gold text-unity-gold-dark focus:ring-unity-gold"
                      />
                      <div>
                        <p className="font-bold leading-tight">Add ₹10L Term Deposit</p>
                        <p className="text-[9px] text-unity-slate/50 mt-0.5">Increases asset pool by ₹10 Lakhs</p>
                      </div>
                    </label>

                    <label className="flex items-start gap-2.5 p-2 bg-white border border-unity-gold-border/60 rounded-lg cursor-pointer hover:bg-[#FFFDF3] transition-colors text-xs text-unity-slate">
                      <input 
                        type="checkbox" 
                        checked={supplyChainOpt}
                        onChange={() => setSupplyChainOpt(!supplyChainOpt)}
                        className="mt-0.5 rounded border-unity-gold text-unity-gold-dark focus:ring-unity-gold"
                      />
                      <div>
                        <p className="font-bold leading-tight">Link Supply Chain Facility</p>
                        <p className="text-[9px] text-unity-slate/50 mt-0.5">₹15L limit pre-approved credit</p>
                      </div>
                    </label>

                    <label className="flex items-start gap-2.5 p-2 bg-white border border-unity-gold-border/60 rounded-lg cursor-pointer hover:bg-[#FFFDF3] transition-colors text-xs text-unity-slate">
                      <input 
                        type="checkbox" 
                        checked={creditCardOpt}
                        onChange={() => setCreditCardOpt(!creditCardOpt)}
                        className="mt-0.5 rounded border-unity-gold text-unity-gold-dark focus:ring-unity-gold"
                      />
                      <div>
                        <p className="font-bold leading-tight">Issue RuPay Credit Card</p>
                        <p className="text-[9px] text-unity-slate/50 mt-0.5">₹2L limit, 1.5% reward structures</p>
                      </div>
                    </label>

                    <label className="flex items-start gap-2.5 p-2 bg-white border border-unity-gold-border/60 rounded-lg cursor-pointer hover:bg-[#FFFDF3] transition-colors text-xs text-unity-slate">
                      <input 
                        type="checkbox" 
                        checked={whatsappAlertsOpt}
                        onChange={() => setWhatsappAlertsOpt(!whatsappAlertsOpt)}
                        className="mt-0.5 rounded border-unity-gold text-unity-gold-dark focus:ring-unity-gold"
                      />
                      <div>
                        <p className="font-bold leading-tight">Enable WhatsApp Alerts</p>
                        <p className="text-[9px] text-unity-slate/50 mt-0.5">Increases digital index & active touchpoints</p>
                      </div>
                    </label>
                  </div>

                  {/* Calculations output */}
                  <div className="bg-white border border-unity-gold-border rounded-xl p-4 text-xs text-unity-slate space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-unity-slate/60 font-semibold">Forecasted CLTV Score</span>
                      <span className="text-sm font-black text-unity-gold-dark">{calcCLTVScore()}/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-unity-slate/60 font-semibold">Projected Annual Yield</span>
                      <span className="text-sm font-black text-unity-slate">₹{calcAnnualYield().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-unity-slate/60 font-semibold">New PPC Index</span>
                      <span className="text-sm font-black text-emerald-600">{calcPPCIndex().toFixed(1)}</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                      <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300" style={{ width: `${calcCLTVScore()}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Insights Tab */}
          {activeTab === 'insights' && (
            <div className="animate-fadeIn space-y-4 max-w-6xl mx-auto">
              <h2 className="text-lg font-extrabold text-unity-slate uppercase tracking-wider mb-4">Unity AI Engine Real-time Insights</h2>
              
              <div className="grid lg:grid-cols-2 gap-4">
                {mockTriggers.map((trigger) => (
                  <div key={trigger.id} className={`border-l-4 rounded-r-lg p-4 card-hover shadow-xs ${
                    trigger.urgency === 'high' ? 'border-amber-500 bg-amber-50/25' :
                    trigger.urgency === 'medium' ? 'border-yellow-500 bg-yellow-50/10' :
                    'border-slate-500 bg-slate-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-extrabold text-unity-slate text-xs">{trigger.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                        trigger.urgency === 'high' ? 'bg-amber-100 text-unity-gold-dark' :
                        trigger.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-slate-200 text-slate-700'
                      }`}>
                        {trigger.type}
                      </span>
                    </div>
                    <p className="text-unity-slate/85 text-xs mb-2 leading-relaxed">{trigger.description}</p>
                    <p className="text-unity-slate/40 text-[9px] font-bold">
                      {trigger.timestamp.toLocaleDateString()} • {trigger.urgency.toUpperCase()} URGENCY
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
