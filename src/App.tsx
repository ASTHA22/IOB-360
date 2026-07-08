import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SimulationProvider } from './context/SimulationContext';
import HomePage from './pages/HomePage';
import MobileLoanFlow from './pages/MobileLoanFlow';
import Dashboard from './pages/Dashboard';
import ProcessingConsole from './pages/ProcessingConsole';
import IOBBuddyWidget from './components/IOBBuddyWidget';

function App() {
  return (
    <SimulationProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mobile" element={<MobileLoanFlow />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/console" element={<ProcessingConsole />} />
          </Routes>
          <IOBBuddyWidget />
        </div>
    </Router>
    </SimulationProvider>
  );
}

export default App;
