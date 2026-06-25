# Unity Small Finance Bank — Customer 360° Portal (Pearl Savings Program)

**Live Deployment URL:** [https://unity-small-finance-bank-customer-3.vercel.app/](https://unity-small-finance-bank-customer-3.vercel.app/)

A premium, light-themed Customer 360° relationship workbench and underwriting platform designed for Relationship Managers (RMs) and credit risk officers at **Unity Small Finance Bank**. 

This system aggregates retail customer demographics, active product stacks, engagement trends, and risk matrices into a single interface to streamline decision-making and cross-selling. It is customized for the **Pearl Savings Program**—Unity SFB's premium offering tailored for women.

---

## 🛠️ Technology Stack
* **Frontend**: React + TypeScript
* **Styling**: Tailwind CSS v4 (Light theme with Unity Bank's brand-specific slate and golden-yellow color scheme)
* **Routing**: React Router
* **Visualizations**: Recharts (Custom themed charts with tooltips and Indian numbering formatting)
* **Icons**: Lucide Icons
* **Build Tool**: Vite
* **Deployment**: Pre-configured for Vercel SPA redirects (`vercel.json`)

---

## 🌟 Key Features

### 1. Unified Customer 360° Profile Tab (Pearl Tier)
* **Customer Profile Header**: Visualizes premium customer tier (Pearl), customer persona, Primary Bank Index (88%), Digital Index (95%), Monthly Avg Balance (MAB: ₹3.8L), Total Relationship Value (TRV: ₹21.7L), and credit scores with glowing status indicators.
* **Indian Lakhs Formatting (`L`)**: All numeric values (Balances, Credit Outstanding, Chart Ticks, and tooltips) are formatted in Indian Lakhs for native retail banking readability.
* **Product Stack Summary**: Quick overview of active retail holdings (Pearl Savings Account, Demat & Trading 3-in-1 Account, RuPay Select Credit Card, and active Insurance policies).
* **Credit Portfolio**: Details active loan products (Personal Loan, Gold Loan, and revolving Credit Card limits along with historical closed Consumer Durable loans).

### 2. Analytics & Expenditure Insights
* **Transaction Behavior (Spend Analyzer)**: A donut chart breaking down lifestyle spends (Shopping & Lifestyle, Food & Dining, Travel & Commute, and Bills & Utilities).
* **Customer Balance & Inflow History**: A dual-area chart showing average account reserves (**Avg Balance**) vs. deposition velocity (**Monthly Inflows**) to monitor liquidity trends.
* **Layout Alignment**: Nested grid structures ensure all card outlines match up perfectly across different screen sizes.

### 3. Unity AI Assistant & Underwriting Console
* **Interactive AI Console**: Rebranded conversational **Unity Assistant** designed to guide RMs through pre-approved credit card upgrades and locker privileges.
* **Processing Workbench**: Simulated real-time loan console displaying underwriting bureau checks, loan configurations, days past due (DPD), and automated credit rules (e.g. RBI Key Fact Statement compliance, debt service capacity checks).

---

## 🚀 Running the Project Locally

Follow these steps to run the Vite dev server locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ASTHA22/Unity-Small-Finance-Bank-Customer-360.git
   cd Unity-Small-Finance-Bank-Customer-360
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build & Vercel Configuration
To bundle the production build locally:
```bash
npm run build
```
The build assets will compile to the `dist/` directory. The project includes a `vercel.json` file to route all SPA requests back to `index.html` to prevent 404 errors on refreshes.
