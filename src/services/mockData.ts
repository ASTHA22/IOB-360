import type { Customer, LoanApplication, CreditProduct, Trigger } from '../types';

export const mockCustomer: Customer = {
  id: 'CUST001',
  name: 'Astha Singh',
  phone: '+91 98004 XX789',
  email: 'astha.singh@unitycustomer.com',
  tier: 'Pearl',
  since: 'Nov 2022',
  cltv: 8.8,
  cltvScore: 88,
  monthlyIncome: 150000,
  foir: 32.5,
  creditScore: 765,
  segment: 'Working Woman'
};

// Extended customer data
export const customerExtended = {
  kyc: {
    status: 'Verified',
    cif: 'CIF890321456',
    lastUpdated: 'Feb 2026'
  },
  riskProfile: {
    category: 'Low Risk',
    paymentHistory: '100% on-time',
    defaultHistory: 'None',
    bureauScore: 765
  },
  interactions: {
    ccCalls: 2,
    lastCall: '4 days ago',
    emails: 1,
    chats: 4,
    complaints: 0,
    lastAppLogin: '12 mins ago',
    appUsageFrequency: 'Daily (Mobile App)',
    branchVisits: 'Low (1 visit in last 12 months)',
    surveysCompleted: 3
  },
  preferences: {
    contactChannel: 'WhatsApp',
    contactTime: '10 AM - 1 PM',
    language: 'English',
    digitalPreference: 'High'
  },
  linkedAccounts: {
    coBorrowers: [],
    deposits: [],
    otherLoans: []
  },
  alerts: {
    bureauTriggers: 0,
    dpd: 0,
    ewsFlags: []
  },
  persona: 'Digital Savvy Working Woman - Senior Tech Executive',
  branch: 'Chembur Branch, Mumbai',
  managedBy: {
    name: 'Priyesh Shah',
    phone: '+91 98200 98765'
  },
  demographics: {
    age: 29,
    gender: 'Female',
    occupation: 'Salaried (VP - Technology)',
    maritalStatus: 'Single',
    geography: 'Mumbai (Metro - Tier 1, Central/East)',
    walletShare: '78%'
  },
  relationshipMetrics: {
    primaryBankIndex: '88%',
    digitalIndex: '95%',
    trv: '₹21.7L', // CASA + TD + Assets
    ppcRatio: 3, // financial & non-financial (app active)
    balanceGrowth: {
      ytd: '+18.0%',
      mtd: '+2.4%',
      aab: '₹3.8L'
    },
    savingsRetail: 'Savings Account (Pearl Program), Demat & Trading (3-in-1: Savings + Demat + Trading)',
    insurance: 'Term Life (₹1.5 Cr Cover), Health (Super Top-up, ₹15L Cover)'
  }
};

export const mockLoanApplication: LoanApplication = {
  id: 'LOAN001',
  customerId: 'CUST001',
  amount: 500000,
  tenure: 24,
  interestRate: 12.5,
  apr: 13.2,
  monthlyEMI: 23650,
  processingFee: 4999,
  totalInterest: 67600,
  totalAmount: 567600,
  prepaymentPenalty: 'Nil after 6 months',
  penalCharges: '2% p.a. on overdue amount',
  status: 'processing',
  type: 'Unsecured Personal Loan'
};

export const mockCreditProducts: CreditProduct[] = [
  {
    type: 'Personal Loan (PL)',
    amount: 400000,
    outstanding: 280000,
    emi: 18500,
    tenure: '24 months (12 remaining)',
    status: 'active'
  },
  {
    type: 'Gold Loan (GL)',
    amount: 250000,
    outstanding: 120000,
    emi: 8000,
    tenure: '12 months (6 remaining)',
    status: 'active'
  },
  {
    type: 'RuPay Select Credit Card (CC)',
    amount: 150000,
    outstanding: 18000,
    emi: 0,
    tenure: 'Revolving',
    status: 'active'
  },
  {
    type: 'Consumer Durable Loan',
    amount: 60000,
    outstanding: 0,
    emi: 0,
    tenure: 'Closed Dec 2025',
    status: 'closed'
  }
];

export const mockTriggers: Trigger[] = [
  {
    id: 'T1',
    name: 'Credit Card Upgrade Eligible',
    type: 'AI Engine',
    urgency: 'high',
    timestamp: new Date(),
    description: 'Pre-approved for Pearl Premium Credit Card upgrade. Lead ID: CC98024. Wallet share increase potential: 15%.'
  },
  {
    id: 'T2',
    name: 'Locker Facility Discount',
    type: 'Campaign',
    urgency: 'medium',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    description: 'Eligible for a 25% special discount on locker rentals (Pearl Savings Account benefit). High interest shown during last mobile app session.'
  },
  {
    id: 'T3',
    name: 'Term Insurance Review',
    type: 'Event',
    urgency: 'medium',
    timestamp: new Date(),
    description: 'Term life cover of ₹1.5 Cr exists. Opportunity to cross-sell Critical Illness rider or top-up cover based on salaried profile.'
  },
  {
    id: 'T4',
    name: 'Gold Loan Top-up Eligibility',
    type: 'Data',
    urgency: 'low',
    timestamp: new Date(),
    description: 'Repayment track 100% clean. LTV ratio dropped due to gold price increase. Eligible for instant ₹50k top-up.'
  }
];

export const spendingCategories = [
  { name: 'Shopping & Lifestyle', percentage: 40, color: '#2A3649' },
  { name: 'Food & Dining', percentage: 25, color: '#4A5B75' },
  { name: 'Travel & Commute', percentage: 20, color: '#F5BE18' },
  { name: 'Bills & Utilities', percentage: 15, color: '#D49D07' }
];

export const unityCorporateHighlights = {
  deposits: '11,952',
  depositsGrowth: '84%',
  advances: '10,985',
  advancesGrowth: '38%',
  netProfit: '482',
  crar: '29%',
  msmeShare: '47%',
  microfinanceShare: '31%',
  supplyChainShare: '13%'
};
