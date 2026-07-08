import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Activity, Zap, MessageSquare, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { useSimulation } from '../context/SimulationContext';
import IOBLogo from '../components/IOBLogo';

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
      details: 'Automated Credit Rule Engine v4.5 active. Connected to CIBIL Bureau & AA Gateways.'
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
      details: 'Customer queried prepayment terms. Resolved: Nil penalty after 6 months. Rule engine confirmed compliance.'
    },
    {
      id: '4',
      timestamp: new Date(Date.now() - 8000),
      event: 'Key Fact Statement (KFS) Generated',
      status: 'success',
      channel: 'KFS',
      details: '₹6L Principal. 36 months. 11.25% p.a. EMI: ₹19,720. Processing fee ₹3,999. RBI compliance checklist cleared.'
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
      details: 'FD maturity date identified (15 days). Unlocked pre-approved limit rate incentive: ₹6L personal loan.'
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
      details: 'WhatsApp CTA deep-link generated: https://iob.bank.in/apply?offer=pl-loan-6L. Click registered.'
    },
    {
      id: '9',
      timestamp: new Date(Date.now() - 30000),
      event: 'Retail Portal Session Active',
      status: 'info',
      details: 'Customer Astha Singh logged into IOB Retail Portal. Pre-fill data fetched.'
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
        details: 'Core Banking API connection verified. Latency: 32ms.'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 49)]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLive]);

  // Capture simulation state changes from global context
  useEffect(() => {
    if (currentScreen === 'otp') {
      const newLog: LogEntry = {
        id: `OTP-${Date.now()}`,
        timestamp: new Date(),
        event: 'OTP Event Received',
        status: 'warning',
        details: 'OTP verification code requested by retail portal. Identity flow pending verification.'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 49)]);
    } else if (currentScreen === 'review') {
      const newLog: LogEntry = {
        id: `REV-${Date.now()}`,
        timestamp: new Date(),
        event: 'KFS Reviewed',
        status: 'success',
        details: 'Customer has opened and scrolled the Key Fact Statement (KFS). Consent checkbox checked.'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 49)]);
    } else if (currentScreen === 'chat') {
      const newLog: LogEntry = {
        id: `AI-${Date.now()}`,
        timestamp: new Date(),
        event: 'AI Bot Chat Session Active',
        status: 'info',
        channel: 'AI',
        details: 'Chat session active. Resolving intent for pre-payment terms (resolved: nil penalty after 6 months).'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 49)]);
    } else if (currentScreen === 'processing') {
      const newLog: LogEntry = {
        id: `PROC-${Date.now()}`,
        timestamp: new Date(),
        event: 'Credit Underwriting Triggered',
        status: 'warning',
        details: `Rule engine running credit bureau check... Score: 782. FOIR: 28.5%. Assessment: ${progress}% checked.`
      };
      setLogs(prev => [newLog, ...prev.slice(0, 49)]);
    } else if (currentScreen === 'success') {
      const newLog: LogEntry = {
        id: `SUCC-${Date.now()}`,
        timestamp: new Date(),
        event: 'Facility Disbursed',
        status: 'success',
        details: 'Automated approval complete. Limit activated in Core Banking System. E-mandate registered.'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 49)]);
    }
  }, [currentScreen, progress]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-iob-slate">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="inline-flex items-center text-iob-blue hover:underline text-xs font-bold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" />
            BACK TO PORTAL
          </Link>
          <div className="flex items-center gap-3">
            <IOBLogo showText={true} />
            <div className="border-l border-slate-200 pl-3 ml-1 hidden sm:block">
              <p className="text-[10px] text-iob-slate/50 font-bold uppercase tracking-widest leading-none">Processing Console</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-iob-blue-border/60 mb-6">
          <div className="bg-gradient-to-r from-iob-blue-light/50 via-white to-white border-b border-iob-blue-border p-6 text-iob-slate">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Activity className="w-8 h-8 text-iob-blue" />
                <div>
                  <h1 className="text-xl font-black text-iob-blue">Underwriting Trace Stream</h1>
                  <p className="text-xs text-iob-slate/60">Real-time telemetric logging of customer actions and risk engine processing.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsLive(!isLive)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isLive 
                      ? 'bg-iob-blue text-white hover:bg-iob-blue-dark' 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {isLive ? 'Pause Stream' : 'Resume Stream'}
                </button>
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                  <div className={`w-2 h-2 bg-emerald-500 rounded-full ${isLive ? 'animate-pulse' : ''}`}></div>
                  <span className="text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                    {isLive ? 'Receiving telemetry' : 'Stream paused'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-950 min-h-[500px]">
            <div className="font-mono text-xs text-slate-300 space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {logs.map((log) => (
                <div key={log.id} className="border-b border-slate-900 pb-3 flex items-start gap-4 animate-fadeIn">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[10px] whitespace-nowrap pt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{log.timestamp.toLocaleTimeString()}</span>
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        log.status === 'success' ? 'bg-emerald-950 text-emerald-400 border border-emerald-900/50' :
                        log.status === 'error' ? 'bg-rose-950 text-rose-400 border border-rose-900/50' :
                        log.status === 'warning' ? 'bg-amber-950 text-amber-400 border border-amber-900/50' :
                        'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}>
                        {log.event.toUpperCase()}
                      </span>
                      {log.channel && (
                        <span className="bg-iob-blue/20 text-iob-blue-light border border-iob-blue-border/20 text-[9px] font-bold px-1.5 py-0.5 rounded">
                          {log.channel}
                        </span>
                      )}
                    </div>
                    <p className="text-white text-xs leading-relaxed">{log.details}</p>
                  </div>

                  <div>
                    {log.status === 'success' && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                    {log.status === 'error' && <AlertCircle className="w-4 h-4 text-rose-500" />}
                    {log.status === 'warning' && <Zap className="w-4 h-4 text-amber-500 animate-pulse" />}
                    {log.status === 'info' && <MessageSquare className="w-4 h-4 text-iob-blue-light" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
