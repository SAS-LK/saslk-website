'use client';

import React from 'react';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
    const cardStyle: React.CSSProperties = {
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        animation: `fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`,
        opacity: 0,
    };

    const iconWrapStyle: React.CSSProperties = {
        width: '64px',
        height: '64px',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(0, 0, 0, 0.05)',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.8rem',
        margin: '0 auto 1.25rem',
        transition: 'all var(--transition-base)',
        filter: 'grayscale(100%) brightness(0)',
    };

    return (
        <div
            className="glass-card"
            style={cardStyle}
            onMouseEnter={(e) => {
                const iconEl = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                if (iconEl) {
                    iconEl.style.background = 'var(--gradient-brand)';
                    iconEl.style.transform = 'scale(1.1)';
                    iconEl.style.filter = 'none';
                }
            }}
            onMouseLeave={(e) => {
                const iconEl = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                if (iconEl) {
                    iconEl.style.background = 'rgba(0, 0, 0, 0.05)';
                    iconEl.style.color = 'var(--text-primary)';
                    iconEl.style.transform = 'scale(1)';
                    iconEl.style.filter = 'grayscale(100%) brightness(0)';
                }
            }}
        >
            <div className="service-icon" style={iconWrapStyle}>{icon}</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-outfit), sans-serif' }}>{title}</h3>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>{description}</p>
        </div>
    );
};

export default ServiceCard;
