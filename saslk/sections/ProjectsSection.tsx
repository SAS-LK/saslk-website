'use client';

import React from 'react';
import { useDevice } from '@/contexts/DeviceContext';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';

const projects = [
    {
        title: 'FinTrack Pro',
        category: 'Fintech',
        description: 'A comprehensive financial management platform with real-time analytics and AI-powered insights.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        color: '#6366f1',
    },
    {
        title: 'MediConnect',
        category: 'Healthcare',
        description: 'Telemedicine platform connecting patients with doctors through secure video consultations.',
        tags: ['Next.js', 'WebRTC', 'MongoDB', 'Docker'],
        color: '#8b5cf6',
    },
    {
        title: 'EcoFleet',
        category: 'Logistics',
        description: 'Smart fleet management system optimizing routes, fuel efficiency, and carbon emissions tracking.',
        tags: ['React Native', 'Python', 'ML', 'GCP'],
        color: '#06b6d4',
    },
    {
        title: 'LearnHub',
        category: 'EdTech',
        description: 'Interactive e-learning platform with adaptive content delivery and progress tracking.',
        tags: ['Vue.js', 'Django', 'Redis', 'Azure'],
        color: '#f59e0b',
    },
    {
        title: 'ShopSphere',
        category: 'E-Commerce',
        description: 'Headless commerce platform with AI-powered recommendations and omnichannel support.',
        tags: ['Next.js', 'GraphQL', 'Stripe', 'Vercel'],
        color: '#ec4899',
    },
    {
        title: 'SecureVault',
        category: 'Cybersecurity',
        description: 'Enterprise-grade password management and digital identity protection system.',
        tags: ['Rust', 'React', 'Zero-Knowledge', 'AWS'],
        color: '#10b981',
    },
];

const ProjectsSection: React.FC = () => {
    const { isMobile, isTablet } = useDevice();

    const columns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

    return (
        <SectionWrapper id="projects">
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
                    Our Portfolio
                </span>
                <h2
                    className="animate-fade-in-up delay-100"
                    style={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        margin: '0.75rem 0',
                    }}
                >
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <div className="section-divider animate-fade-in-up delay-100" />
                <p
                    className="animate-fade-in-up delay-200"
                    style={{ maxWidth: '600px', margin: '1rem auto 0' }}
                >
                    A curated selection of projects that showcase our expertise across diverse industries.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: columns,
                    gap: '1.5rem',
                }}
            >
                {projects.map((p, i) => (
                    <ProjectCard
                        key={p.title}
                        title={p.title}
                        category={p.category}
                        description={p.description}
                        tags={p.tags}
                        color={p.color}
                        delay={0.1 + i * 0.1}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default ProjectsSection;
