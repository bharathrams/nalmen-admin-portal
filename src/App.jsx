import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home/Home';
import { Login } from './features/auth/components/Login';
import './styles/global.css';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';

  const content = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/reports" element={<div className="glass-card"><h1>Reports</h1><p>Reports management coming soon.</p></div>} />
      <Route path="/analytics" element={<div className="glass-card"><h1>Analytics</h1><p>Advanced analytics dashboard.</p></div>} />
      <Route path="/settings" element={<div className="glass-card"><h1>Settings</h1><p>System configuration.</p></div>} />
    </Routes>
  );

  if (isAuthPage) return content;

  return <MainLayout>{content}</MainLayout>;
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
