import { Link } from 'react-router-dom';
import { Activity, ArrowRight, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F6] via-amber-50/20 to-white text-unity-slate">
      {/* Header */}
      <div className="bg-white border-b border-unity-gold-border/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-[200px] md:w-[250px] flex-shrink-0">
              <img 
                src={logoImg} 
                className="absolute top-1/2 -translate-y-1/2 left-0 h-[130px] md:h-[160px] w-auto max-w-none object-contain z-10" 
                alt="Unity Small Finance Bank" 
              />
            </div>
            <div className="border-l border-slate-200 pl-4 ml-1 hidden sm:block">
              <p className="text-[10px] font-bold text-unity-slate/50 tracking-wider uppercase">Customer 360 Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-unity-slate/80">Live Core Sync</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Main Dashboard Card */}
        <div className="mb-6">
          <Link
            to="/dashboard"
            className="block bg-gradient-to-br from-unity-gold-light via-[#FFFDF5] to-white rounded-2xl shadow-md border-2 border-unity-gold-border hover:border-unity-gold hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 group animate-slideInLeft"
          >
            <div className="p-6 text-unity-slate relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-unity-gold/5 to-transparent animate-shimmer"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-unity-gold/15 px-3 py-1.5 rounded-full mb-3 border border-unity-gold-border">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-bold text-unity-slate uppercase tracking-wider">LIVE DASHBOARD</span>
                    </div>
                    <h3 className="text-2xl font-black text-unity-slate mb-2">Customer 360° Dashboard</h3>
                    <p className="text-unity-slate/80 text-sm mb-4 max-w-2xl">
                      Unified, real-time analytics portal displaying the retail customer profile, multi-channel engagement patterns, 
                      product holdings, spend behaviors, and credit portfolio metrics.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div className="bg-white/80 border border-unity-gold-border/60 rounded-xl p-3 shadow-xs">
                        <p className="text-unity-slate/50 text-[10px] font-bold uppercase">Primary Bank Index</p>
                        <p className="text-base font-extrabold">Active</p>
                      </div>
                      <div className="bg-white/80 border border-unity-gold-border/60 rounded-xl p-3 shadow-xs">
                        <p className="text-unity-slate/50 text-[10px] font-bold uppercase">AI Engine</p>
                        <p className="text-base font-extrabold text-unity-gold-dark">Active</p>
                      </div>
                      <div className="bg-white/80 border border-unity-gold-border/60 rounded-xl p-3 shadow-xs">
                        <p className="text-unity-slate/50 text-[10px] font-bold uppercase">Event Triggers</p>
                        <p className="text-base font-extrabold text-emerald-600">Dynamic</p>
                      </div>
                      <div className="bg-white/80 border border-unity-gold-border/60 rounded-xl p-3 shadow-xs">
                        <p className="text-unity-slate/50 text-[10px] font-bold uppercase">Refresh Frequency</p>
                        <p className="text-base font-extrabold">3s</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-unity-gold-dark font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                  <span>Open Customer 360 Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Secondary Options */}
        <div className="grid md:grid-cols-2 gap-6 animate-slideInRight">
          <Link
            to="/mobile"
            className="bg-white rounded-2xl shadow-md border-2 border-unity-gold-border/50 hover:border-unity-gold hover:shadow-xl transition-all duration-300 group p-6 transform hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="w-12 h-12 bg-unity-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-unity-gold group-hover:scale-105 transition-all">
                  <ShieldCheck className="w-6 h-6 text-unity-gold-dark group-hover:text-unity-slate" />
                </div>
                <h3 className="text-xl font-bold text-unity-slate mb-2">
                  Loan Journey Simulation
                </h3>
                <p className="text-xs text-unity-slate/75 mb-4 leading-relaxed">
                  Interactive simulation of a retail customer Personal Loan (PL) application. Verifies OTP, displays Key Fact Statement 
                  (KFS) guidelines, handles customer queries via AI assistant, and triggers automated instant underwriting.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2.5 py-0.5 bg-amber-50 text-unity-gold-dark border border-unity-gold-border/50 rounded-full text-[10px] font-bold">Auto-fills OTP</span>
                  <span className="px-2.5 py-0.5 bg-slate-50 text-unity-slate border border-slate-200 rounded-full text-[10px] font-bold">Interactive Chatbot</span>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold">Instant Underwriting</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-unity-gold-dark font-extrabold text-xs">
              <span>Start Customer Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/console"
            className="bg-white rounded-2xl shadow-md border-2 border-unity-gold-border/50 hover:border-unity-gold hover:shadow-xl transition-all duration-300 group p-6 transform hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="w-12 h-12 bg-unity-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-unity-gold group-hover:scale-105 transition-all">
                  <Activity className="w-6 h-6 text-unity-gold-dark group-hover:text-unity-slate" />
                </div>
                <h3 className="text-xl font-bold text-unity-slate mb-2">
                  Backend Underwriting Console
                </h3>
                <p className="text-xs text-unity-slate/75 mb-4 leading-relaxed">
                  Visualizes the automated credit underwriting back-end. Real-time logging of customer actions, 
                  KYC checks, rule engine status, and multi-channel re-engagement campaigns.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2.5 py-0.5 bg-slate-50 text-unity-slate border border-slate-200 rounded-full text-[10px] font-bold">Live Underwriting Logs</span>
                  <span className="px-2.5 py-0.5 bg-amber-50 text-unity-gold-dark border border-unity-gold-border/50 rounded-full text-[10px] font-bold">Rule Engine Checks</span>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold">Live Status Feeds</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-unity-gold-dark font-extrabold text-xs">
              <span>View Processing Logs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
