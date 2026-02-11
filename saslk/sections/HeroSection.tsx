'use client';

import React from 'react';
import { useDevice } from '@/contexts/DeviceContext';
import Button from '@/components/Button';

const HeroSection: React.FC = () => {
    const { isDesktop, isMobile } = useDevice();

    const sectionStyle: React.CSSProperties = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--gradient-hero)',
        padding: isMobile ? '6rem 1.5rem 4rem' : '8rem 2rem 4rem',
    };

    // Animated background shapes
    const shapeBase: React.CSSProperties = {
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        opacity: 0.4,
        pointerEvents: 'none',
    };

    return (
        <section id="hero" style={sectionStyle}>
            {/* Background shapes removed for strict B&W theme */}
            <div style={{ display: 'none' }} />
            <div style={{ display: 'none' }} />
            <div style={{ display: 'none' }} />

            {/* Content */}
            <div
                style={{
                    maxWidth: 'var(--container-max)',
                    width: '100%',
                    display: 'flex',
                    flexDirection: isDesktop ? 'row' : 'column',
                    alignItems: 'center',
                    gap: isDesktop ? '4rem' : '3rem',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Text */}
                <div
                    style={{
                        flex: isDesktop ? '1 1 55%' : '1 1 100%',
                        textAlign: isDesktop ? 'left' : 'center',
                    }}
                >
                    <div
                        className="animate-fade-in-down"
                        style={{
                            display: 'inline-block',
                            padding: '0.4rem 1.25rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(0, 0, 0, 0.05)',
                            border: '1px solid #000',
                            color: '#000',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            letterSpacing: '0.05em',
                        }}
                    >
                        ✦ Software Innovation Studio
                    </div>

                    <h1
                        className="animate-fade-in-up delay-100"
                        style={{
                            fontFamily: 'var(--font-outfit), sans-serif',
                            marginBottom: '1.25rem',
                            lineHeight: 1.1,
                        }}
                    >
                        We Build{' '}
                        <span className="gradient-text">Digital Experiences</span>{' '}
                        That Drive Growth
                    </h1>

                    <p
                        className="animate-fade-in-up delay-200"
                        style={{
                            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                            maxWidth: isDesktop ? '520px' : '600px',
                            margin: isDesktop ? '0 0 2rem' : '0 auto 2rem',
                            lineHeight: 1.75,
                        }}
                    >
                        From concept to launch, SASLK delivers cutting-edge software solutions,
                        cloud infrastructure, and digital transformation strategies that propel
                        your business forward.
                    </p>

                    <div
                        className="animate-fade-in-up delay-300"
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            justifyContent: isDesktop ? 'flex-start' : 'center',
                        }}
                    >
                        <Button variant="primary" size="lg" href="#contact">
                            Start a Project
                        </Button>
                        <Button variant="outline" size="lg" href="#projects">
                            View Our Work
                        </Button>
                    </div>
                </div>

                {/* Decorative graphic */}
                {isDesktop && (
                    <div
                        className="animate-fade-in delay-400"
                        style={{
                            flex: '1 1 45%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: '380px',
                                height: '380px',
                                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                background: 'transparent',
                                border: '2px solid #000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                animation: 'float 8s ease-in-out infinite',
                            }}
                        >
                            {/* Inner glow elements */}
                            <div style={{
                                position: 'absolute',
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                border: '1px solid rgba(0,0,0,0.1)',
                                background: 'transparent',
                            }} />
                            <span style={{
                                fontSize: '5rem',
                                color: '#000',
                            }}>
                                {'</>'}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Scroll indicator */}
            <div
                className="animate-fade-in delay-700"
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                    SCROLL
                </span>
                <div style={{
                    width: '1px',
                    height: '30px',
                    background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
                    animation: 'fadeInDown 1.5s ease-in-out infinite',
                }} />
            </div>
        </section>
    );
};

export default HeroSection;
