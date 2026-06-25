export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  tier: string;
  since: string;
  cltv: number;
  cltvScore: number;
  monthlyIncome: number;
  foir: number;
  creditScore: number;
  segment: string;
}

export interface LoanApplication {
  id: string;
  customerId: string;
  amount: number;
  tenure: number;
  interestRate: number;
  apr: number;
  monthlyEMI: number;
  processingFee: number;
  totalInterest: number;
  totalAmount: number;
  prepaymentPenalty: string;
  penalCharges: string;
  status: 'pending' | 'approved' | 'rejected' | 'processing';
  type: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'mitra';
  message: string;
  timestamp: Date;
}

export interface ProcessingLog {
  id: string;
  timestamp: Date;
  event: string;
  status: 'success' | 'error' | 'warning' | 'info';
  channel?: string;
  details: string;
}

export interface Trigger {
  id: string;
  name: string;
  type: string;
  urgency: 'high' | 'medium' | 'low';
  timestamp: Date;
  description: string;
}

export interface CreditProduct {
  type: string;
  amount: number;
  outstanding: number;
  emi: number;
  tenure: string;
  status: string;
}
