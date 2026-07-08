import type { Customer, LoanApplication, CreditProduct, Trigger, CustomerAttribute } from '../types';

export const mockCustomer: Customer = {
  id: 'CUST001',
  name: 'Astha Singh',
  phone: '+91 98004 XX789',
  email: 'astha.singh@iobnet.co.in',
  tier: 'Royal Privilege',
  since: 'Nov 2022',
  cltv: 9.4,
  cltvScore: 94,
  monthlyIncome: 165000,
  foir: 28.5,
  creditScore: 782,
  segment: 'Senior Tech Lead - FinTech Solutions'
};

// Extended customer data
export const customerExtended = {
  kyc: {
    status: 'Verified',
    cif: 'IOB890321456',
    lastUpdated: 'Feb 2026'
  },
  riskProfile: {
    category: 'Low-to-Medium Risk',
    paymentHistory: '100% on-time',
    defaultHistory: 'None',
    bureauScore: 782
  },
  interactions: {
    ccCalls: 1,
    lastCall: '3 days ago',
    emails: 2,
    chats: 5,
    complaints: 0,
    lastAppLogin: '8 mins ago',
    appUsageFrequency: 'Daily (IOB Mobile App)',
    branchVisits: 'Low (1 visit in last 12 months)',
    surveysCompleted: 4
  },
  preferences: {
    contactChannel: 'WhatsApp',
    contactTime: '11 AM - 2 PM',
    language: 'English',
    digitalPreference: 'Very High'
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
  persona: 'Tech Professional - High Affluence with Growth Orientation',
  branch: 'Cathedral Branch, Chennai (Central Zone)',
  managedBy: {
    name: 'Rajesh Kumar',
    phone: '+91 94440 12345'
  },
  demographics: {
    age: 29,
    gender: 'Female',
    occupation: 'Salaried (Senior Systems Architect)',
    maritalStatus: 'Single',
    geography: 'Chennai (Metro - Tier 1)',
    walletShare: '82%'
  },
  relationshipMetrics: {
    primaryBankIndex: '82%',
    digitalIndex: '96%',
    trv: '₹24.5L', // CASA + TD + Assets
    ppcRatio: 4, 
    balanceGrowth: {
      ytd: '+21.5%',
      mtd: '+3.2%',
      aab: '₹4.2L'
    },
    savingsRetail: 'IOB Savings Account (Royal Privilege Program), Demat & Trading (3-in-1: Savings + Demat + Trading)',
    insurance: 'Term Life (₹2.0 Cr Cover), Health (Super Top-up, ₹15L Cover)'
  }
};

export const mockLoanApplication: LoanApplication = {
  id: 'LOAN001',
  customerId: 'CUST001',
  amount: 600000,
  tenure: 36,
  interestRate: 11.25,
  apr: 11.9,
  monthlyEMI: 19720,
  processingFee: 3999,
  totalInterest: 110000,
  totalAmount: 710000,
  prepaymentPenalty: 'Nil after 6 months',
  penalCharges: '2% p.a. on overdue amount',
  status: 'processing',
  type: 'Unsecured Personal Loan'
};

export const mockCreditProducts: CreditProduct[] = [
  {
    type: 'Personal Loan (PL)',
    amount: 400000,
    outstanding: 180000,
    emi: 14500,
    tenure: '24 months (8 remaining)',
    status: 'active'
  },
  {
    type: 'Gold Loan (IOB Swarna)',
    amount: 300000,
    outstanding: 90000,
    emi: 9500,
    tenure: '12 months (4 remaining)',
    status: 'active'
  },
  {
    type: 'IOB Signature Credit Card',
    amount: 250000,
    outstanding: 24000,
    emi: 0,
    tenure: 'Revolving',
    status: 'active'
  },
  {
    type: 'Consumer Durable Loan',
    amount: 80000,
    outstanding: 0,
    emi: 0,
    tenure: 'Closed Jan 2026',
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
    description: 'Pre-approved for IOB Pride Metal Card upgrade. Lead ID: CC-IOB-980. Potential wallet share increase: 12%.'
  },
  {
    id: 'T2',
    name: 'Locker Facility Discount',
    type: 'Campaign',
    urgency: 'medium',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    description: 'Eligible for 30% special discount on locker rentals (Royal Privilege Program). High interest shown during last mobile app session.'
  },
  {
    id: 'T3',
    name: 'Term Insurance Review',
    type: 'Event',
    urgency: 'medium',
    timestamp: new Date(),
    description: 'Term life cover of ₹2.0 Cr exists. Opportunity to cross-sell Critical Illness rider based on tech salaried profile.'
  },
  {
    id: 'T4',
    name: 'Swarna Gold Loan Top-up',
    type: 'Data',
    urgency: 'low',
    timestamp: new Date(),
    description: 'Repayment track 100% clean. LTV ratio dropped due to gold price increase. Eligible for instant ₹75k top-up.'
  }
];

export const spendingCategories = [
  { name: 'Shopping', percentage: 22, color: '#133D82' }, // IOB Blue
  { name: 'Travel', percentage: 18, color: '#09214D' }, // IOB Blue Dark
  { name: 'Bills', percentage: 14, color: '#1C5EC2' }, // IOB Blue Accent
  { name: 'Food', percentage: 15, color: '#10B981' }, 
  { name: 'Lifestyle', percentage: 11, color: '#2B7FFF' }, // IOB Blue Vibrant
  { name: 'Services', percentage: 9, color: '#6B7C96' },
  { name: 'Health', percentage: 7, color: '#6366F1' }, // Indigo
  { name: 'Entertainment', percentage: 4, color: '#06B6D4' }
];

export const iobCorporateHighlights = {
  deposits: '2,92,110',
  depositsGrowth: '14.2%',
  advances: '1,89,520',
  advancesGrowth: '16.8%',
  netProfit: '2,650',
  crar: '16.5%',
  retailShare: '42%',
  msmeShare: '34%',
  agricultureShare: '24%'
};

export const mockCustomerAttributes: CustomerAttribute[] = [
  {
    id: 'ATTR001',
    name: 'Income Band / Avg Salary',
    value: '₹1.5L - ₹2.0L monthly',
    definition: 'Verified monthly salary credits or self-declared business inflows.',
    source: 'CBS (Salary Credit Transactions)',
    dataOwner: 'Retail Liability Products Group',
    intendedUsage: 'Loan & Credit Card underwriting, propensity models',
    purposeTags: ['Credit Scoring', 'Product Recommendations'],
    consentStatus: 'Active',
    consentTimestamp: '2026-02-12 10:45 AM',
    consentRefId: 'CON-INC-8902'
  },
  {
    id: 'ATTR002',
    name: 'Occupation Type',
    value: 'Salaried (Corporate Tech Sector)',
    definition: 'Employment classification of the primary account holder.',
    source: 'CRM (KYC update)',
    dataOwner: 'KYC Operations Center',
    intendedUsage: 'Regulatory reporting, risk segmentation',
    purposeTags: ['Risk Assessment', 'KYC Profiling'],
    consentStatus: 'Active',
    consentTimestamp: '2026-02-12 10:45 AM',
    consentRefId: 'CON-KYC-1092'
  },
  {
    id: 'ATTR003',
    name: 'Employer Category',
    value: 'Category-A Corporate (>₹100 Cr Turnover)',
    definition: 'Employer grade determined by corporate business volume with the bank.',
    source: 'LOS (Loan Origination System)',
    dataOwner: 'Corporate Credit Risk team',
    intendedUsage: 'Unsecured Retail Credit Interest Rate setting',
    purposeTags: ['Credit Scoring', 'Interest Rate Calculation'],
    consentStatus: 'Active',
    consentTimestamp: '2026-04-18 03:22 PM',
    consentRefId: 'CON-LOS-5531'
  },
  {
    id: 'ATTR004',
    name: 'Investment/Savings upcoming goals',
    value: 'House Purchase, Retirement planning',
    definition: 'Self-declared upcoming financial objectives captured in PFM module.',
    source: 'AA (External portfolios & goals)',
    dataOwner: 'Wealth Management division',
    intendedUsage: 'Mutual Fund & SIP recommendations, Goal-based savings offers',
    purposeTags: ['Wealth Recommendations'],
    consentStatus: 'Active',
    consentTimestamp: '2026-05-20 09:15 AM',
    consentRefId: 'CON-AA-9811'
  },
  {
    id: 'ATTR005',
    name: 'Investment/Savings goals horizon',
    value: '3 to 5 years',
    definition: 'Time period within which the self-declared savings goals must be met.',
    source: 'Mobile App Survey',
    dataOwner: 'Digital Banking Group',
    intendedUsage: 'Term Deposit tenure selection nudges, SIP maturity optimization',
    purposeTags: ['Targeted Marketing'],
    consentStatus: 'Active',
    consentTimestamp: '2026-05-20 09:16 AM',
    consentRefId: 'CON-SURV-342'
  },
  {
    id: 'ATTR006',
    name: 'Risk Preference Band',
    value: 'Moderate (Balanced Portfolio Allocation)',
    definition: 'Investment risk tolerance score based on questionnaire or behavior.',
    source: 'Wealth Portal questionnaire',
    dataOwner: 'Wealth Operations Group',
    intendedUsage: 'Asset allocation advice, mutual fund recommendation ranking',
    purposeTags: ['Wealth Recommendations', 'Compliance Check'],
    consentStatus: 'Active',
    consentTimestamp: '2026-03-01 11:30 AM',
    consentRefId: 'CON-WLTH-7721'
  },
  {
    id: 'ATTR007',
    name: 'Life Insurance Coverage',
    value: '₹2.0 Cr Active Term Life Cover',
    definition: 'Total sum assured of life insurance policies held internally or externally.',
    source: 'AA (Insurance Aggregator)',
    dataOwner: 'Bancassurance Product Team',
    intendedUsage: 'Insurance coverage gap analysis, term top-up cross-sell',
    purposeTags: ['Insurance Recommendations'],
    consentStatus: 'Active',
    consentTimestamp: '2026-05-20 09:15 AM',
    consentRefId: 'CON-AA-9812'
  },
  {
    id: 'ATTR008',
    name: 'General / Health Insurance Coverage',
    value: '₹15L Super Top-up Active Health Cover',
    definition: 'Total sum assured of general/health insurance policies.',
    source: 'AA (Insurance Aggregator)',
    dataOwner: 'Bancassurance Product Team',
    intendedUsage: 'Insurance coverage gap analysis, critical illness cross-sell',
    purposeTags: ['Insurance Recommendations'],
    consentStatus: 'Active',
    consentTimestamp: '2026-05-20 09:15 AM',
    consentRefId: 'CON-AA-9812'
  },
  {
    id: 'ATTR009',
    name: 'No. of Dependents',
    value: '2 (Parents)',
    definition: 'Self-declared count of family members financially dependent on customer.',
    source: 'Credit Card Application pre-fill',
    dataOwner: 'Retail Credit Cards Group',
    intendedUsage: 'Affordability scoring, customized term life product cross-sell',
    purposeTags: ['Credit Scoring', 'Product Recommendations'],
    consentStatus: 'Active',
    consentTimestamp: '2026-06-02 04:12 PM',
    consentRefId: 'CON-CC-0941'
  },
  {
    id: 'ATTR010',
    name: 'Preferred Channel (Self-declared)',
    value: 'WhatsApp Only',
    definition: 'Customer-selected channel for promotional/marketing outreach.',
    source: 'Profile Settings (Consent Registry)',
    dataOwner: 'Marketing Campaign Operations',
    intendedUsage: 'Non-transaction campaign dispatch routing',
    purposeTags: ['Promotional Delivery'],
    consentStatus: 'Active',
    consentTimestamp: '2026-01-15 08:00 AM',
    consentRefId: 'CON-REG-0012'
  },
  {
    id: 'ATTR011',
    name: 'Preferred Channel (Estimated by Bank)',
    value: 'WhatsApp (94% CTR)',
    definition: 'AI-calculated optimal channel based on past message click-through rates.',
    source: 'Marketing Analytics Engine (AI models)',
    dataOwner: 'Data Science Division',
    intendedUsage: 'Smart campaign routing fallback and channel optimization',
    purposeTags: ['Promotional Delivery', 'AI Optimization'],
    consentStatus: 'Active',
    consentTimestamp: '2026-01-15 08:00 AM',
    consentRefId: 'CON-REG-0012'
  },
  {
    id: 'ATTR012',
    name: 'Upcoming Loan Requirements',
    value: 'Car Loan (Targeted Q4 2026)',
    definition: 'Customer-stated intent to borrow, detailing category and target date.',
    source: 'Mobile App Lead form',
    dataOwner: 'Retail Assets Division',
    intendedUsage: 'Pre-approved car loan campaign targeting, auto RM call schedule',
    purposeTags: ['Product Recommendations', 'Pre-approvals'],
    consentStatus: 'Active',
    consentTimestamp: '2026-06-25 10:10 AM',
    consentRefId: 'CON-LEAD-7890'
  },
  {
    id: 'ATTR013',
    name: 'Preferred Product Types',
    value: 'Mutual Funds, Premium Cards, Swarna Gold Loan',
    definition: 'Products showing high engagement, transaction history, or survey score.',
    source: 'Behavioral Analytics Engine',
    dataOwner: 'Data Science Division',
    intendedUsage: 'Next-Best-Action (NBA) engine feed for mobile tiles customization',
    purposeTags: ['Product Recommendations', 'Next-Best-Action'],
    consentStatus: 'Active',
    consentTimestamp: '2026-01-15 08:00 AM',
    consentRefId: 'CON-REG-0012'
  },
  {
    id: 'ATTR014',
    name: 'Preferred Language (Self-declared)',
    value: 'English',
    definition: 'Customer selected communication language in net banking settings.',
    source: 'Profile Settings',
    dataOwner: 'Digital Banking Group',
    intendedUsage: 'Translation of campaign materials, templates selection',
    purposeTags: ['Promotional Delivery'],
    consentStatus: 'Active',
    consentTimestamp: '2026-01-15 08:00 AM',
    consentRefId: 'CON-REG-0012'
  },
  {
    id: 'ATTR015',
    name: 'Preferred Language (Estimated by Bank)',
    value: 'English (100% App Setting match)',
    definition: 'AI-inferred language from device locale and transaction description.',
    source: 'Data Science Models',
    dataOwner: 'Data Science Division',
    intendedUsage: 'Validation of self-declared language, smart fallback',
    purposeTags: ['Promotional Delivery', 'AI Optimization'],
    consentStatus: 'Active',
    consentTimestamp: '2026-01-15 08:00 AM',
    consentRefId: 'CON-REG-0012'
  },
  {
    id: 'ATTR016',
    name: 'Major Life Events',
    value: 'Job Change (Detected via salary credit update Feb 2026)',
    definition: 'Key changes in customer status (marriage, employment change) flagged via data triggers.',
    source: 'CBS Inflow triggers / Bureau updates',
    dataOwner: 'Risk Analytics Division',
    intendedUsage: 'Life-stage based offering upgrades (e.g. salary account switch)',
    purposeTags: ['Product Recommendations', 'Risk Assessment'],
    consentStatus: 'Active',
    consentTimestamp: '2026-02-12 10:45 AM',
    consentRefId: 'CON-INC-8902'
  },
  {
    id: 'ATTR017',
    name: 'Net Worth related details',
    value: 'Residential Property Ownership (Own House in Chennai)',
    definition: 'Declared assets including land, property, or multi-bank capital holdings.',
    source: 'AA (Asset details) & Bureau data',
    dataOwner: 'Wealth Management division',
    intendedUsage: 'Affluence estimation, home loan top-ups, overdraft facilities',
    purposeTags: ['Credit Scoring', 'Wealth Recommendations'],
    consentStatus: 'Active',
    consentTimestamp: '2026-05-20 09:15 AM',
    consentRefId: 'CON-AA-9811'
  }
];
