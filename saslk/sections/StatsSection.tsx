'use client';

import React from 'react';
import { useDevice } from '@/contexts/DeviceContext';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedCounter from '@/components/AnimatedCounter';

const stats = [
    { target: 150, label: 'Projects Delivered', suffix: '+', icon: '🚀' },
    { target: 50, label: 'Happy Clients', suffix: '+', icon: '😊' },
    { target: 25, label: 'Team Members', suffix: '', icon: '👥' },
    { target: 5, label: 'Years of Excellence', suffix: '+', icon: '🏆' },
];

const StatsSection: React.FC = () => {
    const { isMobile } = useDevice();

    return (
        <SectionWrapper
            id="stats"
            style={{
                background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))',
                borderTop: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                    gap: '1.5rem',
                }}
            >
                {stats.map((s) => (
                    <AnimatedCounter
                        key={s.label}
                        target={s.target}
                        label={s.label}
                        suffix={s.suffix}
                        icon={s.icon}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default StatsSection;
