import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Send, Activity, Info } from 'lucide-react';
import { useSimulation } from '../context/SimulationContext';
import IOBLogo from '../components/IOBLogo';
import { mockLoanApplication } from '../services/mockData';

type Screen = 'otp' | 'review' | 'chat' | 'processing' | 'success';

interface ChatMessage {
  sender: 'buddy' | 'user';
  text: string;
}

export default function MobileLoanFlow() {
  const { setCurrentScreen: setGlobalScreen, setProgress: setGlobalProgress } = useSimulation();
  const [currentScreen, setCurrentScreen] = useState<Screen>('otp');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [progress, setProgress] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { sender: 'buddy', text: `Hi Astha! 👋 I see you're applying for an IOB pre-approved ₹6L Personal Loan. IOB Buddy is here to help you finalize this!` }
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
        setChatMessages(prev => [...prev, { sender: 'buddy', text: 'Perfect! Your application parameters are RBI-compliant. Salary credit verification & LOS employer overrides checked in SSOT. Starting final credit scoring now...' }]);
      }, 3500);
      const timer3 = setTimeout(() => setCurrentScreen('processing'), 6000);
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
    <div className="min-h-screen bg-[#FAF9F6] p-6 text-iob-slate">
      <Link to="/" className="text-iob-blue hover:underline text-xs font-bold flex items-center gap-1 mb-6">
        <ArrowLeft className="w-4 h-4" />
        BACK TO CORE SYSTEM
      </Link>

      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto items-start">
        {/* LEFT: Mobile Phone */}
        <div className="w-full md:w-96 flex-shrink-0 mx-auto lg:mx-0">
          <div className="bg-iob-blue rounded-[3rem] p-3 shadow-xl border-4 border-slate-700">
            <div className="bg-[#FAF9F6] rounded-[2.5rem] overflow-hidden" style={{ height: '700px' }}>
              <div className="h-full flex flex-col relative">
                
                {/* OTP Screen */}
                {currentScreen === 'otp' && (
                  <div className="h-full flex flex-col bg-white p-8 justify-between">
                    <div>
                      <div className="flex items-center justify-center gap-2 mb-8 mt-2">
                        <IOBLogo className="w-8 h-8" />
                        <p className="text-[10px] font-bold text-iob-slate/75 tracking-widest uppercase">IOB MOBILE</p>
                      </div>

                      <h2 className="text-xl font-black text-iob-slate mb-2">Verify Identity</h2>
                      <p className="text-xs text-iob-slate/70 mb-8 leading-relaxed">
                        We sent a 6-digit verification code to your registered mobile<br />
                        <span className="font-bold text-iob-slate">+91 98004 XX789</span>
                      </p>

                      <div className="flex gap-2.5 justify-center mb-8">
                        {otp.map((digit, index) => (
                          <div
                            key={index}
                            className="w-10 h-12 flex items-center justify-center text-xl font-black border-2 border-iob-blue rounded-lg bg-iob-blue-light"
                          >
                            {digit}
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-iob-slate/60 text-center">
                        Did not receive? <span className="text-iob-blue font-bold cursor-pointer hover:underline">Resend OTP</span>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full bg-iob-blue text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-iob-blue-dark transition-colors">
                        Confirm and Verify
                      </button>
                      <button className="w-full border border-slate-200 text-iob-slate/70 py-3 rounded-xl font-bold text-xs uppercase tracking-wider">
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
                        <IOBLogo className="w-6 h-6" />
                        <p className="text-[9px] font-bold text-iob-slate/75 tracking-widest uppercase">IOB MOBILE</p>
                      </div>

                      <h2 className="text-lg font-black text-iob-slate mb-4">Review Terms</h2>

                      {/* Light Gradient Card */}
                      <div className="bg-gradient-to-br from-iob-blue-light/50 via-white to-white border border-iob-blue-border rounded-xl p-5 mb-4 shadow-xs">
                        <p className="text-[10px] text-iob-slate/60 font-bold uppercase mb-1">Pre-Approved Offer</p>
                        <p className="text-3xl font-black text-iob-blue">₹6,00,000</p>
                        <p className="text-[10px] font-semibold text-iob-slate/70 mt-1">Unsecured Retail Personal Loan</p>
                      </div>

                      <div className="space-y-3 mb-6 bg-slate-50/50 p-4 border border-slate-200/50 rounded-xl text-xs">
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-iob-slate/60">Interest Rate</span>
                          <span className="font-bold text-iob-slate">{mockLoanApplication.interestRate}% p.a.</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-iob-slate/60">Tenure</span>
                          <span className="font-bold text-iob-slate">{mockLoanApplication.tenure} Months</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-iob-slate/60">Monthly EMI</span>
                          <span className="font-bold text-iob-slate">₹{mockLoanApplication.monthlyEMI.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-iob-slate/60">Processing Fee</span>
                          <span className="font-bold text-iob-slate">₹{mockLoanApplication.processingFee.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-iob-blue-light/50 border border-iob-blue-border rounded-lg flex items-start gap-2 mb-4">
                        <Info className="w-4 h-4 text-iob-blue-accent flex-shrink-0 mt-0.5" />
                        <p className="text-[10px] text-iob-slate/85 leading-relaxed">
                          By clicking accept, you authorize Indian Overseas Bank to fetch from Account Aggregator (AA) and verify credit underwriting rules.
                        </p>
                      </div>
                    </div>

                    <button className="w-full bg-iob-blue text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-iob-blue-dark transition-colors">
                      Accept and Proceed
                    </button>
                  </div>
                )}

                {/* Chat Screen */}
                {currentScreen === 'chat' && (
                  <div className="h-full flex flex-col bg-white">
                    <div className="px-4 py-3 border-b flex items-center justify-between bg-slate-50">
                      <div className="flex items-center gap-2">
                        <IOBLogo className="w-6 h-6" />
                        <div>
                          <p className="text-[10px] font-bold text-iob-slate leading-none">IOB MOBILE</p>
                          <p className="text-[8px] text-emerald-600 font-bold leading-none mt-1">● Online</p>
                        </div>
                      </div>
                      <div className="bg-iob-blue/15 px-3 py-1 rounded-full border border-iob-blue-border">
                        <span className="text-[9px] font-bold text-iob-blue-accent uppercase tracking-wider">IOB Buddy</span>
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
                              ? 'bg-iob-blue/15 text-iob-slate border border-iob-blue-border/60 rounded-br-none' 
                              : 'bg-slate-100 text-iob-slate border border-slate-200 rounded-bl-none'
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
                          className="flex-1 bg-transparent outline-none text-xs text-iob-slate"
                          disabled
                        />
                        <Send className="w-4 h-4 text-iob-slate/40" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Processing Screen */}
                {currentScreen === 'processing' && (
                  <div className="h-full flex flex-col items-center justify-center bg-white p-8">
                    <div className="w-16 h-16 border-4 border-iob-blue border-t-transparent rounded-full animate-spin mb-6"></div>
                    <h2 className="text-lg font-black text-iob-slate mb-2">Automated Underwriting</h2>
                    <p className="text-xs text-iob-slate/70 text-center mb-6 leading-relaxed">
                      Verifying credit bureau parameters & calculating risk headroom...
                    </p>
                    
                    <div className="w-full max-w-xs">
                      <div className="bg-slate-100 border border-slate-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-iob-blue h-full transition-all duration-300 rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="text-center text-[10px] font-bold text-iob-slate/60 mt-2">{progress}% Checked</p>
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
                      <h2 className="text-xl font-black text-iob-slate mb-2">Limit Disbursed!</h2>
                      <p className="text-xs text-iob-slate/75 text-center mb-6 leading-relaxed">
                        Your Unsecured Personal Loan has been approved and activated in SSOT.
                      </p>
                      
                      <div className="bg-gradient-to-br from-iob-blue-light/50 via-white to-white border border-iob-blue-border rounded-xl p-4 w-full shadow-xs">
                        <h3 className="font-bold text-iob-slate text-[10px] uppercase tracking-wider mb-2 pb-1 border-b border-iob-blue-border/40">Facility Details</h3>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between">
                            <span className="text-iob-slate/60">Amount</span>
                            <span className="font-bold text-iob-slate">₹{mockLoanApplication.amount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-iob-slate/60">EMI Schedule</span>
                            <span className="font-bold text-iob-slate">₹{mockLoanApplication.monthlyEMI.toLocaleString()}/mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-iob-slate/60">Tenure</span>
                            <span className="font-bold text-iob-slate">{mockLoanApplication.tenure} Months</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setCurrentScreen('otp')}
                      className="w-full bg-iob-blue text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-iob-blue-dark transition-colors mt-4"
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
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 border border-iob-blue-border/50 w-full self-stretch">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
            <h3 className="text-base font-extrabold text-iob-slate flex items-center gap-2 uppercase tracking-wider">
              <Activity className="w-5 h-5 text-iob-blue" />
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
              <div className="bg-iob-blue-light/35 border-l-4 border-iob-blue rounded-r-lg p-3.5 border border-iob-blue-border">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-iob-blue-accent font-bold text-[9px] uppercase tracking-wider">KYC_VERIFY</span>
                  <span className="text-iob-slate font-extrabold text-xs">Identity OTP Triggered</span>
                </div>
                <p className="text-iob-slate/85 text-xs">
                  A 6-digit mobile verification token dispatched via SMS & WhatsApp to customer +91 98004 XX789.
                </p>
                <p className="text-iob-slate/40 text-[9px] font-semibold mt-1">Vendor: IOB OTP Gateway • Trigger: Client_App_Init</p>
              </div>
            )}

            {/* KFS Event */}
            {['review', 'chat', 'processing', 'success'].includes(currentScreen) && (
              <div className="bg-slate-50 border-l-4 border-iob-blue rounded-r-lg p-3.5 border border-slate-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-iob-blue font-bold text-[9px] uppercase tracking-wider">KFS_GENERATION</span>
                  <span className="text-iob-slate font-extrabold text-xs">Key Fact Statement Generated & Dispatched</span>
                </div>
                <p className="text-iob-slate/85 text-xs">
                  Calculated terms for Unsecured Personal Loan: Principal ₹6L, 36 months, 11.25% interest, EMI ₹19,720, Fee ₹3,999.
                </p>
                <p className="text-iob-slate/40 text-[9px] font-semibold mt-1">Compliance Rule: RBI-DIR-KFS-2024 applied ✓</p>
              </div>
            )}

            {/* AI Routing Event */}
            {['chat', 'processing', 'success'].includes(currentScreen) && (
              <div className="bg-iob-blue-light/35 border-l-4 border-iob-blue rounded-r-lg p-3.5 border border-iob-blue-border">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-iob-blue-accent font-bold text-[9px] uppercase tracking-wider">AI_COGNITIVE</span>
                  <span className="text-iob-slate font-extrabold text-xs">IOB Buddy Route Triggered</span>
                </div>
                <p className="text-iob-slate/85 text-xs">
                  Customer asked about pre-payment guidelines. AI parsed query and confirmed: "Nil penalty after 6 months".
                </p>
                <p className="text-emerald-700 text-[9px] font-bold mt-1">Status: Customer request solved via automated intent matching (IOB Buddy) ✓</p>
              </div>
            )}

            {/* Processing Event */}
            {['processing', 'success'].includes(currentScreen) && (
              <div className="bg-slate-50 border-l-4 border-iob-blue rounded-r-lg p-3.5 border border-slate-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-iob-blue font-bold text-[9px] uppercase tracking-wider">CREDIT_UNDERWRITING</span>
                  <span className="text-iob-slate font-extrabold text-xs">Rule Engine Assessment</span>
                </div>
                <p className="text-iob-slate/85 text-xs mb-2">
                  Running KYC checks, CIBIL verification (Score: 782), and debt service ratio (FOIR: 28.5%).
                </p>
                {currentScreen === 'processing' && (
                  <div className="mt-2.5 bg-white p-2.5 rounded-lg border border-slate-200">
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div 
                        className="bg-iob-blue h-1.5 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-iob-blue-accent text-[9px] font-bold mt-1.5">{progress}% credit metrics assessed</p>
                  </div>
                )}
              </div>
            )}

            {/* Success Event */}
            {['success'].includes(currentScreen) && (
              <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-3.5 border border-emerald-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-emerald-700 font-bold text-[9px] uppercase tracking-wider">FACILITY_DISBURSED</span>
                  <span className="text-iob-slate font-extrabold text-xs">Loan Agreement Executed & Approved</span>
                </div>
                <p className="text-iob-slate/85 text-xs">
                  Instant underwriting complete. Limit activated in IOB Core Banking System. E-mandate registered successfully.
                </p>
                <p className="text-emerald-700 text-[9px] font-bold mt-1">Status: DISBURSED ✓ Reference: DISB-IOB-890321456</p>
              </div>
            )}

            {/* Additional Events */}
            <div className="bg-slate-50/50 border-l-4 border-slate-300 rounded-r-lg p-3.5 border border-slate-200/50">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-iob-slate/50 font-bold text-[9px] uppercase tracking-wider">BUREAU_SYNC</span>
                <span className="text-iob-slate font-extrabold text-xs">CIBIL Bureau Fetch</span>
              </div>
              <p className="text-iob-slate/80 text-xs">
                Bureau score synced: 782. Zero delinquencies. Average age of active credits: 3.4 years.
              </p>
            </div>

            <div className="bg-slate-50/50 border-l-4 border-slate-300 rounded-r-lg p-3.5 border border-slate-200/50">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-iob-slate/50 font-bold text-[9px] uppercase tracking-wider">RULE_EVAL</span>
                <span className="text-iob-slate font-extrabold text-xs">Inflow Assessment</span>
              </div>
              <p className="text-iob-slate/80 text-xs">
                Evaluating savings account inflows: ₹1,65,000 average monthly inflow. Inflow to debt obligations ratio cleared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
