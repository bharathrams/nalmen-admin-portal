import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Store,
    Package,
    ClipboardList,
    CreditCard,
    Settings,
    ChevronRight,
    HelpCircle
} from 'lucide-react';
import './Sidebar.css';

export const Sidebar = () => {
    const navGroups = [
        {
            title: 'OVERVIEW',
            items: [
                { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
            ]
        },
        {
            title: 'MANAGEMENT',
            items: [
                { icon: <Store size={20} />, label: 'Sellers', path: '/sellers' },
                { icon: <Users size={20} />, label: 'Users', path: '/users' },
                { icon: <Package size={20} />, label: 'Products', path: '/products' },
                { icon: <ClipboardList size={20} />, label: 'Products request', path: '/product-requests' },
            ]
        },
        {
            title: 'FINANCE',
            items: [
                { icon: <CreditCard size={20} />, label: 'Sales Transactions', path: '/transactions' },
            ]
        },
        {
            title: 'SYSTEM',
            items: [
                { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
            ]
        }
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <NavLink to="/" className="sidebar-logo">
                    <span className="logo-gradient">Nalmen</span>
                    <span className="logo-suffix">Admin</span>
                </NavLink>
            </div>

            <nav className="sidebar-nav">
                {navGroups.map((group, groupIndex) => (
                    <div className="nav-group" key={groupIndex}>
                        <small className="nav-group-title">{group.title}</small>
                        {group.items.map((item) => (
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
                ))}
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
