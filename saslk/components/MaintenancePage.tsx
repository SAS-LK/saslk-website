'use client';

import { useState, useEffect } from 'react';

// ─── Countdown Target ────────────────────────────────────────────────────────
// Change this date to your actual go-live date/time (ISO string or Date args)
const LAUNCH_DATE = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

// ─── TimeBox ─────────────────────────────────────────────────────────────────
function TimeBox({ value, label }: { value: number; label: string }) {
    const formatted = value < 10 ? `0${value}` : `${value}`;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,255,255,0.25)',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                minWidth: '110px',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,255,0.6)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(0,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,255,0.25)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px rgba(0,255,255,0.08)';
            }}
        >
            <span
                style={{
                    fontFamily: 'monospace',
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '0.6rem',
                }}
            >
                {formatted}
            </span>
            <span
                style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(90deg, #00FFFF, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                {label}
            </span>
        </div>
    );
}

// ─── MaintenancePage ──────────────────────────────────────────────────────────
export default function MaintenancePage() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const tick = () => {
            const diff = LAUNCH_DATE.getTime() - Date.now();
            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }
            setTimeLeft({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff % 86400000) / 3600000),
                minutes: Math.floor((diff % 3600000) / 60000),
                seconds: Math.floor((diff % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <main
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9999,
                background: '#000000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem 1.5rem',
                overflow: 'hidden',
                fontFamily: 'var(--font-exo2), sans-serif',
            }}
        >
            {/* ── Ambient background blobs ── */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                <div style={{
                    position: 'absolute', top: '-80px', left: '-80px',
                    width: '500px', height: '500px', borderRadius: '50%',
                    background: '#00FFFF', filter: 'blur(160px)', opacity: 0.06,
                }} />
                <div style={{
                    position: 'absolute', bottom: '-80px', right: '-80px',
                    width: '600px', height: '600px', borderRadius: '50%',
                    background: '#FF00FF', filter: 'blur(180px)', opacity: 0.06,
                }} />
            </div>

            {/* ── Content ── */}
            <div
                style={{
                    position: 'relative', zIndex: 1,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '1.5rem',
                    maxWidth: '860px', width: '100%', textAlign: 'center',
                }}
            >
                {/* Logo */}
                <img
                    src="/logo.png"
                    alt="SASLK"
                    style={{
                        height: '48px', width: 'auto',
                        filter: 'brightness(0) invert(1)',
                        marginBottom: '0.5rem',
                    }}
                />

                {/* Brand label */}
                <span style={{
                    fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(90deg, #00FFFF, #FF00FF)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                    SASLK · Software Solutions
                </span>

                {/* Heading */}
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                    fontWeight: 900, color: '#ffffff', lineHeight: 1.1,
                    margin: '0.5rem 0',
                }}>
                    Under{' '}
                    <span style={{
                        background: 'linear-gradient(90deg, #00FFFF, #FF00FF)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                        Maintenance
                    </span>
                </h1>

                {/* Sub-copy */}
                <p style={{
                    color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    maxWidth: '580px', lineHeight: 1.8,
                }}>
                    We're upgrading our platform with new features and improvements.
                    We'll be back online shortly — better than ever.
                </p>

                {/* Divider */}
                <div style={{
                    width: '60px', height: '3px', borderRadius: '99px',
                    background: 'linear-gradient(90deg, #00FFFF, #FF00FF)',
                    margin: '0.5rem 0',
                }} />

                {/* Countdown */}
                <div style={{
                    display: 'flex', flexWrap: 'wrap',
                    gap: '1rem', justifyContent: 'center', marginTop: '0.5rem',
                }}>
                    <TimeBox value={timeLeft.days} label="Days" />
                    <TimeBox value={timeLeft.hours} label="Hours" />
                    <TimeBox value={timeLeft.minutes} label="Minutes" />
                    <TimeBox value={timeLeft.seconds} label="Seconds" />
                </div>

                {/* Contact */}
                <div style={{
                    marginTop: '2.5rem', paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    width: '100%', maxWidth: '480px',
                }}>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem' }}>
                        Need help?{' '}
                        <a
                            href="mailto:contact@saslk.com"
                            style={{
                                background: 'linear-gradient(90deg, #00FFFF, #FF00FF)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                fontWeight: 600, cursor: 'pointer',
                            }}
                        >
                            contact@saslk.com
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
