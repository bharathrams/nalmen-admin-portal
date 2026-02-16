import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import './MainLayout.css';

export const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Sidebar />
            <div className="main-wrapper">
                <Navbar />
                <main className="content-container">
                    <div className="content-inner">
                        {children}
                    </div>
                </main>
                <footer className="footer">
                    <div className="footer-content">
                        <p>&copy; {new Date().getFullYear()} Nalmen Admin. Built with precision.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};
