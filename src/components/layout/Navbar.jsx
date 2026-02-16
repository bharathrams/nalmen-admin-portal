import React, { useState } from 'react';
import { Menu, X, Github, Bell, Search } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <button className="menu-btn mobile-only" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <div className="search-bar desktop-only">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search for reports, data, or settings..." />
                    </div>
                </div>

                <div className="navbar-actions">
                    <button className="icon-btn" aria-label="Notifications">
                        <Bell size={20} />
                        <span className="notification-badge"></span>
                    </button>
                    <button className="icon-btn" aria-label="Github Repository">
                        <Github size={20} />
                    </button>
                    <div className="divider desktop-only"></div>
                    <div className="user-profile desktop-only">
                        <div className="user-avatar">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="User" />
                        </div>
                        <div className="user-meta">
                            <span className="user-name">Alex Rivera</span>
                            <span className="user-status">Online</span>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="mobile-menu mobile-only">
                    <div className="mobile-search">
                        <Search size={18} />
                        <input type="text" placeholder="Search..." />
                    </div>
                    {/* Add links back for mobile if needed, or reference sidebar */}
                </div>
            )}
        </nav>
    );
};
