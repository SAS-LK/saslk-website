'use client';

import React from 'react';

interface TestimonialCardProps {
    quote: string;
    name: string;
    company: string;
    initials: string;
    delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    quote,
    name,
    company,
    initials,
    delay = 0,
}) => {
    const cardStyle: React.CSSProperties = {
        padding: '2rem',
        position: 'relative',
        animation: `fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`,
        opacity: 0,
    };

    return (
        <div className="glass-card" style={cardStyle}>
            {/* Quote mark */}
            <span
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1.5rem',
                    fontSize: '4rem',
                    fontFamily: 'Georgia, serif',
                    color: 'var(--text-primary)',
                    opacity: 0.15,
                    lineHeight: 1,
                }}
            >
                &ldquo;
            </span>

            {/* Stars */}
            <div style={{ marginBottom: '1rem', color: '#000', fontSize: '0.9rem', letterSpacing: '2px' }}>
                ★★★★★
            </div>

            <p
                style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                    color: 'var(--text-secondary)',
                }}
            >
                &ldquo;{quote}&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                    style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-full)',
                        background: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#fff',
                        flexShrink: 0,
                    }}
                >
                    {initials}
                </div>
                <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                        {name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {company}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
