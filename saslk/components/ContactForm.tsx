'use client';

import React, { useState } from 'react';
import { useDevice } from '@/contexts/DeviceContext';

const ContactForm: React.FC = () => {
    const { isMobile } = useDevice();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs: Record<string, string> = {};
        if (!formData.name.trim()) errs.name = 'Name is required';
        if (!formData.email.trim()) {
            errs.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errs.email = 'Invalid email format';
        }
        if (!formData.message.trim()) errs.message = 'Message is required';
        return errs;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setErrors({});
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.9rem 1.25rem',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)',
        background: 'var(--bg-tertiary)',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
        fontFamily: 'inherit',
    };

    const errorStyle: React.CSSProperties = {
        color: '#f87171',
        fontSize: '0.8rem',
        marginTop: '0.3rem',
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = 'var(--accent-primary)';
        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.15)';
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'none';
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                width: '100%',
                maxWidth: isMobile ? '100%' : '500px',
            }}
        >
            {submitted && (
                <div
                    style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                        color: '#22c55e',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                    }}
                >
                    ✓ Message sent successfully! We&apos;ll be in touch soon.
                </div>
            )}

            <div>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {errors.name && <div style={errorStyle}>{errors.name}</div>}
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {errors.email && <div style={errorStyle}>{errors.email}</div>}
            </div>

            <div>
                <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={handleFocus as React.FocusEventHandler<HTMLTextAreaElement>}
                    onBlur={handleBlur as React.FocusEventHandler<HTMLTextAreaElement>}
                />
                {errors.message && <div style={errorStyle}>{errors.message}</div>}
            </div>

            <button
                type="submit"
                style={{
                    background: '#000000',
                    color: '#fff',
                    padding: '0.9rem 2rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all var(--transition-base)',
                    alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gradient-brand-hover)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow-lg)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#000000';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                Send Message →
            </button>
        </form>
    );
};

export default ContactForm;
