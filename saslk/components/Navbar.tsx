'use client';

import React, { useState } from 'react';
import { useDevice } from '@/contexts/DeviceContext';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Payment', href: '/payment' },
    { label: 'Team', href: '/#team' },
    { label: 'Contact', href: '/#contact' },
];

const Navbar: React.FC = () => {
    const { isDesktop } = useDevice();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: 'none',
        transition: 'all var(--transition-base)',
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
    };

    const logoStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: 800,
        fontFamily: 'var(--font-outfit), sans-serif',
        color: '#000000',
        letterSpacing: '0.05em',
    };

    const linkStyle: React.CSSProperties = {
        color: 'var(--text-secondary)',
        fontSize: '0.92rem',
        fontWeight: 500,
        transition: 'color var(--transition-fast)',
        cursor: 'pointer',
        position: 'relative',
    };

    const ctaStyle: React.CSSProperties = {
        background: '#000000',
        color: '#ffffff',
        padding: '0.6rem 1.5rem',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.9rem',
        fontWeight: 600,
        border: 'none',
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
    };

    // Hamburger
    const hamburgerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        cursor: 'pointer',
        padding: '4px',
        background: 'none',
        border: 'none',
        zIndex: 1100,
    };

    const barBase: React.CSSProperties = {
        width: '24px',
        height: '2px',
        background: 'var(--text-primary)',
        borderRadius: '2px',
        transition: 'all var(--transition-base)',
    };

    // Mobile overlay
    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.97)',
        backdropFilter: 'blur(24px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        zIndex: 1050,
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity var(--transition-base)',
    };

    const mobileLinkStyle: React.CSSProperties = {
        color: 'var(--text-primary)',
        fontSize: '1.5rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'color var(--transition-fast)',
        fontFamily: 'var(--font-outfit), sans-serif',
    };

    return (
        <>
            <nav style={navStyle}>
                <div style={containerStyle}>
                    <Link href="/#hero" style={{ display: 'block' }}>
                        <img
                            src="/logo.png"
                            alt="SASLK"
                            style={{
                                height: '40px',
                                width: 'auto',
                                transition: 'all 0.3s ease',
                                filter: 'grayscale(100%) brightness(0)', // Default: Pure Black Silhouette
                            }}
                            onMouseEnter={(e) => {
                                // Hover: Neon Gradient Glow effect
                                e.currentTarget.style.filter = 'drop-shadow(0 0 2px #00FFFF) drop-shadow(0 0 5px #FF00FF)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'grayscale(100%) brightness(0)';
                            }}
                        />
                    </Link>

                    {isDesktop ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        style={linkStyle}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--text-primary)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--text-secondary)';
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <Link
                                href="/#contact"
                                style={ctaStyle}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--gradient-brand-hover)';
                                    e.currentTarget.style.color = '#000000';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#000000';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Book a Call
                            </Link>
                        </div>
                    ) : (
                        <button
                            style={hamburgerStyle}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span style={{
                                ...barBase,
                                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                            }} />
                            <span style={{
                                ...barBase,
                                opacity: menuOpen ? 0 : 1,
                            }} />
                            <span style={{
                                ...barBase,
                                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                            }} />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile/Tablet overlay */}
            {!isDesktop && (
                <div style={overlayStyle}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={mobileLinkStyle}
                            onClick={() => setMenuOpen(false)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--accent-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        onClick={() => setMenuOpen(false)}
                        style={{ ...ctaStyle, fontSize: '1.1rem', padding: '0.8rem 2rem', marginTop: '1rem' }}
                    >
                        Book a Call
                    </Link>
                </div>
            )}
        </>
    );
};

export default Navbar;
