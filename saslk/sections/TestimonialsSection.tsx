'use client';

import React from 'react';
import { useDevice } from '@/contexts/DeviceContext';
import SectionWrapper from '@/components/SectionWrapper';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
    {
        quote: 'SASLK transformed our legacy system into a modern, scalable platform. Their technical expertise and attention to detail exceeded our expectations.',
        name: 'Sarah Mitchell',
        company: 'CEO, FinTrack Global',
        initials: 'SM',
    },
    {
        quote: 'Working with SASLK was a game-changer. They delivered our mobile app ahead of schedule, and the quality was nothing short of exceptional.',
        name: 'James Chen',
        company: 'CTO, MediConnect',
        initials: 'JC',
    },
    {
        quote: 'The team at SASLK is incredibly collaborative. They understood our vision from day one and brought it to life with precision and creativity.',
        name: 'Priya Sharma',
        company: 'Director, EcoFleet Systems',
        initials: 'PS',
    },
];

const TestimonialsSection: React.FC = () => {
    const { isMobile } = useDevice();

    return (
        <SectionWrapper id="testimonials">
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
                    Client Stories
                </span>
                <h2
                    className="animate-fade-in-up delay-100"
                    style={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        margin: '0.75rem 0',
                    }}
                >
                    What Our <span className="gradient-text">Clients Say</span>
                </h2>
                <div className="section-divider animate-fade-in-up delay-100" />
                <p
                    className="animate-fade-in-up delay-200"
                    style={{ maxWidth: '600px', margin: '1rem auto 0' }}
                >
                    Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped grow.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: '1.5rem',
                }}
            >
                {testimonials.map((t, i) => (
                    <TestimonialCard
                        key={t.name}
                        quote={t.quote}
                        name={t.name}
                        company={t.company}
                        initials={t.initials}
                        delay={0.1 + i * 0.15}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TestimonialsSection;
