import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    BarChart3,
    Settings,
    Users,
    ShieldCheck,
    HelpCircle,
    ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Sidebar.css';

export const Sidebar = () => {
    const navItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
        { icon: <FileText size={20} />, label: 'Reports', path: '/reports' },
        { icon: <BarChart3 size={20} />, label: 'Analytics', path: '/analytics' },
        { icon: <Users size={20} />, label: 'Team', path: '/team' },
        { icon: <ShieldCheck size={20} />, label: 'Security', path: '/security' },
        { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <span className="logo-gradient">Nalmen</span>
                    <span className="logo-suffix">Admin</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-group">
                    <small className="nav-group-title">Main Menu</small>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                            <ChevronRight className="chevron" size={14} />
                        </NavLink>
                    ))}
                </div>

                <div className="nav-group secondary">
                    <small className="nav-group-title">Support</small>
                    <NavLink to="/help" className="nav-item">
                        <span className="nav-icon"><HelpCircle size={20} /></span>
                        <span className="nav-label">Help Center</span>
                        <ChevronRight className="chevron" size={14} />
                    </NavLink>
                </div>
            </nav>

            <div className="sidebar-footer">
                <div className="user-profile-summary">
                    <div className="avatar">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="Admin" />
                        <div className="status-indicator"></div>
                    </div>
                    <div className="user-info">
                        <p className="user-name">Alex Rivera</p>
                        <p className="user-role">Super Admin</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};
