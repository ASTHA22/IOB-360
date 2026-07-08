import { Link } from 'react-router-dom';
import { Activity, ArrowRight, ShieldCheck } from 'lucide-react';
import IOBLogo from '../components/IOBLogo';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F6] via-blue-50/20 to-white text-iob-slate">
      {/* Header */}
      <div className="bg-white border-b border-iob-blue-border/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <IOBLogo showText={true} />
            <div className="border-l border-slate-200 pl-4 ml-1 hidden sm:block">
              <p className="text-[10px] font-bold text-iob-slate/50 tracking-wider uppercase">Customer 360 Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-iob-slate/80">Live Core Sync</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Main Dashboard Card */}
        <div className="mb-6">
          <Link
            to="/dashboard"
            className="block bg-gradient-to-br from-iob-blue-light/40 via-white to-white rounded-2xl shadow-md border-2 border-iob-blue-border hover:border-iob-blue hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 group animate-slideInLeft"
          >
            <div className="p-6 text-iob-slate relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-iob-blue/5 to-transparent animate-shimmer"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-iob-blue/10 px-3 py-1.5 rounded-full mb-3 border border-iob-blue-border">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-bold text-iob-blue uppercase tracking-wider">LIVE DASHBOARD</span>
                    </div>
                    <h3 className="text-2xl font-black text-iob-blue mb-2">Customer 360° Dashboard</h3>
                    <p className="text-iob-slate/80 text-sm mb-4 max-w-2xl">
                      Unified, real-time analytics portal displaying the retail customer profile, multi-channel engagement patterns, 
                      product holdings, spend behaviors, and credit portfolio metrics.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div className="bg-white/80 border border-iob-blue-border/60 rounded-xl p-3 shadow-xs">
                        <p className="text-iob-slate/50 text-[10px] font-bold uppercase">Primary Bank Index</p>
                        <p className="text-base font-extrabold text-iob-blue">Active</p>
                      </div>
                      <div className="bg-white/80 border border-iob-blue-border/60 rounded-xl p-3 shadow-xs">
                        <p className="text-iob-slate/50 text-[10px] font-bold uppercase">AI Engine</p>
                        <p className="text-base font-extrabold text-iob-blue-accent">Active</p>
                      </div>
                      <div className="bg-white/80 border border-iob-blue-border/60 rounded-xl p-3 shadow-xs">
                        <p className="text-iob-slate/50 text-[10px] font-bold uppercase">Event Triggers</p>
                        <p className="text-base font-extrabold text-emerald-600">Dynamic</p>
                      </div>
                      <div className="bg-white/80 border border-iob-blue-border/60 rounded-xl p-3 shadow-xs">
                        <p className="text-iob-slate/50 text-[10px] font-bold uppercase">Refresh Frequency</p>
                        <p className="text-base font-extrabold text-iob-blue-accent">3s</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-iob-blue font-extrabold text-sm group-hover:translate-x-1 transition-transform">
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
            className="bg-white rounded-2xl shadow-md border-2 border-iob-blue-border/40 hover:border-iob-blue hover:shadow-xl transition-all duration-300 group p-6 transform hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="w-12 h-12 bg-iob-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-iob-blue group-hover:scale-105 transition-all">
                  <ShieldCheck className="w-6 h-6 text-iob-blue group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-iob-slate mb-2">
                  IOB Mobile Banking Simulator
                </h3>
                <p className="text-xs text-iob-slate/75 mb-4 leading-relaxed">
                  Simulates a customer's retail loan journey on IOB mobile banking. Demonstrates structured data pre-fill from enriched SSOT, consent validation, Key Fact Statement (KFS) terms, and instant underwritten approval.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2.5 py-0.5 bg-blue-50 text-iob-blue border border-iob-blue-border/50 rounded-full text-[10px] font-bold">Enriched Pre-fill</span>
                  <span className="px-2.5 py-0.5 bg-iob-blue-light text-iob-blue-accent border border-iob-blue-border/50 rounded-full text-[10px] font-bold">Consent Journey</span>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold">KFS Compliance</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-iob-blue font-extrabold text-xs">
              <span>Start Customer Journey Simulator</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/console"
            className="bg-white rounded-2xl shadow-md border-2 border-iob-blue-border/40 hover:border-iob-blue hover:shadow-xl transition-all duration-300 group p-6 transform hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="w-12 h-12 bg-iob-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-iob-blue group-hover:scale-105 transition-all">
                  <Activity className="w-6 h-6 text-iob-blue group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-iob-slate mb-2">
                  Backend Execution Log
                </h3>
                <p className="text-xs text-iob-slate/75 mb-4 leading-relaxed">
                  Real-time underwriter telemetry console. Tracks data-engineering pipelines, consent capture events, Account Aggregator sync logs, credit scoring triggers, and data overrides.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2.5 py-0.5 bg-slate-50 text-iob-slate border border-slate-200 rounded-full text-[10px] font-bold">Finacle CBS Sync</span>
                  <span className="px-2.5 py-0.5 bg-iob-blue-light text-iob-blue-accent border border-iob-blue-border/50 rounded-full text-[10px] font-bold">SSOT Log Feed</span>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold">AA Consent Events</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-iob-blue font-extrabold text-xs">
              <span>Open Underwriting Log</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
