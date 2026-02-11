'use client';

import React from 'react';
import { useDevice } from '@/contexts/DeviceContext';

const footerLinks = {
    company: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Team', href: '#team' },
        { label: 'Careers', href: '#contact' },
    ],
    services: [
        { label: 'Web Development', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
        { label: 'Cloud Solutions', href: '#services' },
    ],
    resources: [
        { label: 'Projects', href: '#projects' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
    ],
};

const socialLinks = [
    { label: 'GitHub', icon: '⟁', href: '#' },
    { label: 'LinkedIn', icon: '◆', href: '#' },
    { label: 'Twitter', icon: '✦', href: '#' },
];

const Footer: React.FC = () => {
    const { isDesktop, isMobile } = useDevice();

    const footerStyle: React.CSSProperties = {
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: isMobile ? '3rem 1.5rem 2rem' : '4rem 2rem 2rem',
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isDesktop ? '2fr 1fr 1fr 1fr' : isMobile ? '1fr' : '1fr 1fr',
        gap: isDesktop ? '3rem' : '2rem',
    };

    const logoStyle: React.CSSProperties = {
        fontSize: '1.8rem',
        fontWeight: 800,
        fontFamily: 'var(--font-outfit), sans-serif',
        background: 'var(--gradient-brand)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '1rem',
    };

    const linkColumnTitle: React.CSSProperties = {
        color: 'var(--text-primary)',
        fontSize: '1rem',
        fontWeight: 600,
        marginBottom: '1rem',
        fontFamily: 'var(--font-outfit), sans-serif',
    };

    const linkStyle: React.CSSProperties = {
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        display: 'block',
        marginBottom: '0.6rem',
        transition: 'color var(--transition-fast)',
    };

    const socialStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-secondary)',
        fontSize: '1rem',
        transition: 'all var(--transition-fast)',
        cursor: 'pointer',
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                {/* Brand */}
                <div>
                    <div style={logoStyle}>SASLK</div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '300px' }}>
                        Building innovative software solutions that transform businesses and drive digital growth.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                style={socialStyle}
                                aria-label={s.label}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                    e.currentTarget.style.color = 'var(--accent-primary)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link columns */}
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title}>
                        <div style={linkColumnTitle}>{title.charAt(0).toUpperCase() + title.slice(1)}</div>
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={linkStyle}
                                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-primary)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    maxWidth: 'var(--container-max)',
                    margin: '2.5rem auto 0',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'center' : 'center',
                    gap: '0.75rem',
                }}
            >
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    © {new Date().getFullYear()} SASLK. All rights reserved.
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    Crafted with precision & passion
                </span>
            </div>
        </footer>
    );
};

export default Footer;
