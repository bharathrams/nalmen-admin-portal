import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Bell } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-gradient">Nalmen</span>
                    <span className="logo-suffix">Admin</span>
                </Link>

                <div className="navbar-links desktop-only">
                    <Link to="/" className="nav-link active">Dashboard</Link>
                    <Link to="/reports" className="nav-link">Reports</Link>
                    <Link to="/analytics" className="nav-link">Analytics</Link>
                    <Link to="/settings" className="nav-link">Settings</Link>
                </div>

                <div className="navbar-actions">
                    <button className="icon-btn"><Bell size={20} /></button>
                    <button className="icon-btn"><Github size={20} /></button>
                    <div className="user-avatar">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="User" />
                    </div>
                    <button className="menu-btn mobile-only" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="mobile-menu mobile-only">
                    <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Dashboard</Link>
                    <Link to="/reports" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Reports</Link>
                    <Link to="/analytics" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Analytics</Link>
                    <Link to="/settings" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Settings</Link>
                </div>
            )}
        </nav>
    );
};
