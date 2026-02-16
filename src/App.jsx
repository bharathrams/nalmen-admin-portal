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
      <Route path="/sellers" element={<div className="glass-card"><h1>Sellers</h1><p>Seller management portal.</p></div>} />
      <Route path="/users" element={<div className="glass-card"><h1>Users</h1><p>User account management.</p></div>} />
      <Route path="/products" element={<div className="glass-card"><h1>Products</h1><p>Product catalog management.</p></div>} />
      <Route path="/product-requests" element={<div className="glass-card"><h1>Product Requests</h1><p>Manage incoming product requests.</p></div>} />
      <Route path="/transactions" element={<div className="glass-card"><h1>Sales Transactions</h1><p>Financial transaction records.</p></div>} />
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
