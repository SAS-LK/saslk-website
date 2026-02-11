'use client';

import React from 'react';
import { useDevice } from '@/contexts/DeviceContext';
import SectionWrapper from '@/components/SectionWrapper';
import TeamMemberCard from '@/components/TeamMemberCard';

const team = [
    { name: 'Alex Perera', role: 'CEO & Founder', initials: 'AP', color: '#6366f1' },
    { name: 'Nisha Fernando', role: 'CTO', initials: 'NF', color: '#8b5cf6' },
    { name: 'Kamal Silva', role: 'Lead Designer', initials: 'KS', color: '#06b6d4' },
    { name: 'Dinesh Raj', role: 'Senior Engineer', initials: 'DR', color: '#ec4899' },
];

const TeamSection: React.FC = () => {
    const { isMobile, isTablet } = useDevice();

    const columns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

    return (
        <SectionWrapper id="team" style={{ background: 'var(--bg-secondary)' }}>
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
                    The People
                </span>
                <h2
                    className="animate-fade-in-up delay-100"
                    style={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        margin: '0.75rem 0',
                    }}
                >
                    Meet Our <span className="gradient-text">Team</span>
                </h2>
                <div className="section-divider animate-fade-in-up delay-100" />
                <p
                    className="animate-fade-in-up delay-200"
                    style={{ maxWidth: '600px', margin: '1rem auto 0' }}
                >
                    A diverse team of talented professionals driven by creativity and technical excellence.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: columns,
                    gap: '1.5rem',
                }}
            >
                {team.map((m, i) => (
                    <TeamMemberCard
                        key={m.name}
                        name={m.name}
                        role={m.role}
                        initials={m.initials}
                        color={m.color}
                        delay={0.1 + i * 0.15}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TeamSection;
