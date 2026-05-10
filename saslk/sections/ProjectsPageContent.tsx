'use client';

import React, { useState } from 'react';
import { useDevice } from '@/contexts/DeviceContext';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';

const allProjects = [
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
    {
        title: 'AgriSense',
        category: 'AgriTech',
        description: 'IoT-powered precision agriculture platform with soil analytics and crop yield prediction.',
        tags: ['IoT', 'Python', 'TensorFlow', 'Azure'],
        color: '#84cc16',
    },
    {
        title: 'PropChain',
        category: 'PropTech',
        description: 'Blockchain-based real estate tokenization platform for fractional property investment.',
        tags: ['Solidity', 'React', 'Ethereum', 'IPFS'],
        color: '#f97316',
    },
    {
        title: 'TravelMind',
        category: 'Travel',
        description: 'AI-driven travel planning app with personalized itineraries and real-time booking.',
        tags: ['React Native', 'OpenAI', 'Firebase', 'Stripe'],
        color: '#0ea5e9',
    },
    {
        title: 'HRSync',
        category: 'HRTech',
        description: 'Unified HR platform with automated payroll, attendance tracking, and performance reviews.',
        tags: ['Angular', 'Java Spring', 'MySQL', 'K8s'],
        color: '#a855f7',
    },
    {
        title: 'EnergyGrid',
        category: 'CleanTech',
        description: 'Smart energy monitoring dashboard for commercial buildings with carbon offset tracking.',
        tags: ['React', 'Go', 'TimescaleDB', 'GCP'],
        color: '#22d3ee',
    },
    {
        title: 'LegalBridge',
        category: 'LegalTech',
        description: 'AI-powered contract analysis and legal document management platform for law firms.',
        tags: ['Next.js', 'LangChain', 'PostgreSQL', 'AWS'],
        color: '#e11d48',
    },
];

const categories = ['All', ...Array.from(new Set(allProjects.map((p) => p.category)))];

const ProjectsPageContent: React.FC = () => {
    const { isMobile, isTablet } = useDevice();
    const [activeCategory, setActiveCategory] = useState('All');

    const columns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
    const filtered =
        activeCategory === 'All' ? allProjects : allProjects.filter((p) => p.category === activeCategory);

    return (
        <>
            {/* Hero banner */}
            <section
                style={{
                    minHeight: isMobile ? '40vh' : '48vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: isMobile ? '8rem 1.5rem 4rem' : '10rem 2rem 5rem',
                    background: 'var(--gradient-hero)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* decorative lines */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    left: '5%',
                    width: '300px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '5%',
                    width: '300px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
                }} />

                <span
                    className="animate-fade-in-down"
                    style={{
                        display: 'inline-block',
                        padding: '0.4rem 1.25rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0,0,0,0.05)',
                        border: '1px solid #000',
                        color: '#000',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        marginBottom: '1.5rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                    }}
                >
                    ✦ Our Portfolio
                </span>
                <h1
                    className="animate-fade-in-up delay-100"
                    style={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        marginBottom: '1.25rem',
                        lineHeight: 1.1,
                        maxWidth: '760px',
                    }}
                >
                    Work That <span className="gradient-text">Speaks for Itself</span>
                </h1>
                <p
                    className="animate-fade-in-up delay-200"
                    style={{
                        maxWidth: '580px',
                        lineHeight: 1.75,
                        marginBottom: '2rem',
                    }}
                >
                    From early-stage startups to enterprise transformations — browse our curated collection of
                    projects that showcase our depth across every major industry.
                </p>
                <div className="animate-fade-in-up delay-300">
                    <Button variant="primary" size="lg" href="/contact">
                        Start a Project
                    </Button>
                </div>
            </section>

            {/* Filter + Grid */}
            <SectionWrapper id="projects-grid" style={{ background: 'var(--bg-primary)' }}>
                {/* Category filter */}
                <div
                    className="animate-fade-in-up"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.6rem',
                        justifyContent: 'center',
                        marginBottom: '3rem',
                    }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '0.45rem 1.25rem',
                                borderRadius: 'var(--radius-full)',
                                border: `1px solid ${activeCategory === cat ? '#000' : 'var(--border-subtle)'}`,
                                background: activeCategory === cat ? '#000' : 'transparent',
                                color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                                fontSize: '0.82rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'all var(--transition-fast)',
                                fontFamily: 'var(--font-outfit), sans-serif',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Count label */}
                <p
                    style={{
                        textAlign: 'center',
                        color: 'var(--text-muted)',
                        fontSize: '0.85rem',
                        marginBottom: '2rem',
                    }}
                >
                    Showing <strong style={{ color: 'var(--text-primary)' }}>{filtered.length}</strong> project
                    {filtered.length !== 1 ? 's' : ''}
                    {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
                </p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: columns,
                        gap: '1.5rem',
                    }}
                >
                    {filtered.map((p, i) => (
                        <ProjectCard
                            key={p.title}
                            title={p.title}
                            category={p.category}
                            description={p.description}
                            tags={p.tags}
                            color={p.color}
                            delay={0.05 + i * 0.06}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div
                    className="animate-fade-in-up"
                    style={{
                        textAlign: 'center',
                        marginTop: '5rem',
                        paddingTop: '3rem',
                        borderTop: '1px solid var(--border-subtle)',
                    }}
                >
                    <h3
                        style={{
                            fontFamily: 'var(--font-outfit), sans-serif',
                            marginBottom: '1rem',
                        }}
                    >
                        Have a project in mind?
                    </h3>
                    <p style={{ maxWidth: '500px', margin: '0 auto 2rem', color: 'var(--text-muted)' }}>
                        Let&apos;s talk about how we can bring your vision to life with precision and craft.
                    </p>
                    <Button variant="primary" size="lg" href="/contact">
                        Get in Touch
                    </Button>
                </div>
            </SectionWrapper>
        </>
    );
};

export default ProjectsPageContent;
