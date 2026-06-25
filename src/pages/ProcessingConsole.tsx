import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Activity, Zap, MessageSquare, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { useSimulation } from '../context/SimulationContext';
import logoImg from '../assets/logo.png';

interface LogEntry {
  id: string;
  timestamp: Date;
  event: string;
  status: 'success' | 'error' | 'warning' | 'info';
  channel?: string;
  details: string;
}

export default function ProcessingConsole() {
  const { currentScreen, progress } = useSimulation();
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: '1',
      timestamp: new Date(),
      event: 'Underwriting Engine Initialized',
      status: 'success',
      details: 'Automated Credit Rule Engine v4.2 active. Connected to CIBIL Bureau Services.'
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 1000),
      event: 'OTP Verification Sent',
      status: 'warning',
      details: 'Identity check requested. SMS + WhatsApp verification code sent to +91 98004 XX789.'
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 5000),
      event: 'AI Routing Intent Resolution',
      status: 'info',
      channel: 'AI',
      details: 'Customer queried prepayment terms. Resolved: Nil penalty after 6 months. Rule engine confirmed RBI compliance.'
    },
    {
      id: '4',
      timestamp: new Date(Date.now() - 8000),
      event: 'Key Fact Statement (KFS) Generated',
      status: 'success',
      channel: 'KFS',
      details: '₹5L Principal. 24 months. 12.5% p.a. EMI: ₹23,650. Processing fee ₹4,999. RBI compliance checklist cleared.'
    },
    {
      id: '5',
      timestamp: new Date(Date.now() - 12000),
      event: 'Maturity Re-engagement WhatsApp Dispatched',
      status: 'success',
      channel: 'WA',
      details: 'Campaign: high-yield FD maturation trigger. Retention flow sent to customer. Status: read ✓.'
    },
    {
      id: '6',
      timestamp: new Date(Date.now() - 15000),
      event: 'Campaign Re-engagement Triggered',
      status: 'info',
      channel: 'CAMPAIGN',
      details: 'FD maturity date identified (15 days). Unlocked pre-approved limit rate incentive: ₹5L personal loan.'
    },
    {
      id: '7',
      timestamp: new Date(Date.now() - 20000),
      event: 'Inflow growth indicator detected',
      status: 'success',
      details: 'Savings account shows strong steady inflows. Recommended for Unsecured retail credit limit.'
    },
    {
      id: '8',
      timestamp: new Date(Date.now() - 25000),
      event: 'WhatsApp Link Dispatched via Campaign Engine',
      status: 'success',
      channel: 'WA',
      details: 'WhatsApp CTA deep-link generated: https://unitybank.in/apply?offer=pl-loan-5L. Click registered.'
    },
    {
      id: '9',
      timestamp: new Date(Date.now() - 30000),
      event: 'Retail Portal Session Active',
      status: 'info',
      details: 'Customer Astha Singh logged into Unity Retail Portal. Pre-fill data fetched.'
    }
  ]);

  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Date.now().toString(),
        timestamp: new Date(),
        event: 'Telemetry heartbeat',
        status: 'info',
        details: 'Core Banking API connection verified. Latency: 42ms.'
      };
      setLogs(prev => [newLog, ...prev].slice(0, 20));
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-rose-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
      default:
        return <Clock className="w-5 h-5 text-unity-slate-light" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-emerald-50/50 border-emerald-200';
      case 'error':
        return 'bg-rose-50/50 border-rose-200';
      case 'warning':
        return 'bg-amber-50/50 border-unity-gold-border';
      default:
        return 'bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-unity-slate">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="inline-flex items-center text-unity-gold-dark hover:underline text-xs font-bold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" />
            BACK TO PORTAL
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-[200px] md:w-[250px] flex-shrink-0">
              <img 
                src={logoImg} 
                className="absolute top-1/2 -translate-y-1/2 left-0 h-[130px] md:h-[160px] w-auto max-w-none object-contain z-10" 
                alt="Unity Small Finance Bank" 
              />
            </div>
            <div className="border-l border-slate-200 pl-3 ml-1 hidden sm:block">
              <p className="text-[10px] text-unity-slate/50 font-bold uppercase tracking-widest leading-none">Processing Console</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-unity-gold-border/60 mb-6">
          <div className="bg-gradient-to-r from-unity-gold-light via-[#FFFDF5] to-white border-b border-unity-gold-border p-6 text-unity-slate">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Activity className="w-8 h-8 text-unity-gold-dark" />
                <div>
                  <h1 className="text-xl font-black tracking-tight">Credit Underwriting Rule Console</h1>
                  <p className="text-unity-slate/60 text-xs font-semibold mt-0.5">Real-time loan assessment & campaign triggers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                  <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></div>
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">{isLive ? 'Live Sync' : 'Paused'}</span>
                </div>
                <button
                  onClick={() => setIsLive(!isLive)}
                  className="px-4 py-2 bg-unity-slate hover:bg-unity-slate-light text-white rounded-xl transition-colors text-xs font-bold uppercase tracking-wider shadow-xs"
                >
                  {isLive ? 'Pause' : 'Resume'}
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white border border-unity-gold-border/40 rounded-xl p-4 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-unity-gold-dark" />
                  <span className="text-[10px] font-bold text-unity-slate/50 uppercase tracking-wider">Telemetry</span>
                </div>
                <p className="text-xl font-extrabold text-unity-slate">Active</p>
                <p className="text-[10px] text-unity-slate/60 mt-0.5">API data refreshed</p>
              </div>

              <div className="bg-white border border-unity-gold-border/40 rounded-xl p-4 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-unity-gold-dark" />
                  <span className="text-[10px] font-bold text-unity-slate/50 uppercase tracking-wider">Rule Engine</span>
                </div>
                <p className="text-xl font-extrabold text-unity-slate">Assess Mode</p>
                <p className="text-[10px] text-unity-slate/60 mt-0.5">Triggers verified</p>
              </div>

              <div className="bg-white border border-unity-gold-border/40 rounded-xl p-4 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-unity-gold-dark" />
                  <span className="text-[10px] font-bold text-unity-slate/50 uppercase tracking-wider">Campaign Hub</span>
                </div>
                <p className="text-xl font-extrabold text-unity-slate">CleverTap API</p>
                <p className="text-[10px] text-unity-slate/60 mt-0.5">Multi-channel sync</p>
              </div>

              <div className="bg-white border border-unity-gold-border/40 rounded-xl p-4 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-unity-gold-dark" />
                  <span className="text-[10px] font-bold text-unity-slate/50 uppercase tracking-wider">Application Funnel</span>
                </div>
                <div className="space-y-1.5 mt-2">
                  {/* OTP Step */}
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                        currentScreen === 'otp' ? 'bg-unity-gold animate-pulse' :
                        ['review', 'chat', 'processing', 'success'].includes(currentScreen) ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}>
                        {['review', 'chat', 'processing', 'success'].includes(currentScreen) && (
                          <CheckCircle className="w-2.5 h-2.5 text-white" />
                        )}
                      </div>
                      <span className={`font-semibold ${
                        currentScreen === 'otp' ? 'text-unity-slate font-extrabold' :
                        ['review', 'chat', 'processing', 'success'].includes(currentScreen) ? 'text-unity-slate' : 'text-unity-slate/40'
                      }`}>OTP</span>
                    </div>
                  </div>

                  {/* Review Step */}
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                        currentScreen === 'review' ? 'bg-unity-gold animate-pulse' :
                        ['chat', 'processing', 'success'].includes(currentScreen) ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}>
                        {['chat', 'processing', 'success'].includes(currentScreen) && (
                          <CheckCircle className="w-2.5 h-2.5 text-white" />
                        )}
                      </div>
                      <span className={`font-semibold ${
                        currentScreen === 'review' ? 'text-unity-slate font-extrabold' :
                        ['chat', 'processing', 'success'].includes(currentScreen) ? 'text-unity-slate' : 'text-unity-slate/40'
                      }`}>KFS</span>
                    </div>
                  </div>

                  {/* Chat Step */}
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                        currentScreen === 'chat' ? 'bg-unity-gold animate-pulse' :
                        ['processing', 'success'].includes(currentScreen) ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}>
                        {['processing', 'success'].includes(currentScreen) && (
                          <CheckCircle className="w-2.5 h-2.5 text-white" />
                        )}
                      </div>
                      <span className={`font-semibold ${
                        currentScreen === 'chat' ? 'text-unity-slate font-extrabold' :
                        ['processing', 'success'].includes(currentScreen) ? 'text-unity-slate' : 'text-unity-slate/40'
                      }`}>Chatbot</span>
                    </div>
                  </div>

                  {/* Processing Step */}
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                        currentScreen === 'processing' ? 'bg-unity-gold animate-pulse' :
                        currentScreen === 'success' ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}>
                        {currentScreen === 'success' && (
                          <CheckCircle className="w-2.5 h-2.5 text-white" />
                        )}
                      </div>
                      <span className={`font-semibold ${
                        currentScreen === 'processing' ? 'text-unity-slate font-extrabold' :
                        currentScreen === 'success' ? 'text-unity-slate' : 'text-unity-slate/40'
                      }`}>Score {currentScreen === 'processing' && `(${progress}%)`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-unity-gold-border/40 rounded-xl p-5 mb-6 shadow-xs">
              <h2 className="text-sm font-extrabold text-unity-slate mb-3 flex items-center gap-2 uppercase tracking-wider">
                <Activity className="w-4 h-4 text-unity-gold-dark" />
                Real-Time Underwriting Assessment Logs
              </h2>
              
              <div className="space-y-3.5 max-h-[400px] overflow-y-auto pr-1 notice-popup-scrollbar">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className={`border rounded-xl p-4 ${getStatusColor(log.status)}`}
                  >
                    <div className="flex items-start gap-3">
                      {getStatusIcon(log.status)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-unity-slate text-xs">{log.event}</h3>
                          {log.channel && (
                            <span className="px-2 py-0.5 bg-unity-slate text-white rounded text-[8px] font-bold uppercase tracking-wider">
                              {log.channel}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-unity-slate/85 leading-relaxed">{log.details}</p>
                        <p className="text-[9px] text-unity-slate/40 font-bold mt-1.5">
                          {log.timestamp.toLocaleTimeString()} • {log.timestamp.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-unity-gold-border/40 rounded-xl p-5 shadow-xs">
                <h3 className="font-extrabold text-unity-slate text-xs uppercase tracking-wider mb-3">Active Policy Rules Matrix</h3>
                <div className="space-y-2 text-xs text-unity-slate/85">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span>RULE-INFLOW-001: Retail balance & inflow growth check</span>
                    <span className="text-emerald-500 font-bold">CLEARED ✓</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span>RULE-KFS-003: RBI Key Fact Statement compliance</span>
                    <span className="text-emerald-500 font-bold">CLEARED ✓</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span>RULE-BUREAU-750: Credit score clearance (&gt;750)</span>
                    <span className="text-emerald-500 font-bold">CLEARED ✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>RULE-FOIR-RET: Retail debt service capacity check (FOIR &lt; 40%)</span>
                    <span className="text-emerald-500 font-bold">CLEARED ✓</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-unity-gold-border/40 rounded-xl p-5 shadow-xs">
                <h3 className="font-extrabold text-unity-slate text-xs uppercase tracking-wider mb-3">Multi-Channel Dispatches</h3>
                <div className="space-y-2 text-xs text-unity-slate/85">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span>WhatsApp Gateway</span>
                    <span className="text-emerald-500 font-bold">Delivered ✓</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span>SMS Gateway</span>
                    <span className="text-emerald-500 font-bold">Delivered ✓</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span>Retail Web Portal Push</span>
                    <span className="text-amber-500 font-bold">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Corporate Email Desk</span>
                    <span className="text-slate-400">Queued</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

