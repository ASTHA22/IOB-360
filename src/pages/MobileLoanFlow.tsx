import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Send, Activity, Info } from 'lucide-react';
import { useSimulation } from '../context/SimulationContext';
import UnityLogo from '../components/UnityLogo';
import { mockLoanApplication } from '../services/mockData';

type Screen = 'otp' | 'review' | 'chat' | 'processing' | 'success';

interface ChatMessage {
  sender: 'mitra' | 'user';
  text: string;
}

export default function MobileLoanFlow() {
  const { setCurrentScreen: setGlobalScreen, setProgress: setGlobalProgress } = useSimulation();
  const [currentScreen, setCurrentScreen] = useState<Screen>('otp');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [progress, setProgress] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { sender: 'mitra', text: `Hi Astha! 👋 I see you're applying for a ₹5L Personal Loan. Let me help you finalize this!` }
  ]);

  // Sync with global context
  useEffect(() => {
    setGlobalScreen(currentScreen);
  }, [currentScreen, setGlobalScreen]);

  useEffect(() => {
    setGlobalProgress(progress);
  }, [progress, setGlobalProgress]);

  // Auto-simulation
  useEffect(() => {
    if (currentScreen === 'otp') {
      const timer = setTimeout(() => {
        setOtp(['8', '9', '0', '3', '2', '1']);
        setTimeout(() => setCurrentScreen('review'), 1500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  useEffect(() => {
    if (currentScreen === 'review') {
      const timer = setTimeout(() => setCurrentScreen('chat'), 6000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  useEffect(() => {
    if (currentScreen === 'chat') {
      const timer1 = setTimeout(() => {
        setChatMessages(prev => [...prev, { sender: 'user', text: 'Yes, please proceed with the application' }]);
      }, 2000);
      const timer2 = setTimeout(() => {
        setChatMessages(prev => [...prev, { sender: 'mitra', text: 'Perfect! Your application parameters are RBI-compliant. Starting final credit scoring now...' }]);
      }, 3500);
      const timer3 = setTimeout(() => setCurrentScreen('processing'), 5000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [currentScreen]);

  useEffect(() => {
    if (currentScreen === 'processing') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setCurrentScreen('success'), 800);
            return 100;
          }
          return prev + 10;
        });
      }, 400);
      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-6 text-unity-slate">
      <Link to="/" className="text-unity-gold-dark hover:underline text-xs font-bold flex items-center gap-1 mb-6">
        <ArrowLeft className="w-4 h-4" />
        BACK TO CORE SYSTEM
      </Link>

      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto items-start">
        {/* LEFT: Mobile Phone */}
        <div className="w-full md:w-96 flex-shrink-0 mx-auto lg:mx-0">
          <div className="bg-unity-slate rounded-[3rem] p-3 shadow-xl border-4 border-slate-700">
            <div className="bg-[#FAF9F6] rounded-[2.5rem] overflow-hidden" style={{ height: '700px' }}>
              <div className="h-full flex flex-col relative">
                {/* OTP Screen */}
                {currentScreen === 'otp' && (
                  <div className="h-full flex flex-col bg-white p-8 justify-between">
                    <div>
                      <div className="flex items-center justify-center gap-2 mb-8 mt-2">
                        <UnityLogo className="w-8 h-8" />
                        <p className="text-[10px] font-bold text-unity-slate/70 tracking-widest uppercase">UNITY MOBILE</p>
                      </div>

                      <h2 className="text-xl font-black text-unity-slate mb-2">Verify Identity</h2>
                      <p className="text-xs text-unity-slate/70 mb-8 leading-relaxed">
                        We sent a 6-digit verification code to your registered mobile<br />
                        <span className="font-bold text-unity-slate">+91 98004 XX789</span>
                      </p>

                      <div className="flex gap-2.5 justify-center mb-8">
                        {otp.map((digit, index) => (
                          <div
                            key={index}
                            className="w-10 h-12 flex items-center justify-center text-xl font-black border-2 border-unity-gold rounded-lg bg-unity-gold-light"
                          >
                            {digit}
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-unity-slate/60 text-center">
                        Did not receive? <span className="text-unity-gold-dark font-bold cursor-pointer hover:underline">Resend OTP</span>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full bg-unity-slate text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-unity-slate-light transition-colors">
                        Confirm and Verify
                      </button>
                      <button className="w-full border border-slate-200 text-unity-slate/70 py-3 rounded-xl font-bold text-xs uppercase tracking-wider">
                        Back
                      </button>
                    </div>
                  </div>
                )}

                {/* Review Screen */}
                {currentScreen === 'review' && (
                  <div className="h-full flex flex-col bg-white overflow-y-auto p-6 justify-between">
                    <div>
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <UnityLogo className="w-6 h-6" />
                        <p className="text-[9px] font-bold text-unity-slate/70 tracking-widest uppercase">UNITY MOBILE</p>
                      </div>

                      <h2 className="text-lg font-black text-unity-slate mb-4">Review Terms</h2>

                      {/* Light Gradient Card */}
                      <div className="bg-gradient-to-br from-unity-gold-light via-[#FFFDF6] to-white border border-unity-gold-border rounded-xl p-5 mb-4 shadow-xs">
                        <p className="text-[10px] text-unity-slate/60 font-bold uppercase mb-1">Pre-Approved Offer</p>
                        <p className="text-3xl font-black text-unity-slate">₹5,00,000</p>
                        <p className="text-[10px] font-semibold text-unity-slate/70 mt-1">Unsecured Personal Loan</p>
                      </div>

                      <div className="space-y-3 mb-6 bg-slate-50/50 p-4 border border-slate-200/50 rounded-xl text-xs">
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-unity-slate/60">Interest Rate</span>
                          <span className="font-bold text-unity-slate">{mockLoanApplication.interestRate}% p.a.</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-unity-slate/60">Tenure</span>
                          <span className="font-bold text-unity-slate">{mockLoanApplication.tenure} Months</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-unity-slate/60">Monthly EMI</span>
                          <span className="font-bold text-unity-slate">₹{mockLoanApplication.monthlyEMI.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-unity-slate/60">Processing Fee</span>
                          <span className="font-bold text-unity-slate">₹{mockLoanApplication.processingFee.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-amber-50/50 border border-unity-gold-border rounded-lg flex items-start gap-2 mb-4">
                        <Info className="w-4 h-4 text-unity-gold-dark flex-shrink-0 mt-0.5" />
                        <p className="text-[10px] text-unity-slate/85 leading-relaxed">
                          By clicking accept, you authorize Unity SFB to trigger credit underwriting rules.
                        </p>
                      </div>
                    </div>

                    <button className="w-full bg-unity-slate text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-unity-slate-light transition-colors">
                      Accept and Proceed
                    </button>
                  </div>
                )}

                {/* Chat Screen */}
                {currentScreen === 'chat' && (
                  <div className="h-full flex flex-col bg-white">
                    <div className="px-4 py-3 border-b flex items-center justify-between bg-slate-50">
                      <div className="flex items-center gap-2">
                        <UnityLogo className="w-6 h-6" />
                        <div>
                          <p className="text-[10px] font-bold text-unity-slate leading-none">UNITY MOBILE</p>
                          <p className="text-[8px] text-emerald-600 font-bold leading-none mt-1">● Online</p>
                        </div>
                      </div>
                      <div className="bg-unity-gold/15 px-3 py-1 rounded-full border border-unity-gold-border">
                        <span className="text-[9px] font-bold text-unity-gold-dark uppercase tracking-wider">Unity Assistant</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FBFBFC]">
                      {chatMessages.map((msg, index) => (
                        <div 
                          key={index}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed ${
                            msg.sender === 'user' 
                              ? 'bg-unity-gold/15 text-unity-slate border border-unity-gold-border/60 rounded-br-none' 
                              : 'bg-slate-100 text-unity-slate border border-slate-200 rounded-bl-none'
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 border-t bg-white">
                      <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2.5 border border-slate-200/50">
                        <input 
                          type="text" 
                          placeholder="Type a message..."
                          className="flex-1 bg-transparent outline-none text-xs text-unity-slate"
                          disabled
                        />
                        <Send className="w-4 h-4 text-unity-slate/40" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Processing Screen */}
                {currentScreen === 'processing' && (
                  <div className="h-full flex flex-col items-center justify-center bg-white p-8">
                    <div className="w-16 h-16 border-4 border-unity-gold border-t-transparent rounded-full animate-spin mb-6"></div>
                    <h2 className="text-lg font-black text-unity-slate mb-2">Automated Underwriting</h2>
                    <p className="text-xs text-unity-slate/70 text-center mb-6 leading-relaxed">
                      Verifying credit bureau parameters & calculating risk headroom...
                    </p>
                    
                    <div className="w-full max-w-xs">
                      <div className="bg-slate-100 border border-slate-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-unity-gold h-full transition-all duration-300 rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="text-center text-[10px] font-bold text-unity-slate/60 mt-2">{progress}% Checked</p>
                    </div>
                  </div>
                )}

                {/* Success Screen */}
                {currentScreen === 'success' && (
                  <div className="h-full flex flex-col bg-white p-6 justify-between">
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4 border-2 border-emerald-300">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-xl font-black text-unity-slate mb-2">Limit Disbursed!</h2>
                      <p className="text-xs text-unity-slate/75 text-center mb-6 leading-relaxed">
                        Your Unsecured Personal Loan has been approved and activated.
                      </p>
                      
                      <div className="bg-gradient-to-br from-unity-gold-light via-[#FFFDF5] to-white border border-unity-gold-border rounded-xl p-4 w-full shadow-xs">
                        <h3 className="font-bold text-unity-slate text-[10px] uppercase tracking-wider mb-2 pb-1 border-b border-unity-gold-border/40">Facility Details</h3>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between">
                            <span className="text-unity-slate/60">Amount</span>
                            <span className="font-bold text-unity-slate">₹{mockLoanApplication.amount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-unity-slate/60">EMI Schedule</span>
                            <span className="font-bold text-unity-slate">₹{mockLoanApplication.monthlyEMI.toLocaleString()}/mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-unity-slate/60">Tenure</span>
                            <span className="font-bold text-unity-slate">{mockLoanApplication.tenure} Months</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setCurrentScreen('otp')}
                      className="w-full bg-unity-slate text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-unity-slate-light transition-colors mt-4"
                    >
                      Reset Journey
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Backend Underwriting Logs */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 border border-unity-gold-border/50 w-full self-stretch">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
            <h3 className="text-base font-extrabold text-unity-slate flex items-center gap-2 uppercase tracking-wider">
              <Activity className="w-5 h-5 text-unity-gold-dark" />
              Automated Credit Underwriting Monitor
            </h3>
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 text-[9px] font-bold uppercase tracking-wider">Live Trace</span>
            </div>
          </div>

          <div className="space-y-3.5 max-h-[600px] overflow-y-auto pr-1 notice-popup-scrollbar">
            {/* OTP Event */}
            {['otp', 'review', 'chat', 'processing', 'success'].includes(currentScreen) && (
              <div className="bg-amber-50/30 border-l-4 border-unity-gold rounded-r-lg p-3.5 border border-unity-gold-border/40">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-unity-gold-dark font-bold text-[9px] uppercase tracking-wider">KYC_VERIFY</span>
                  <span className="text-unity-slate font-extrabold text-xs">Identity OTP Triggered</span>
                </div>
                <p className="text-unity-slate/85 text-xs">
                  A 6-digit mobile verification token dispatched via SMS & WhatsApp to customer +91 98004 XX789.
                </p>
                <p className="text-unity-slate/40 text-[9px] font-semibold mt-1">Vendor: Gupshup API • Trigger: Client_App_Init</p>
              </div>
            )}

            {/* KFS Event */}
            {['review', 'chat', 'processing', 'success'].includes(currentScreen) && (
              <div className="bg-slate-50 border-l-4 border-unity-slate rounded-r-lg p-3.5 border border-slate-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-unity-slate font-bold text-[9px] uppercase tracking-wider">KFS_GENERATION</span>
                  <span className="text-unity-slate font-extrabold text-xs">Key Fact Statement Generated & Dispatched</span>
                </div>
                <p className="text-unity-slate/85 text-xs">
                  Calculated terms for Unsecured Personal Loan: Principal ₹5L, 24 months, 12.5% interest, EMI ₹23,650, Fee ₹4,999.
                </p>
                <p className="text-unity-slate/40 text-[9px] font-semibold mt-1">Compliance Rule: RBI-DIR-KFS-2024 applied ✓</p>
              </div>
            )}

            {/* AI Routing Event */}
            {['chat', 'processing', 'success'].includes(currentScreen) && (
              <div className="bg-[#FFFDF4]/80 border-l-4 border-unity-gold rounded-r-lg p-3.5 border border-unity-gold-border/60">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-unity-gold-dark font-bold text-[9px] uppercase tracking-wider">AI_COGNITIVE</span>
                  <span className="text-unity-slate font-extrabold text-xs">Unity Assistant Route Triggered</span>
                </div>
                <p className="text-unity-slate/85 text-xs">
                  Customer asked about pre-payment guidelines. AI parsed query and confirmed: "Nil penalty after 6 months".
                </p>
                <p className="text-emerald-700 text-[9px] font-bold mt-1">Status: Customer request solved via automated intent matching ✓</p>
              </div>
            )}

            {/* Processing Event */}
            {['processing', 'success'].includes(currentScreen) && (
              <div className="bg-slate-50 border-l-4 border-unity-slate rounded-r-lg p-3.5 border border-slate-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-unity-slate font-bold text-[9px] uppercase tracking-wider">CREDIT_UNDERWRITING</span>
                  <span className="text-unity-slate font-extrabold text-xs">Rule Engine Assessment</span>
                </div>
                <p className="text-unity-slate/85 text-xs mb-2">
                  Running KYC checks, CIBIL verification (Score: 765), and debt service ratio (FOIR: 32.5%).
                </p>
                {currentScreen === 'processing' && (
                  <div className="mt-2.5 bg-white p-2.5 rounded-lg border border-slate-200">
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div 
                        className="bg-unity-gold h-1.5 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-unity-gold-dark text-[9px] font-bold mt-1.5">{progress}% credit metrics assessed</p>
                  </div>
                )}
              </div>
            )}

            {/* Success Event */}
            {currentScreen === 'success' && (
              <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-3.5 border border-emerald-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-emerald-700 font-bold text-[9px] uppercase tracking-wider">FACILITY_DISBURSED</span>
                  <span className="text-unity-slate font-extrabold text-xs">Loan Agreement Executed & Approved</span>
                </div>
                <p className="text-unity-slate/85 text-xs">
                  Instant underwriting complete. Limit activated in Core Banking System. E-mandate registered successfully.
                </p>
                <p className="text-emerald-700 text-[9px] font-bold mt-1">Status: DISBURSED ✓ Reference: DISB-UN-890321456</p>
              </div>
            )}

            {/* Additional Events */}
            <div className="bg-slate-50/50 border-l-4 border-slate-300 rounded-r-lg p-3.5 border border-slate-200/50">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-unity-slate/50 font-bold text-[9px] uppercase tracking-wider">BUREAU_SYNC</span>
                <span className="text-unity-slate font-extrabold text-xs">CIBIL Bureau Fetch</span>
              </div>
              <p className="text-unity-slate/80 text-xs">
                Bureau score synced: 765. Zero delinquencies. Average age of active credits: 3.4 years.
              </p>
            </div>

            <div className="bg-slate-50/50 border-l-4 border-slate-300 rounded-r-lg p-3.5 border border-slate-200/50">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-unity-slate/50 font-bold text-[9px] uppercase tracking-wider">RULE_EVAL</span>
                <span className="text-unity-slate font-extrabold text-xs">Inflow Assessment</span>
              </div>
              <p className="text-unity-slate/80 text-xs">
                Evaluating savings account inflows: ₹1,50,000 average monthly inflow. Inflow to debt obligations ratio cleared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
