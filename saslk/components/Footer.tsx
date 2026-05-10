'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useDevice } from '@/contexts/DeviceContext';

// ─── Data ─────────────────────────────────────────────────────────────────────

const footerLinks = [
    {
        title: 'Company',
        links: [
            { label: 'About Us',   href: '/#about' },
            { label: 'Our Team',   href: '/#team' },
            { label: 'Partners',   href: '/#partners' },
            { label: 'Careers',    href: '/contact' },
        ],
    },
    {
        title: 'Services',
        links: [
            { label: 'Web Development',      href: '/#services' },
            { label: 'Mobile Apps',           href: '/#services' },
            { label: 'Cloud Solutions',       href: '/#services' },
            { label: 'Digital Transformation',href: '/#services' },
        ],
    },
];

const contactInfo = [
    {
        label: 'contact@saslk.com',
        href: 'mailto:contact@saslk.com',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <polyline points="2,4 12,13 22,4"/>
            </svg>
        ),
    },
    {
        label: '+94 77 000 0000',
        href: 'tel:+94770000000',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.46 5.46l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
        ),
    },
    {
        label: 'Sri Lanka',
        href: undefined,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
            </svg>
        ),
    },
];

const socialLinks = [
    {
        label: 'GitHub',
        href: '#',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: '#',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
    },
    {
        label: 'Twitter',
        href: '#',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: '#',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
        ),
    },
];

// ─── Animated SVG text ────────────────────────────────────────────────────────

const AnimatedBrandText: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [hovered, setHovered] = useState(false);
    const [mask, setMask] = useState({ cx: '50%', cy: '50%' });

    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        if (!svgRef.current) return;
        const rect = svgRef.current.getBoundingClientRect();
        setMask({
            cx: `${((e.clientX - rect.left) / rect.width) * 100}%`,
            cy: `${((e.clientY - rect.top) / rect.height) * 100}%`,
        });
    };

    const gradientId = 'saslk-text-gradient';
    const maskId     = 'saslk-reveal-mask';

    return (
        <>
            <style>{`
                @keyframes stroke-draw {
                    from { stroke-dashoffset: 2000; }
                    to   { stroke-dashoffset: 0; }
                }
                .saslk-draw {
                    stroke-dasharray: 2000;
                    stroke-dashoffset: 2000;
                    animation: stroke-draw 3.5s ease-in-out forwards;
                }
            `}</style>
            <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox="0 0 400 100"
                xmlns="http://www.w3.org/2000/svg"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseMove={handleMouseMove}
                style={{ cursor: 'pointer', userSelect: 'none' }}
            >
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stopColor="#00FFFF" />
                        <stop offset="50%"  stopColor="#FF00FF" />
                        <stop offset="100%" stopColor="#00FFFF" />
                    </linearGradient>
                    <radialGradient
                        id={maskId}
                        gradientUnits="userSpaceOnUse"
                        cx={mask.cx} cy={mask.cy} r="25%"
                    >
                        <stop offset="0%"   stopColor="white" />
                        <stop offset="100%" stopColor="black" />
                    </radialGradient>
                    <mask id="tm">
                        <rect x="0" y="0" width="100%" height="100%" fill={`url(#${maskId})`} />
                    </mask>
                </defs>

                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle"
                    fontSize="88" fontWeight="900" fontFamily="helvetica, sans-serif"
                    fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5"
                    style={{ opacity: hovered ? 0.4 : 1 }}>
                    SASLK
                </text>

                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle"
                    fontSize="88" fontWeight="900" fontFamily="helvetica, sans-serif"
                    fill="transparent" stroke="rgba(0,0,0,0.18)" strokeWidth="0.4"
                    className="saslk-draw">
                    SASLK
                </text>

                {/* Hover reveal — gradient fill masked to cursor */}
                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle"
                    fontSize="88" fontWeight="900" fontFamily="helvetica, sans-serif"
                    fill="transparent" stroke={`url(#${gradientId})`} strokeWidth="0.5"
                    mask="url(#tm)"
                    style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.2s' }}>
                    SASLK
                </text>
            </svg>
        </>
    );
};

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer: React.FC = () => {
    const { isDesktop, isMobile } = useDevice();

    return (
        <footer style={{
            background: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid var(--border-subtle)',
            fontFamily: 'var(--font-exo2), sans-serif',
        }}>
            {/* Radial background gradient */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                background: 'radial-gradient(125% 125% at 50% 10%, var(--bg-primary) 50%, rgba(0,255,255,0.04) 100%)',
            }} />
            <div style={{
                position: 'absolute', top: '-120px', left: '-120px',
                width: '400px', height: '400px', borderRadius: '50%',
                background: '#00FFFF', filter: 'blur(160px)', opacity: 0.025,
                pointerEvents: 'none', zIndex: 0,
            }} />
            <div style={{
                position: 'absolute', bottom: '-80px', right: '-80px',
                width: '500px', height: '500px', borderRadius: '50%',
                background: '#FF00FF', filter: 'blur(180px)', opacity: 0.025,
                pointerEvents: 'none', zIndex: 0,
            }} />

            {/* Main content */}
            <div style={{
                position: 'relative', zIndex: 1,
                maxWidth: 'var(--container-max)',
                margin: '0 auto',
                padding: isMobile ? '3rem 1.5rem 2rem' : '4rem 2rem 2rem',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isDesktop ? '2fr 1fr 1fr 1fr' : isMobile ? '1fr' : '1fr 1fr',
                    gap: isDesktop ? '3rem' : '2rem',
                    paddingBottom: '3rem',
                }}>
                    {/* Brand */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <img
                            src="/logo.png"
                            alt="SASLK"
                            style={{ height: '36px', width: 'auto', alignSelf: 'flex-start', filter: 'grayscale(100%) brightness(0)' }}
                        />
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: '280px' }}>
                            Building innovative software solutions that transform businesses and drive digital growth across the globe.
                        </p>
                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.5rem' }}>
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '38px', height: '38px', borderRadius: '50%',
                                        border: '1px solid var(--border-subtle)',
                                        color: 'var(--text-muted)',
                                        transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#00FFFF';
                                        e.currentTarget.style.color = '#00FFFF';
                                        e.currentTarget.style.boxShadow = '0 0 12px rgba(0,255,255,0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((col) => (
                        <div key={col.title}>
                            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
                                {col.title}
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s ease' }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = '#00FFFF'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
                            Contact Us
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {contactInfo.map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    {item.icon}
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s ease' }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = '#00FFFF'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.label}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} SASLK. All rights reserved.
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        Crafted with precision &amp; passion
                    </span>
                </div>
            </div>

            {/* Animated brand text */}
            {isDesktop && (
                <div style={{ height: '220px', marginTop: '-60px', marginBottom: '-30px', position: 'relative', zIndex: 1 }}>
                    <AnimatedBrandText />
                </div>
            )}
        </footer>
    );
};

export default Footer;
