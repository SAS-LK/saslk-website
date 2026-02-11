'use client';

import React from 'react';

interface TeamMemberCardProps {
    name: string;
    role: string;
    initials: string;
    color?: string;
    delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
    name,
    role,
    initials,
    color = 'var(--accent-primary)',
    delay = 0,
}) => {
    const cardStyle: React.CSSProperties = {
        padding: '2rem',
        textAlign: 'center',
        animation: `fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`,
        opacity: 0,
    };

    const avatarStyle: React.CSSProperties = {
        width: '90px',
        height: '90px',
        borderRadius: 'var(--radius-full)',
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.25rem',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#fff',
        fontFamily: 'var(--font-outfit), sans-serif',
        transition: 'all var(--transition-base)',
        boxShadow: `0 4px 20px ${color}33`,
    };

    return (
        <div
            className="glass-card"
            style={cardStyle}
            onMouseEnter={(e) => {
                const avatar = e.currentTarget.querySelector('.team-avatar') as HTMLElement;
                if (avatar) {
                    avatar.style.transform = 'scale(1.1)';
                    avatar.style.boxShadow = `0 8px 30px ${color}55`;
                }
            }}
            onMouseLeave={(e) => {
                const avatar = e.currentTarget.querySelector('.team-avatar') as HTMLElement;
                if (avatar) {
                    avatar.style.transform = 'scale(1)';
                    avatar.style.boxShadow = `0 4px 20px ${color}33`;
                }
            }}
        >
            <div className="team-avatar" style={avatarStyle}>
                {initials}
            </div>
            <h4 style={{
                fontSize: '1.1rem',
                marginBottom: '0.3rem',
                fontFamily: 'var(--font-outfit), sans-serif',
            }}>
                {name}
            </h4>
            <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 500,
                marginBottom: '0.75rem',
            }}>
                {role}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
                {['⟁', '◆', '✦'].map((icon, i) => (
                    <span
                        key={i}
                        style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            transition: 'color var(--transition-fast)',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-primary)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                    >
                        {icon}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TeamMemberCard;
