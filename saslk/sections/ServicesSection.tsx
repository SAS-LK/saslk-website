'use client';

import React from 'react';
import { useDevice } from '@/contexts/DeviceContext';
import SectionWrapper from '@/components/SectionWrapper';
import ServiceCard from '@/components/ServiceCard';

const services = [
    {
        icon: '💻',
        title: 'Web Development',
        description: 'Modern, performant web applications built with Next.js, React, and cutting-edge frameworks.',
    },
    {
        icon: '📱',
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.',
    },
    {
        icon: '☁️',
        title: 'Cloud Solutions',
        description: 'Scalable cloud architecture, migration, and DevOps on AWS, Azure, and Google Cloud.',
    },
    {
        icon: '🤖',
        title: 'AI & Machine Learning',
        description: 'Intelligent automation, predictive analytics, and custom AI models tailored to your data.',
    },
    {
        icon: '🔒',
        title: 'Cybersecurity',
        description: 'End-to-end security audits, penetration testing, and compliance-ready infrastructure.',
    },
    {
        icon: '🎨',
        title: 'UI/UX Design',
        description: 'Human-centered design that transforms complex workflows into delightful user experiences.',
    },
];

const ServicesSection: React.FC = () => {
    const { isMobile, isTablet } = useDevice();

    const columns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

    return (
        <SectionWrapper id="services" style={{ background: 'var(--bg-secondary)' }}>
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
                    What We Do
                </span>
                <h2
                    className="animate-fade-in-up delay-100"
                    style={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        margin: '0.75rem 0',
                    }}
                >
                    Our <span className="gradient-text">Services</span>
                </h2>
                <div className="section-divider animate-fade-in-up delay-100" />
                <p
                    className="animate-fade-in-up delay-200"
                    style={{ maxWidth: '600px', margin: '1rem auto 0' }}
                >
                    We offer a comprehensive suite of technology services designed to elevate your business.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: columns,
                    gap: '1.5rem',
                }}
            >
                {services.map((s, i) => (
                    <ServiceCard
                        key={s.title}
                        icon={s.icon}
                        title={s.title}
                        description={s.description}
                        delay={0.1 + i * 0.1}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default ServicesSection;
