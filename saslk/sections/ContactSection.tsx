'use client';

import React from 'react';
import { useDevice } from '@/contexts/DeviceContext';
import SectionWrapper from '@/components/SectionWrapper';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
    { icon: '📍', label: 'Address', value: 'Colombo, Sri Lanka' },
    { icon: '📧', label: 'Email', value: 'hello@saslk.com' },
    { icon: '📞', label: 'Phone', value: '+94 11 234 5678' },
    { icon: '⏰', label: 'Hours', value: 'Mon – Fri, 9AM – 6PM' },
];

const ContactSection: React.FC = () => {
    const { isDesktop, isMobile } = useDevice();

    return (
        <SectionWrapper id="contact" style={{ background: 'var(--bg-secondary)' }}>
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
                    Get In Touch
                </span>
                <h2
                    className="animate-fade-in-up delay-100"
                    style={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        margin: '0.75rem 0',
                    }}
                >
                    Let&apos;s <span className="gradient-text">Work Together</span>
                </h2>
                <div className="section-divider animate-fade-in-up delay-100" />
                <p
                    className="animate-fade-in-up delay-200"
                    style={{ maxWidth: '600px', margin: '1rem auto 0' }}
                >
                    Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s bring your vision to life.
                </p>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: isDesktop ? 'row' : 'column',
                    gap: isDesktop ? '4rem' : '2.5rem',
                    alignItems: isDesktop ? 'flex-start' : 'stretch',
                }}
            >
                {/* Contact info */}
                <div
                    className="animate-slide-left"
                    style={{
                        flex: isDesktop ? '1 1 40%' : '1 1 100%',
                    }}
                >
                    <h3
                        style={{
                            fontFamily: 'var(--font-outfit), sans-serif',
                            fontSize: '1.3rem',
                            marginBottom: '1.5rem',
                        }}
                    >
                        Contact Information
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                        {contactInfo.map((info) => (
                            <div
                                key={info.label}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem 1.25rem',
                                    borderRadius: 'var(--radius-sm)',
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--border-subtle)',
                                    transition: 'all var(--transition-base)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                <span style={{ fontSize: '1.3rem', filter: 'grayscale(100%) brightness(0)', transition: 'filter 0.3s' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) brightness(0)'; }}
                                >
                                    {info.icon}
                                </span>
                                <div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.15rem' }}>
                                        {info.label}
                                    </div>
                                    <div style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>
                                        {info.value}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map placeholder */}
                    <div
                        style={{
                            height: isMobile ? '180px' : '200px',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-muted)',
                            fontSize: '0.85rem',
                        }}
                    >
                        🗺️ Map Integration Coming Soon
                    </div>
                </div>

                {/* Contact form */}
                <div
                    className="animate-slide-right"
                    style={{
                        flex: isDesktop ? '1 1 60%' : '1 1 100%',
                    }}
                >
                    <div
                        className="glass-card"
                        style={{ padding: isMobile ? '1.5rem' : '2.5rem' }}
                    >
                        <h3
                            style={{
                                fontFamily: 'var(--font-outfit), sans-serif',
                                fontSize: '1.3rem',
                                marginBottom: '1.5rem',
                            }}
                        >
                            Send Us a Message
                        </h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ContactSection;
