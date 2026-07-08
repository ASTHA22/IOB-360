import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Award, CreditCard, Briefcase, User, Phone, Mail, MessageSquare, Clock, Globe, Users, FileText, Landmark, BarChart2, Activity, Heart, Shield, MapPin, Calendar } from 'lucide-react';
import { mockCustomer, mockCreditProducts, mockTriggers, customerExtended, spendingCategories } from '../services/mockData';
import IOBLogo from '../components/IOBLogo';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

type TabType = 'profile' | 'offers' | 'insights';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [primaryBankIndex, setPrimaryBankIndex] = useState(88);
  const [termDepositOpt, setTermDepositOpt] = useState(false);
  const [lockerOpt, setLockerOpt] = useState(false);
  const [dematOpt, setDematOpt] = useState(false);
  const [insuranceOpt, setInsuranceOpt] = useState(false);

  const calcPrimaryBankIndex = () => {
    let index = primaryBankIndex;
    if (termDepositOpt) index += 3;
    if (lockerOpt) index += 2;
    if (dematOpt) index += 4;
    if (insuranceOpt) index += 3;
    return Math.min(100, index);
  };

  const calcTRVValue = () => {
    let trvVal = 21.7;
    if (termDepositOpt) trvVal += 10.0;
    if (lockerOpt) trvVal += 0.5;
    if (dematOpt) trvVal += 2.0;
    if (insuranceOpt) trvVal += 1.0;
    return `₹${trvVal.toFixed(1)}L`;
  };

  const calcPPCIndex = () => {
    let ppc = 3.0;
    if (termDepositOpt) ppc += 0.5;
    if (lockerOpt) ppc += 0.5;
    if (dematOpt) ppc += 0.5;
    if (insuranceOpt) ppc += 0.5;
    return ppc;
  };
  const [digitalTransactions, setDigitalTransactions] = useState(95);
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
      setPrimaryBankIndex(prev => Math.min(100, prev + (Math.random() > 0.7 ? 1 : 0)));
      setDigitalTransactions(prev => Math.min(100, prev + (Math.random() > 0.8 ? 1 : 0)));
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-iob-slate">
      {/* Main Content */}
      <div className="flex flex-col">
        {/* Top Bar with Tabs */}
        <div className="bg-white border-b border-iob-blue-border/60 px-6 py-3 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Link to="/" className="text-iob-slate/40 hover:text-iob-blue-accent transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <IOBLogo showText={true} />
              <div className="border-l border-slate-200 pl-3 ml-1 hidden sm:block">
                <p className="text-iob-slate/50 text-[10px] font-bold uppercase tracking-wider">Customer 360 Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-700 text-[10px] font-bold">LIVE CORE SYNC</span>
              </div>
              <span className="text-iob-slate/50 text-[10px] font-bold">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-100 pl-0 sm:pl-[240px] md:pl-[290px] transition-all">
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-3 px-2 text-xs font-bold border-b-2 tracking-wider uppercase transition-all ${
                activeTab === 'profile'
                  ? 'border-iob-blue-accent text-iob-blue-accent'
                  : 'border-transparent text-iob-slate/60 hover:text-iob-slate hover:border-gray-200'
              }`}
            >
              Customer Profile
            </button>
            <button
              onClick={() => setActiveTab('offers')}
              className={`pb-3 px-2 text-xs font-bold border-b-2 tracking-wider uppercase transition-all ${
                activeTab === 'offers'
                  ? 'border-iob-blue-accent text-iob-blue-accent'
                  : 'border-transparent text-iob-slate/60 hover:text-iob-slate hover:border-gray-200'
              }`}
            >
              Offers & Products
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`pb-3 px-2 text-xs font-bold border-b-2 tracking-wider uppercase transition-all ${
                activeTab === 'insights'
                  ? 'border-iob-blue-accent text-iob-blue-accent'
                  : 'border-transparent text-iob-slate/60 hover:text-iob-slate hover:border-gray-200'
              }`}
            >
              Diagnostics & Triggers
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-8 py-6 bg-[#FAF9F6]">
          {/* Customer Profile Tab */}
          {activeTab === 'profile' && (
            <div className="animate-fadeIn max-w-6xl mx-auto">
              {/* Header card: converted from dark to a premium light golden-cream card with slate text */}
              <div className="bg-gradient-to-r from-iob-blue-light via-[#F2F7FF] to-white border-2 border-iob-blue-border rounded-xl shadow-sm p-5 mb-6 text-iob-slate relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-iob-blue/5 to-transparent animate-shimmer"></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-iob-blue/15 border border-iob-blue-border rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-iob-blue-accent" />
                    </div>
                    <div>
                      <h1 className="text-xl font-black text-iob-slate tracking-tight">{mockCustomer.name}</h1>
                      <p className="text-iob-slate/70 text-xs">CIF: {customerExtended.kyc.cif} • {mockCustomer.segment}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-iob-slate font-black text-xs sm:text-sm mb-1.5">Customer since: {mockCustomer.since} • <span className="text-iob-blue-accent font-extrabold">3.5 Years</span></p>
                    <div className="inline-flex items-center gap-1.5 bg-iob-blue/20 text-iob-blue-accent px-3 py-1 rounded-full font-bold text-xs border border-iob-blue-border">
                      <Award className="w-3.5 h-3.5" />
                      {mockCustomer.tier} Tier
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6 relative z-10">
                  <div className="bg-white/80 border border-iob-blue-border/60 rounded-xl p-3.5 card-hover transform transition-all duration-300 hover:scale-102 shadow-xs">
                    <p className="text-iob-slate/50 text-[10px] font-bold uppercase mb-1">Primary Bank Index</p>
                    <p className="text-xl font-extrabold text-iob-slate">{primaryBankIndex}%</p>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                      <div className="bg-iob-blue h-1.5 rounded-full transition-all duration-500" style={{ width: `${primaryBankIndex}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-white/80 border border-iob-blue-border/60 rounded-xl p-3.5 card-hover transform transition-all duration-300 hover:scale-102 shadow-xs">
                    <p className="text-iob-slate/50 text-[10px] font-bold uppercase mb-1">Monthly Avg Balance</p>
                    <p className="text-xl font-extrabold text-iob-slate">₹3.8L</p>
                    <p className="text-[10px] text-iob-slate/60 mt-1 font-semibold">As of May 26</p>
                  </div>
                  <div className="bg-white/80 border border-iob-blue-border/60 rounded-xl p-3.5 card-hover transform transition-all duration-300 hover:scale-102 shadow-xs">
                    <p className="text-iob-slate/50 text-[10px] font-bold uppercase mb-1">TRV (CASA+TD+Assets)</p>
                    <p className="text-xl font-extrabold text-iob-slate">₹21.7L</p>
                    <p className="text-[10px] text-iob-slate/60 mt-1 font-semibold">CASA + TD + Assets</p>
                  </div>
                  <div className="bg-white/80 border border-iob-blue-border/60 rounded-xl p-3.5 card-hover transform transition-all duration-300 hover:scale-102 shadow-xs">
                    <p className="text-iob-slate/50 text-[10px] font-bold uppercase mb-1">Digital Index</p>
                    <p className="text-xl font-extrabold text-iob-slate">{digitalTransactions}%</p>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                      <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${digitalTransactions}%` }}></div>
                    </div>
                  </div>
                  <div className="bg-white/80 border border-iob-blue-border/60 rounded-xl p-3.5 card-hover transform transition-all duration-300 hover:scale-102 shadow-xs">
                    <div className="flex justify-between items-start">
                      <p className="text-iob-slate/50 text-[10px] font-bold uppercase mb-1">Credit Score</p>
                      <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded text-[8px] font-bold border border-emerald-200 leading-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        EXCELLENT
                      </div>
                    </div>
                    <p className="text-xl font-extrabold text-iob-slate">{mockCustomer.creditScore}</p>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                      <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${(mockCustomer.creditScore / 900) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-6 animate-slideInLeft items-stretch">
                {/* Column 1 - Customer Profile & RM Details */}
                <div className="bg-white rounded-2xl shadow-sm p-5 card-hover border border-iob-blue-border/50 flex flex-col h-full animate-slideInLeft justify-between">
                  <div>
                    {/* Card Header (Icon next to title only) */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-iob-blue/10 rounded-full flex items-center justify-center text-iob-blue-accent flex-shrink-0">
                        <User className="w-5.5 h-5.5" />
                      </div>
                      <h2 className="text-lg font-extrabold text-iob-slate">Customer Profile</h2>
                    </div>

                    {/* Profile Details (shifted left, no longer nested inside header's flex child) */}
                    <div className="space-y-2.5 text-xs">
                      <div className="grid grid-cols-[120px_1fr] gap-2 items-center py-2.5 border-b border-slate-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <User className="w-3.5 h-3.5 text-iob-blue-accent flex-shrink-0" />
                          Persona
                        </span>
                        <span className="font-semibold text-iob-slate text-right">{mockCustomer.segment}</span>
                      </div>
                      
                      <div className="grid grid-cols-[120px_1fr] gap-2 items-center py-2.5 border-b border-slate-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <Award className="w-3.5 h-3.5 text-iob-blue-accent flex-shrink-0" />
                          Savings Tier
                        </span>
                        <span className="font-semibold text-iob-blue-accent text-right">{mockCustomer.tier}</span>
                      </div>

                      <div className="grid grid-cols-[120px_1fr] gap-2 items-center py-2.5 border-b border-slate-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <Calendar className="w-3.5 h-3.5 text-iob-blue-accent flex-shrink-0" />
                          Age & Gender
                        </span>
                        <span className="font-semibold text-iob-slate text-right">{customerExtended.demographics.age} • {customerExtended.demographics.gender}</span>
                      </div>

                      <div className="grid grid-cols-[120px_1fr] gap-2 items-center py-2.5 border-b border-slate-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <Briefcase className="w-3.5 h-3.5 text-iob-blue-accent flex-shrink-0" />
                          Occupation
                        </span>
                        <span className="font-semibold text-iob-slate text-right leading-tight" title={customerExtended.demographics.occupation}>
                          {customerExtended.demographics.occupation}
                        </span>
                      </div>

                      <div className="grid grid-cols-[120px_1fr] gap-2 items-center py-2.5 border-b border-slate-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <Heart className="w-3.5 h-3.5 text-iob-blue-accent flex-shrink-0" />
                          Marital Status
                        </span>
                        <span className="font-semibold text-iob-slate text-right">{customerExtended.demographics.maritalStatus}</span>
                      </div>

                      <div className="grid grid-cols-[120px_1fr] gap-2 items-center py-2.5 border-b border-slate-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <MapPin className="w-3.5 h-3.5 text-iob-blue-accent flex-shrink-0" />
                          Geography
                        </span>
                        <span className="font-semibold text-iob-slate text-right leading-tight" title={customerExtended.demographics.geography}>
                          {customerExtended.demographics.geography}
                        </span>
                      </div>

                      <div className="grid grid-cols-[120px_1fr] gap-2 items-center py-2.5 border-b border-slate-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <TrendingUp className="w-3.5 h-3.5 text-iob-blue-accent flex-shrink-0" />
                          Lending Share
                        </span>
                        <span className="font-semibold text-iob-slate text-right">{customerExtended.demographics.walletShare}</span>
                      </div>

                      <div className="grid grid-cols-[120px_1fr] gap-2 items-center py-2.5">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <Shield className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          Risk Rating
                        </span>
                        <span className="font-semibold text-emerald-600 text-right">{customerExtended.riskProfile.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* RM & Branch Details */}
                  <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
                    <h3 className="font-bold text-iob-slate/80 text-xs uppercase tracking-wider mb-3">RM & Branch Details</h3>
                    <div className="space-y-2 text-xs">
                      <div className="grid grid-cols-[120px_1fr] gap-2 items-start py-1.5 border-b border-dashed border-gray-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <Phone className="w-3.5 h-3.5 text-iob-slate/40 flex-shrink-0" />
                          Phone:
                        </span>
                        <span className="font-semibold text-iob-slate text-right">{mockCustomer.phone}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] gap-2 items-start py-1.5 border-b border-dashed border-gray-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <Mail className="w-3.5 h-3.5 text-iob-slate/40 flex-shrink-0" />
                          Email:
                        </span>
                        <span className="font-semibold text-iob-slate text-right break-all">{mockCustomer.email}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] gap-2 items-start py-1.5 border-b border-dashed border-gray-100">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <Landmark className="w-3.5 h-3.5 text-iob-blue-accent flex-shrink-0" />
                          Branch:
                        </span>
                        <span className="font-semibold text-iob-slate text-right">{customerExtended.branch}</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] gap-2 items-start py-1.5">
                        <span className="text-iob-slate/60 font-semibold flex items-center gap-2 flex-shrink-0">
                          <Users className="w-3.5 h-3.5 text-iob-blue-accent flex-shrink-0" />
                          Managed By:
                        </span>
                        <span className="font-semibold text-iob-slate text-right leading-tight">
                          RM {customerExtended.managedBy.name} ({customerExtended.managedBy.phone})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Balance Growth & AAB + Product Stack */}
                <div className="flex flex-col gap-6 w-full h-full animate-slideInLeft">
                  {/* Balance Growth & AAB Card */}
                  <div className="bg-white rounded-2xl shadow-sm p-5 border border-iob-blue-border/50 card-hover">
                    <h3 className="font-extrabold text-iob-slate mb-3 text-xs uppercase tracking-wider">Balance Growth & AAB</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-br from-iob-blue-light/50 to-white/20 border border-iob-blue-border rounded-lg p-2.5">
                        <p className="text-[10px] font-bold text-iob-blue-accent mb-1">YTD Growth</p>
                        <p className="text-xl font-extrabold text-iob-slate">{customerExtended.relationshipMetrics.balanceGrowth.ytd}</p>
                        <p className="text-[9px] text-iob-slate/60">Savings Balance</p>
                      </div>
                      <div className="bg-gradient-to-br from-slate-50 to-[#FAF9F6] border border-slate-200 rounded-lg p-2.5">
                        <p className="text-[10px] font-bold text-iob-slate/80 mb-1">MTD Growth</p>
                        <p className="text-xl font-extrabold text-iob-slate">{customerExtended.relationshipMetrics.balanceGrowth.mtd}</p>
                        <p className="text-[9px] text-iob-slate/60">Current Month</p>
                      </div>
                      <div className="bg-gradient-to-br from-iob-blue-light/30 to-slate-50 border border-iob-blue-border rounded-lg p-2.5">
                        <p className="text-[10px] font-bold text-iob-blue-accent mb-1">AAB (Annual)</p>
                        <p className="text-xl font-extrabold text-iob-slate">{customerExtended.relationshipMetrics.balanceGrowth.aab}</p>
                        <p className="text-[9px] text-iob-slate/60">Avg Balance</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Stack Card */}
                  <div className="bg-white rounded-2xl shadow-sm p-5 border border-iob-blue-border/50 card-hover flex flex-col flex-1">
                    <h3 className="font-extrabold text-iob-slate mb-3 text-xs uppercase tracking-wider">Product Stack</h3>
                    <div className="space-y-3 mt-1">
                      <div className="flex items-center gap-2.5 p-2.5 bg-gradient-to-r from-iob-blue-light/50 to-white rounded-lg border border-iob-blue-border/60">
                        <div className="w-8 h-8 bg-iob-blue/15 border border-iob-blue-border rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-iob-blue-accent font-extrabold text-xs">SA</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-iob-slate text-xs">Savings Account (Royal Privilege)</p>
                          <p className="text-[10px] text-iob-slate/70 truncate">3-in-1: Savings + Demat + Trading</p>
                        </div>
                        <span className="font-bold text-iob-slate text-xs flex-shrink-0">₹3,80,000</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 bg-gradient-to-r from-iob-blue-light/50 to-white rounded-lg border border-iob-blue-border/60">
                        <div className="w-8 h-8 bg-iob-blue/15 border border-iob-blue-border rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-iob-blue-accent font-extrabold text-xs">FD</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-iob-slate text-xs">Term Deposit (FD - Renewal Due)</p>
                          <p className="text-[10px] text-iob-slate/70 truncate">A/C: XXXX98012 • 9.0% p.a. • Matures in 15 days</p>
                        </div>
                        <span className="px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded-full text-[9px] font-bold flex-shrink-0">15D RENEW</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 bg-gradient-to-r from-iob-blue-light/70 to-white rounded-lg border border-iob-blue-border/80">
                        <div className="w-8 h-8 bg-iob-blue/20 border border-iob-blue-border rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-iob-blue-accent font-extrabold text-xs">CC</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-iob-slate text-xs">RuPay Select Credit Card</p>
                          <p className="text-[10px] text-iob-slate/70 truncate">Limit: ₹1,50,000 • Outstanding: ₹18,000</p>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[9px] font-bold flex-shrink-0">ACTIVE</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 bg-gradient-to-r from-slate-50 to-white rounded-lg border border-slate-200">
                        <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-iob-slate font-extrabold text-xs">INS</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-iob-slate text-xs">Insurance Portfolio</p>
                          <p className="text-[10px] text-iob-slate/70 truncate">Term Life (₹1.5 Cr Cover) & Health Insurance (₹15L)</p>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[9px] font-bold flex-shrink-0">ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3 - Engagement Momentum + Active Credit Card */}
                <div className="flex flex-col gap-6 w-full h-full animate-slideInLeft">
                  {/* Engagement Momentum Card */}
                  <div className="bg-white rounded-2xl shadow-sm p-5 border border-iob-blue-border/50 card-hover">
                    <h2 className="text-base font-extrabold text-iob-slate mb-3 uppercase tracking-wider">Engagement Momentum</h2>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
                        <span className="text-[10px] font-bold text-emerald-950 block mb-1.5 leading-tight">Digital<br/>Transactions</span>
                        <div className="w-full bg-emerald-200 rounded-full h-1 mt-1 mb-1.5">
                          <div className="bg-emerald-600 h-1 rounded-full transition-all duration-500" style={{ width: `${digitalTransactions}%` }}></div>
                        </div>
                        <span className="text-sm font-extrabold text-emerald-700">{digitalTransactions}%</span>
                      </div>

                      <div className="bg-iob-blue-light border border-iob-blue-border rounded-lg p-2.5">
                        <span className="text-[10px] font-bold text-iob-slate block mb-1.5 leading-tight">PPC<br/>Ratio</span>
                        <div className="w-full bg-iob-blue-border rounded-full h-1 mt-1 mb-1.5">
                          <div className="bg-iob-blue-accent h-1 rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
                        </div>
                        <span className="text-sm font-extrabold text-iob-blue-accent">3.0</span>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
                        <span className="text-[10px] font-bold text-iob-slate block mb-1.5 leading-tight">Branch<br/>Visits</span>
                        <div className="w-full bg-slate-200 rounded-full h-1 mt-1 mb-1.5">
                          <div className="bg-iob-slate-light h-1 rounded-full transition-all duration-500" style={{ width: '10%' }}></div>
                        </div>
                        <span className="text-sm font-extrabold text-iob-slate">Low</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Credit Card Card */}
                  <div className="bg-white rounded-2xl shadow-sm p-5 border border-iob-blue-border/50 card-hover flex flex-col flex-1">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-extrabold text-iob-slate text-xs uppercase tracking-wider">Active Credit Card</h3>
                        <span className="text-[10px] text-iob-slate/50 font-bold uppercase tracking-wider">RuPay Select Credit</span>
                      </div>
                      
                      {/* Visual Card Mockup */}
                      <div className="w-full aspect-[1.586/1] rounded-xl bg-gradient-to-br from-[#133D82] via-[#3C4C63] to-[#1C2532] text-white p-4 flex flex-col justify-between shadow-md relative overflow-hidden border border-slate-700/50">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#2B7FFF]/15 to-transparent rounded-full -mr-8 -mt-8 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-radial from-[#2B7FFF]/10 to-transparent rounded-full -ml-8 -mb-8 pointer-events-none"></div>
                        
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[9px] font-black tracking-wider text-[#F2F7FF] uppercase leading-none">Indian Overseas Bank</p>
                            <p className="text-[6px] text-white/70 tracking-widest uppercase leading-none mt-1">RuPay Select Credit</p>
                          </div>
                          <div className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded text-[8px] font-bold border border-white/10 text-[#F2F7FF]">
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
                            <p className="text-[10px] font-bold tracking-wide uppercase text-white/90">Astha Singh</p>
                          </div>
                          <div className="text-right">
                            <span className="text-[9px] font-black italic tracking-wide text-white/90">RuPay</span>
                            <span className="block text-[5.5px] font-bold tracking-wider uppercase text-[#F2F7FF] -mt-1">SELECT CREDIT</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Controls & Limits */}
                    <div className="border-t border-gray-100 pt-4 mt-4 space-y-4">
                      <div>
                        <h4 className="text-[10px] font-bold text-iob-slate/50 uppercase tracking-wider mb-2">Card Limit & Spends</h4>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between">
                            <span className="text-iob-slate/60">Total Limit</span>
                            <span className="font-bold text-iob-slate">₹1,50,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-iob-slate/60">Utilized Limit</span>
                            <span className="font-bold text-iob-slate">₹18,000</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1">
                            <div className="bg-iob-blue-accent h-1.5 rounded-full" style={{ width: '12%' }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100/70 pt-3">
                        <h4 className="text-[10px] font-bold text-iob-blue-accent uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          RuPay Select Card Privileges
                        </h4>
                        <ul className="space-y-1.5 text-[10px] text-iob-slate/80 font-medium">
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-iob-blue-accent"></span>
                            5x Reward Points on Lifestyle & Dining
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-iob-blue-accent"></span>
                            2 Complimentary Airport Lounge Visits/Quarter
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-iob-blue-accent"></span>
                            25% Discount on Locker rentals
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-iob-blue-accent"></span>
                            Complimentary Personal Accident Cover
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Financial Overview & Credit Portfolio */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-iob-blue-border/50 card-hover">
                  <h2 className="text-base font-extrabold text-iob-slate mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <CreditCard className="w-5 h-5 text-iob-blue-accent" />
                    Credit Portfolio
                  </h2>
                  
                  <div className="space-y-3">
                    {mockCreditProducts.map((product, idx) => (
                      <div key={idx} className="border border-iob-blue-border/40 rounded-lg p-3 bg-[#F2F7FF]/40">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-iob-blue-accent" />
                            <h3 className="font-bold text-iob-slate text-xs">{product.type}</h3>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${
                            product.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                            product.status === 'closed' ? 'bg-slate-50 text-slate-600 border-slate-200' :
                            'bg-iob-blue-light text-iob-blue-accent border-iob-blue-border'
                          }`}>
                            {product.status.toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-[10px] text-iob-slate/85">
                          <div>
                            <p className="text-iob-slate/50 font-semibold uppercase">Outstanding</p>
                            <p className="font-bold text-iob-slate">
                              {product.outstanding > 0 ? `₹${(product.outstanding / 100000).toFixed(1)}L` : '₹0'}
                            </p>
                          </div>
                          <div>
                            <p className="text-iob-slate/50 font-semibold uppercase">Monthly EMI</p>
                            <p className="font-bold text-iob-slate">
                              {product.emi > 0 ? `₹${product.emi.toLocaleString()}` : 'N/A'}
                            </p>
                          </div>
                          <div>
                            <p className="text-iob-slate/50 font-semibold uppercase">Tenure</p>
                            <p className="font-bold text-iob-slate">{product.tenure}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {showOffers && (
                    <div className="mt-4 space-y-3 animate-fadeIn">
                      <div className="bg-gradient-to-r from-iob-blue-light/50 to-white border-2 border-iob-blue-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-iob-slate text-xs">RuPay Select Credit Card Upgrade</h4>
                          <span className="px-2 py-0.5 bg-iob-blue text-[#F2F7FF] rounded-full text-[9px] font-bold">PRE-APPROVED</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs text-iob-slate/85">
                          <div>
                            <p className="text-iob-slate/50">Pre-Approved Limit</p>
                            <p className="font-bold text-iob-slate">₹2,50,000</p>
                          </div>
                          <div>
                            <p className="text-iob-slate/50">Card Tier</p>
                            <p className="font-bold text-iob-slate">RuPay Select</p>
                          </div>
                          <div>
                            <p className="text-iob-slate/50">Annual Fees</p>
                            <p className="font-bold text-iob-slate">Lifetime Free (NIL)</p>
                          </div>
                          <div>
                            <p className="text-iob-slate/50">Lead ID</p>
                            <p className="font-bold text-iob-slate">CC98024</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-300 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-iob-slate text-xs">Locker Rental Privilege</h4>
                          <span className="px-2 py-0.5 bg-slate-200 text-iob-slate rounded-full text-[9px] font-bold">ELIGIBLE</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs text-iob-slate/85">
                          <div>
                            <p className="text-iob-slate/50">Locker Size</p>
                            <p className="font-bold text-iob-slate">Medium Locker</p>
                          </div>
                          <div>
                            <p className="text-iob-slate/50">Special Discount</p>
                            <p className="font-bold text-emerald-600">25% Rental Off</p>
                          </div>
                          <div>
                            <p className="text-iob-slate/50">Validity</p>
                            <p className="font-bold text-iob-slate">Royal Privilege Benefit</p>
                          </div>
                          <div>
                            <p className="text-iob-slate/50">Allotment Branch</p>
                            <p className="font-bold text-iob-slate">{customerExtended.branch}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={handleViewOffers}
                    className="w-full mt-4 bg-gradient-to-r from-iob-blue to-iob-blue-accent hover:from-iob-blue-accent hover:to-iob-blue text-[#F2F7FF] font-bold py-2.5 rounded-lg transition-all duration-300 cursor-pointer shadow-xs text-xs uppercase tracking-wider"
                  >
                    {showOffers ? 'Hide Pre-Approved Offers' : 'View Pre-Approved Offers'}
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-5 border border-iob-blue-border/50 card-hover">
                  <h2 className="text-base font-extrabold text-iob-slate mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <TrendingUp className="w-5 h-5 text-iob-blue-accent" />
                    Relationship Diagnostics & Triggers
                  </h2>
                  
                  <p className="text-[10px] font-bold text-iob-slate/50 mb-4 uppercase tracking-wider">
                    REAL-TIME ENGAGEMENT STREAM
                  </p>

                  <div className="space-y-3">
                    {mockTriggers.map((trigger) => (
                      <div key={trigger.id} className={`border-l-4 rounded-r-lg p-3.5 ${
                        trigger.urgency === 'high' ? 'border-iob-blue bg-iob-blue/20' :
                        trigger.urgency === 'medium' ? 'border-iob-blue-accent bg-iob-blue-light/20' :
                        'border-slate-500 bg-slate-50'
                      }`}>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-iob-slate text-xs">{trigger.name}</h3>
                          <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${
                            trigger.urgency === 'high' ? 'bg-iob-blue-accent text-white' :
                            trigger.urgency === 'medium' ? 'bg-iob-blue-light text-iob-blue-accent' :
                            'bg-slate-200 text-slate-700'
                          }`}>
                            {trigger.type.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-[11px] text-iob-slate/80 leading-relaxed">{trigger.description}</p>
                        <p className="text-[9px] text-iob-slate/50 font-bold mt-2">
                          {trigger.timestamp.toLocaleDateString()} • {trigger.urgency.toUpperCase()} URGENCY
                        </p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={handleBuildOffer}
                    className="w-full mt-4 bg-gradient-to-r from-iob-slate to-iob-slate-light text-white font-bold py-2.5 rounded-lg transition-all duration-300 cursor-pointer shadow-xs text-xs uppercase tracking-wider animate-pulse-slow"
                  >
                    Start Personal Loan Journey
                  </button>
                </div>
              </div>

              {/* KYC, Interaction, Preferences Grid */}
              <div className="grid lg:grid-cols-3 gap-6 mb-6 mt-6">
                {/* KYC & Validation */}
                <div className="bg-white rounded-2xl shadow-sm p-5 card-hover border border-iob-blue-border/50">
                  <h2 className="text-xs font-bold text-iob-slate/80 mb-4 flex items-center gap-2 uppercase tracking-widest border-b border-gray-100 pb-2">
                    <FileText className="w-4 h-4 text-iob-blue-accent" />
                    KYC & Validation
                  </h2>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-iob-slate/60 font-semibold">KYC Status</span>
                      <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-bold">
                        {customerExtended.kyc.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-iob-slate/60 font-semibold">CIF Number</span>
                      <span className="font-bold text-iob-slate">{customerExtended.kyc.cif}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-iob-slate/60 font-semibold">Last Updated</span>
                      <span className="font-bold text-iob-slate">{customerExtended.kyc.lastUpdated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-iob-slate/60 font-semibold">Risk Category</span>
                      <span className="font-bold text-emerald-600">{customerExtended.riskProfile.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-iob-slate/60 font-semibold">Payment History</span>
                      <span className="font-bold text-iob-slate">{customerExtended.riskProfile.paymentHistory}</span>
                    </div>
                  </div>
                </div>

                {/* Interaction History */}
                <div className="bg-white rounded-2xl shadow-sm p-5 card-hover border border-iob-blue-border/50">
                  <h2 className="text-xs font-bold text-iob-slate/80 mb-4 flex items-center gap-2 uppercase tracking-widest border-b border-gray-100 pb-2">
                    <MessageSquare className="w-4 h-4 text-iob-blue-accent" />
                    Interaction History
                  </h2>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 p-2 bg-iob-blue-light/30 rounded-lg border border-iob-blue-border/30">
                      <Phone className="w-4 h-4 text-iob-blue-accent" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-iob-slate uppercase">Customer Support Calls</p>
                        <p className="text-[9px] text-iob-slate/70">{customerExtended.interactions.ccCalls} total • Last: {customerExtended.interactions.lastCall}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded-lg border border-slate-200/50">
                      <Mail className="w-4 h-4 text-iob-slate/60" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-iob-slate uppercase">Email Desk</p>
                        <p className="text-[9px] text-iob-slate/70">{customerExtended.interactions.emails} emails sent</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 bg-iob-blue-light/30 rounded-lg border border-iob-blue-border/30">
                      <MessageSquare className="w-4 h-4 text-iob-blue-accent" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-iob-slate uppercase">WhatsApp & Chatbot</p>
                        <p className="text-[9px] text-iob-slate/70">{customerExtended.interactions.chats} interactive sessions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 bg-slate-50 rounded-lg border border-slate-200/50">
                      <Clock className="w-4 h-4 text-iob-slate/60" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-iob-slate uppercase">Portal Sessions</p>
                        <p className="text-[9px] text-iob-slate/70">{customerExtended.interactions.lastAppLogin} • {customerExtended.interactions.appUsageFrequency}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preferences & Behavior */}
                <div className="bg-white rounded-2xl shadow-sm p-5 card-hover border border-iob-blue-border/50">
                  <h2 className="text-xs font-bold text-iob-slate/80 mb-4 flex items-center gap-2 uppercase tracking-widest border-b border-gray-100 pb-2">
                    <Globe className="w-4 h-4 text-iob-blue-accent" />
                    Preferences & Behavior
                  </h2>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-iob-slate/60 font-semibold">Preferred Channel</span>
                      <span className="font-bold text-iob-blue-accent">{customerExtended.preferences.contactChannel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-iob-slate/60 font-semibold">Contact Time</span>
                      <span className="font-bold text-iob-slate">{customerExtended.preferences.contactTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-iob-slate/60 font-semibold">Preferred Language</span>
                      <span className="font-bold text-iob-slate">{customerExtended.preferences.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-iob-slate/60 font-semibold">Customer Persona</span>
                      <span className="font-bold text-iob-slate-light">{customerExtended.persona}</span>
                    </div>
                  </div>
                </div>
              </div>



              {/* Analytics & Insights Charts */}
              <div className="grid lg:grid-cols-2 gap-6 mt-6">
                {/* Outflow Chart */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-iob-blue-border/50 card-hover">
                  <h3 className="text-base font-extrabold text-iob-slate mb-4 uppercase tracking-wider flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-iob-blue-accent" />
                    Transaction Behavior (Spend Analyzer)
                  </h3>
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={spendingCategories}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={70}
                          paddingAngle={3}
                          dataKey="percentage"
                          labelLine={false}
                          label={({ cx, cy, midAngle, outerRadius, value }) => {
                            const RADIAN = Math.PI / 180;
                            const xCenter = cx || 0;
                            const yCenter = cy || 0;
                            const angle = midAngle || 0;
                            const r = (outerRadius || 70) + 12;
                            const lx = xCenter + r * Math.cos(-angle * RADIAN);
                            const ly = yCenter + r * Math.sin(-angle * RADIAN);
                            return (
                              <text
                                x={lx}
                                y={ly}
                                fill="#133D82"
                                textAnchor={lx > xCenter ? "start" : "end"}
                                dominantBaseline="central"
                                className="text-[10px] font-bold"
                              >
                                {value}%
                              </text>
                            );
                          }}
                        >
                          {spendingCategories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Share']}
                          contentStyle={{ background: '#133D82', border: 'none', borderRadius: '8px', fontSize: '12px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                    {spendingCategories.map((entry, index) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }}></span>
                        <span className="text-iob-slate/70 truncate">{entry.name}</span>
                        <span className="font-bold text-iob-slate ml-auto">{entry.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Balance & Inflow History */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-iob-blue-border/50 card-hover">
                  <h3 className="text-base font-extrabold text-iob-slate mb-4 uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-iob-blue-accent" />
                    Customer Balance & Inflow History
                  </h3>
                  <p className="text-[10px] text-iob-slate/50 font-bold uppercase tracking-wider mb-2">Monthly Inflows vs Average Account Balance (₹)</p>
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
                            <stop offset="5%" stopColor="#133D82" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#133D82" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorInflow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2B7FFF" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#2B7FFF" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="month" stroke="#133D82" fontSize={10} fontWeight="bold" />
                        <YAxis 
                          stroke="#133D82" 
                          fontSize={10} 
                          fontWeight="bold" 
                          tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                          width={55}
                        />
                        <Tooltip 
                          formatter={(value, name) => [`₹${(Number(value) / 100000).toFixed(1)}L`, name]}
                          contentStyle={{ background: '#09214D', border: 'none', borderRadius: '8px', fontSize: '12px' }} 
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 'bold' }} />
                        <Area type="monotone" dataKey="Balance" stroke="#133D82" strokeWidth={2} fillOpacity={1} fill="url(#colorBalance)" name="Avg Balance" />
                        <Area type="monotone" dataKey="Inflow" stroke="#2B7FFF" strokeWidth={2} fillOpacity={1} fill="url(#colorInflow)" name="Monthly Inflows" />
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
                  <h2 className="text-lg font-black text-iob-slate uppercase tracking-wider">Limits, Offers & RM Workbench</h2>
                  <p className="text-xs text-iob-slate/60 font-semibold mt-0.5">Customize relationship value and simulate cross-sell impacts</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Two Columns: Offer Cards */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* RuPay Select Credit Card Upgrade */}
                    <div className="bg-gradient-to-br from-iob-blue-light/40 via-[#F2F7FF] to-white border-2 border-iob-blue-border rounded-xl p-5 shadow-sm card-hover">
                      <div className="flex items-center justify-between mb-3 border-b border-iob-blue-border/50 pb-2">
                        <h3 className="text-base font-extrabold text-iob-slate">Premium Card Upgrade</h3>
                        <span className="px-2.5 py-0.5 bg-iob-blue text-[#F2F7FF] rounded-full text-[10px] font-bold">PRE-APPROVED</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-iob-slate/85">
                        <div>
                          <p className="text-iob-slate/50 font-semibold uppercase">Pre-Approved Limit</p>
                          <p className="text-lg font-black text-iob-slate">₹2,50,000</p>
                        </div>
                        <div>
                          <p className="text-iob-slate/50 font-semibold uppercase">Card Tier</p>
                          <p className="text-lg font-black text-iob-blue-accent">RuPay Select</p>
                        </div>
                        <div>
                          <p className="text-iob-slate/50 font-semibold uppercase">Annual Fee</p>
                          <p className="text-sm font-bold text-iob-slate">NIL (Lifetime Free)</p>
                        </div>
                        <div>
                          <p className="text-iob-slate/50 font-semibold uppercase">Lead ID</p>
                          <p className="text-sm font-bold text-iob-slate">CC98024</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => navigate('/mobile')}
                        className="w-full bg-iob-slate hover:bg-iob-slate-light text-white py-2.5 rounded-lg font-bold transition-all text-xs uppercase tracking-wider cursor-pointer"
                      >
                        Initiate Application →
                      </button>
                    </div>

                    {/* Locker Rental Privilege */}
                    <div className="bg-white border-2 border-iob-blue-border/40 rounded-xl p-5 shadow-sm card-hover">
                      <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                        <h3 className="text-base font-extrabold text-iob-slate">Locker Rental Privilege</h3>
                        <span className="px-2.5 py-0.5 bg-slate-100 text-iob-slate border border-slate-200 rounded-full text-[10px] font-bold">ELIGIBLE</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-iob-slate/85">
                        <div>
                          <p className="text-iob-slate/50 font-semibold uppercase">Locker Size</p>
                          <p className="text-lg font-black text-iob-slate">Medium Locker</p>
                        </div>
                        <div>
                          <p className="text-iob-slate/50 font-semibold uppercase">Special Discount</p>
                          <p className="text-lg font-black text-emerald-600">25% Off</p>
                        </div>
                        <div>
                          <p className="text-iob-slate/50 font-semibold uppercase">Validity</p>
                          <p className="text-sm font-bold text-iob-slate">Royal Privilege</p>
                        </div>
                        <div>
                          <p className="text-iob-slate/50 font-semibold uppercase">Allocation Branch</p>
                          <p className="text-sm font-bold text-iob-slate">{customerExtended.branch}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          alert(`Eligibility Confirmed: Special 25% discount on Locker rental allocated under Royal Privilege Savings Account at ${customerExtended.branch} for Astha Singh.`);
                        }}
                        className="w-full bg-white border border-iob-blue text-iob-blue-accent hover:bg-iob-blue-light/20 py-2.5 rounded-lg font-bold transition-all text-xs uppercase tracking-wider cursor-pointer"
                      >
                        Check Eligibility Limit →
                      </button>
                    </div>
                  </div>

                  {/* Active Products Holdings */}
                  <div className="bg-white border border-iob-blue-border/30 rounded-xl p-5 shadow-sm">
                    <h3 className="text-xs font-bold text-iob-slate/50 uppercase tracking-wider mb-3">Customer Holding Distribution</h3>
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200/50 rounded-lg text-xs">
                        <div>
                          <p className="font-bold text-iob-slate">Savings Account (Royal Privilege)</p>
                          <p className="text-[10px] text-iob-slate/60">A/C: XXXX321456 • 3-in-1 Demat & Trading Linked</p>
                        </div>
                        <span className="font-semibold text-iob-slate">₹3,80,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200/50 rounded-lg text-xs">
                        <div>
                          <p className="font-bold text-iob-slate">High-Yield Term Deposit (FD)</p>
                          <p className="text-[10px] text-iob-slate/60">A/C: XXXX98012 • 9.0% p.a. yield (Matures in 15 days)</p>
                        </div>
                        <span className="font-extrabold text-iob-slate">₹12,50,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: RM Optimizer Workbench */}
                <div className="bg-gradient-to-br from-iob-blue-light/30 via-[#F2F7FF] to-white border-2 border-iob-blue-border rounded-2xl p-5 shadow-sm card-hover">
                  <h3 className="text-xs font-extrabold text-iob-slate uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-iob-blue-accent" />
                    Royal Relationship Optimizer
                  </h3>
                  <p className="text-[10px] text-iob-slate/60 leading-relaxed mb-4">
                    Select additional relationship enhancers to calculate projected Primary Bank Index and Relationship Value (TRV).
                  </p>

                  {/* Checkbox inputs */}
                  <div className="space-y-3 mb-5">
                    <label className="flex items-start gap-2.5 p-2 bg-white border border-iob-blue-border/60 rounded-lg cursor-pointer hover:bg-[#F2F7FF] transition-colors text-xs text-iob-slate">
                      <input 
                        type="checkbox" 
                        checked={termDepositOpt}
                        onChange={() => setTermDepositOpt(!termDepositOpt)}
                        className="mt-0.5 rounded border-iob-blue text-iob-blue-accent focus:ring-iob-blue"
                      />
                      <div>
                        <p className="font-bold leading-tight">Add ₹10L Term Deposit</p>
                        <p className="text-[9px] text-iob-slate/50 mt-0.5">Increases asset pool by ₹10 Lakhs</p>
                      </div>
                    </label>

                    <label className="flex items-start gap-2.5 p-2 bg-white border border-iob-blue-border/60 rounded-lg cursor-pointer hover:bg-[#F2F7FF] transition-colors text-xs text-iob-slate">
                      <input 
                        type="checkbox" 
                        checked={lockerOpt}
                        onChange={() => setLockerOpt(!lockerOpt)}
                        className="mt-0.5 rounded border-iob-blue text-iob-blue-accent focus:ring-iob-blue"
                      />
                      <div>
                        <p className="font-bold leading-tight">Book Locker Facility</p>
                        <p className="text-[9px] text-iob-slate/50 mt-0.5">Medium locker with 25% Royal Privilege discount</p>
                      </div>
                    </label>

                    <label className="flex items-start gap-2.5 p-2 bg-white border border-iob-blue-border/60 rounded-lg cursor-pointer hover:bg-[#F2F7FF] transition-colors text-xs text-iob-slate">
                      <input 
                        type="checkbox" 
                        checked={dematOpt}
                        onChange={() => setDematOpt(!dematOpt)}
                        className="mt-0.5 rounded border-iob-blue text-iob-blue-accent focus:ring-iob-blue"
                      />
                      <div>
                        <p className="font-bold leading-tight">Activate Demat & Trading</p>
                        <p className="text-[9px] text-iob-slate/50 mt-0.5">Completes the 3-in-1 retail account stack</p>
                      </div>
                    </label>

                    <label className="flex items-start gap-2.5 p-2 bg-white border border-iob-blue-border/60 rounded-lg cursor-pointer hover:bg-[#F2F7FF] transition-colors text-xs text-iob-slate">
                      <input 
                        type="checkbox" 
                        checked={insuranceOpt}
                        onChange={() => setInsuranceOpt(!insuranceOpt)}
                        className="mt-0.5 rounded border-iob-blue text-iob-blue-accent focus:ring-iob-blue"
                      />
                      <div>
                        <p className="font-bold leading-tight">Add Term & Health Insurance</p>
                        <p className="text-[9px] text-iob-slate/50 mt-0.5">Bundled premium protection cover</p>
                      </div>
                    </label>
                  </div>

                  {/* Calculations output */}
                  <div className="bg-white border border-iob-blue-border rounded-xl p-4 text-xs text-iob-slate space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-iob-slate/60 font-semibold">Forecasted Primary Bank Index</span>
                      <span className="text-sm font-black text-iob-blue-accent">{calcPrimaryBankIndex()}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-iob-slate/60 font-semibold">Projected TRV</span>
                      <span className="text-sm font-black text-iob-slate">{calcTRVValue()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-iob-slate/60 font-semibold">New PPC Index</span>
                      <span className="text-sm font-black text-emerald-600">{calcPPCIndex().toFixed(1)}</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                      <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300" style={{ width: `${calcPrimaryBankIndex()}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Insights Tab */}
          {activeTab === 'insights' && (
            <div className="animate-fadeIn space-y-4 max-w-6xl mx-auto">
              <h2 className="text-lg font-extrabold text-iob-slate uppercase tracking-wider mb-4">IOB AI Engine Real-time Insights</h2>
              
              <div className="grid lg:grid-cols-2 gap-4">
                {mockTriggers.map((trigger) => (
                  <div key={trigger.id} className={`border-l-4 rounded-r-lg p-4 card-hover shadow-xs ${
                    trigger.urgency === 'high' ? 'border-iob-blue bg-iob-blue/20' :
                    trigger.urgency === 'medium' ? 'border-iob-blue-accent bg-iob-blue-light/20' :
                    'border-slate-500 bg-slate-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-extrabold text-iob-slate text-xs">{trigger.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                        trigger.urgency === 'high' ? 'bg-iob-blue-accent text-white' :
                        trigger.urgency === 'medium' ? 'bg-iob-blue-light text-iob-blue-accent' :
                        'bg-slate-200 text-slate-700'
                      }`}>
                        {trigger.type}
                      </span>
                    </div>
                    <p className="text-iob-slate/85 text-xs mb-2 leading-relaxed">{trigger.description}</p>
                    <p className="text-iob-slate/40 text-[9px] font-bold">
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
