'use client';

import React from 'react';
import { useDevice } from '@/contexts/DeviceContext';
import SectionWrapper from '@/components/SectionWrapper';

const values = [
    { icon: '🎯', title: 'Innovation First', desc: 'We embrace emerging tech to deliver future-proof solutions.' },
    { icon: '🤝', title: 'Client Partnership', desc: 'Your success is our success — we work as an extension of your team.' },
    { icon: '⚡', title: 'Agile Delivery', desc: 'Rapid iteration and continuous delivery keep projects on track.' },
];

const AboutSection: React.FC = () => {
    const { isDesktop, isMobile } = useDevice();

    return (
        <SectionWrapper id="about">
            <div
                style={{
                    display: 'flex',
                    flexDirection: isDesktop ? 'row' : 'column',
                    gap: isDesktop ? '4rem' : '2.5rem',
                    alignItems: isDesktop ? 'center' : 'stretch',
                }}
            >
                {/* Left: image/graphic area */}
                <div
                    className="animate-slide-left"
                    style={{
                        flex: isDesktop ? '1 1 45%' : '1 1 100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            width: isMobile ? '280px' : '360px',
                            height: isMobile ? '280px' : '360px',
                            borderRadius: 'var(--radius-lg)',
                            background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))',
                            border: '1px solid var(--border-subtle)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Decorative elements */}
                        <div style={{
                            width: '100%', height: '100%',
                            background: 'transparent',
                        }} />
                        <span style={{
                            fontSize: '4rem',
                            marginBottom: '1rem',
                            filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.1))',
                            position: 'relative',
                        }}>
                            🏢
                        </span>
                        <span style={{
                            fontFamily: 'var(--font-outfit), sans-serif',
                            fontWeight: 700,
                            fontSize: '1.5rem',
                            color: 'var(--text-primary)',
                            position: 'relative',
                        }}>
                            Est. 2020
                        </span>
                        <span style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem',
                            position: 'relative',
                        }}>
                            Building the future
                        </span>
                    </div>
                </div>

                {/* Right: text content */}
                <div style={{ flex: isDesktop ? '1 1 55%' : '1 1 100%' }}>
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
                        About Us
                    </span>
                    <h2
                        className="animate-fade-in-up delay-100"
                        style={{
                            fontFamily: 'var(--font-outfit), sans-serif',
                            margin: '0.75rem 0 1rem',
                        }}
                    >
                        Transforming Ideas Into{' '}
                        <span className="gradient-text">Powerful Software</span>
                    </h2>
                    <div className="section-divider animate-fade-in-up delay-100" style={{ margin: '1rem 0' }} />
                    <p
                        className="animate-fade-in-up delay-200"
                        style={{ lineHeight: 1.8, marginBottom: '2rem' }}
                    >
                        SASLK is a forward-thinking software company specializing in crafting bespoke
                        digital solutions. Our team of passionate engineers, designers, and strategists
                        collaborate to deliver products that are not just functional — they&apos;re exceptional.
                        From startups to enterprises, we partner with visionary organizations to turn
                        complex challenges into elegant, scalable technology.
                    </p>

                    {/* Values */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                            gap: '1.25rem',
                        }}
                    >
                        {values.map((v, i) => (
                            <div
                                key={v.title}
                                className={`animate-fade-in-up delay-${(i + 3) * 100}`}
                                style={{
                                    padding: '1.25rem',
                                    borderRadius: 'var(--radius-sm)',
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-subtle)',
                                    transition: 'all var(--transition-base)',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem',
                                        filter: 'grayscale(100%) brightness(0)', transition: 'filter 0.3s'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) brightness(0)'; }}
                                >
                                    {v.icon}
                                </span>
                                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.3rem', fontFamily: 'var(--font-outfit), sans-serif' }}>{v.title}</h4>
                                <p style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
