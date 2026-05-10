'use client';

import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';

const partners = [
    { name: 'Codex32', icon: '⟨/⟩' },
    { name: 'Scenzytech Solutions', icon: '◈' },
    { name: 'Buildups Consultancy', icon: '⬡' },
    { name: 'Arosha Electrical Works', icon: '⚡' },
    { name: 'Arosha Distributors', icon: '◎' },
    { name: 'LK Geek Official', icon: '⊕' },
    { name: 'Prasanthi Crafts', icon: '✦' },
];

// Duplicate the list so the loop is seamless
const ticker = [...partners, ...partners];

const PartnersSection: React.FC = () => {
    return (
        <SectionWrapper id="partners" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span
                    className="animate-fade-in-up"
                    style={{
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                    }}
                >
                    Our Network
                </span>
                <h2
                    className="animate-fade-in-up delay-100"
                    style={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        margin: '0.75rem 0',
                    }}
                >
                    Proud <span className="gradient-text">Partners</span>
                </h2>
                <div className="section-divider animate-fade-in-up delay-100" />
                <p
                    className="animate-fade-in-up delay-200"
                    style={{ maxWidth: '560px', margin: '1rem auto 0' }}
                >
                    We work hand-in-hand with a diverse network of companies — from software studios
                    to craft entrepreneurs — building a thriving ecosystem together.
                </p>
            </div>

            {/* Marquee track */}
            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    /* fade edges */
                    WebkitMaskImage:
                        'linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)',
                    maskImage:
                        'linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: 'max-content',
                        animation: 'marquee-rtl 28s linear infinite',
                    }}
                >
                    {ticker.map((partner, i) => (
                        <div
                            key={`${partner.name}-${i}`}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                padding: '0.9rem 2rem',
                                margin: '0 0.5rem',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid var(--border-subtle)',
                                background: 'var(--bg-card)',
                                whiteSpace: 'nowrap',
                                transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-accent)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '1.2rem',
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    lineHeight: 1,
                                }}
                            >
                                {partner.icon}
                            </span>
                            <span
                                style={{
                                    fontSize: '0.92rem',
                                    fontWeight: 600,
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    color: 'var(--text-primary)',
                                    letterSpacing: '0.01em',
                                }}
                            >
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Keyframe injection */}
            <style>{`
                @keyframes marquee-rtl {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </SectionWrapper>
    );
};

export default PartnersSection;
