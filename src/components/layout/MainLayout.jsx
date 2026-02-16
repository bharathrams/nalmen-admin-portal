import React from 'react';
import { Navbar } from './Navbar';
import './MainLayout.css';

export const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Navbar />
            <main className="content-container">
                {children}
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Nalmen Admin. Built with precision.</p>
                </div>
            </footer>
        </div>
    );
};
