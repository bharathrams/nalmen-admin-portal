import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { loginSchema } from '../validation/loginSchema';
import { Button } from '../../../components/common/Button';
import './Login.css';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        }
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        // Simulate API call
        console.log('Login attempt:', data);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/');
        }, 1500);
    };

    return (
        <div className="login-page">
            <motion.div
                className="login-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="login-header">
                    <div className="login-logo">
                        <span className="logo-gradient">Nalmen</span>
                        <span className="logo-suffix">Admin</span>
                    </div>
                    <h1 className="login-title">Welcome Back</h1>
                    <p className="login-subtitle">Powering progress through data</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <div className="input-wrapper">
                            <Mail className="input-icon" size={20} />
                            <input
                                {...register('email')}
                                id="email"
                                type="email"
                                className={`form-input ${errors.email ? 'input-error' : ''}`}
                                placeholder="name@company.com"
                            />
                        </div>
                        {errors.email && <span className="error-message">{errors.email.message}</span>}
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <Lock className="input-icon" size={20} />
                            <input
                                {...register('password')}
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className={`form-input ${errors.password ? 'input-error' : ''}`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {errors.password && <span className="error-message">{errors.password.message}</span>}
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" {...register('rememberMe')} />
                            <span>Remember me</span>
                        </label>
                        <Link to="/forgot-password" size="sm" className="forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        className="login-btn"
                        isLoading={isLoading}
                        leftIcon={<LogIn size={18} />}
                    >
                        Sign In
                    </Button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <Link to="/signup" className="signup-link">Contact Admin</Link></p>
                </div>
            </motion.div>
        </div>
    );
};
