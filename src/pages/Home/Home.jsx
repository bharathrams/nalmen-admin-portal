import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, FileText, Activity } from 'lucide-react';
import { Button } from '../../components/common/Button';
import './Home.css';

const stats = [
    { label: 'Total Cases', value: '1,284', icon: FileText, color: '#FF4612' },
    { label: 'Active Personnel', value: '42', icon: Users, color: '#4F46E5' },
    { label: 'System Uptime', value: '99.9%', icon: Activity, color: '#10B981' },
    { label: 'Response Rate', value: '+12.5%', icon: TrendingUp, color: '#F59E0B' },
];

export const Home = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="display-title">Welcome back, <span className="gradient-text">Admin</span></h1>
                    <p className="subtitle">Here's what's happening in the system today.</p>
                </motion.div>

                <div className="header-actions">
                    <Button variant="outline">Export Data</Button>
                    <Button>Generate Report</Button>
                </div>
            </header>

            <section className="stats-grid">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                            <stat.icon size={24} />
                        </div>
                        <div className="stat-details">
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-value">{stat.value}</span>
                        </div>
                    </motion.div>
                ))}
            </section>

            <section className="recent-activity">
                <div className="section-header">
                    <h2>System Overview</h2>
                    <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="glass-card placeholder-card">
                    <div className="empty-state">
                        <Activity size={48} className="empty-icon" />
                        <h3>Data Visualization Loading...</h3>
                        <p>We're processing the latest case data for your dashboard.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
