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

const faqs = [
    {
        q: 'What is your typical project timeline?',
        a: 'Most projects range from 4 to 16 weeks depending on scope and complexity. We\'ll give you a precise estimate after our initial discovery call.',
    },
    {
        q: 'Do you work with early-stage startups?',
        a: 'Absolutely. We love working with founders at the ideation stage to build MVPs and scalable foundations.',
    },
    {
        q: 'What technologies do you specialise in?',
        a: 'Our team covers React, Next.js, Node.js, Python, React Native, AWS, GCP, and more. We select the right stack for your needs.',
    },
    {
        q: 'Do you provide post-launch support?',
        a: 'Yes — we offer flexible maintenance plans and dedicated support tiers to keep your product running flawlessly.',
    },
];

const ContactPageContent: React.FC = () => {
    const { isDesktop, isMobile } = useDevice();
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    return (
        <>
            {/* Hero */}
            <section
                style={{
                    minHeight: isMobile ? '38vh' : '44vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: isMobile ? '8rem 1.5rem 3.5rem' : '10rem 2rem 4.5rem',
                    background: 'var(--gradient-hero)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
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
                    ✦ Get In Touch
                </span>
                <h1
                    className="animate-fade-in-up delay-100"
                    style={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        marginBottom: '1.25rem',
                        lineHeight: 1.1,
                        maxWidth: '700px',
                    }}
                >
                    Let&apos;s <span className="gradient-text">Work Together</span>
                </h1>
                <p
                    className="animate-fade-in-up delay-200"
                    style={{
                        maxWidth: '560px',
                        lineHeight: 1.75,
                    }}
                >
                    Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s bring
                    your vision to life — from concept to launch.
                </p>
            </section>

            {/* Main contact area */}
            <SectionWrapper id="contact" style={{ background: 'var(--bg-primary)' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: isDesktop ? 'row' : 'column',
                        gap: isDesktop ? '4rem' : '2.5rem',
                        alignItems: isDesktop ? 'flex-start' : 'stretch',
                    }}
                >
                    {/* Left – contact info */}
                    <div
                        className="animate-slide-left"
                        style={{ flex: isDesktop ? '1 1 40%' : '1 1 100%' }}
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

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                            {contactInfo.map((info) => (
                                <div
                                    key={info.label}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1rem 1.25rem',
                                        borderRadius: 'var(--radius-sm)',
                                        background: 'var(--bg-secondary)',
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
                                    <span
                                        style={{ fontSize: '1.3rem', transition: 'filter 0.3s', filter: 'grayscale(100%) brightness(0)' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) brightness(0)'; }}
                                    >
                                        {info.icon}
                                    </span>
                                    <div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 500, marginBottom: '0.15rem' }}>
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
                                height: '200px',
                                borderRadius: 'var(--radius-md)',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-muted)',
                                fontSize: '0.85rem',
                                flexDirection: 'column',
                                gap: '0.5rem',
                            }}
                        >
                            <span style={{ fontSize: '2rem' }}>🗺️</span>
                            Map Integration Coming Soon
                        </div>
                    </div>

                    {/* Right – contact form */}
                    <div
                        className="animate-slide-right"
                        style={{ flex: isDesktop ? '1 1 60%' : '1 1 100%' }}
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

            {/* FAQ section */}
            <SectionWrapper id="contact-faq" style={{ background: 'var(--bg-secondary)' }}>
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
                        Common Questions
                    </span>
                    <h2
                        className="animate-fade-in-up delay-100"
                        style={{ fontFamily: 'var(--font-outfit), sans-serif', margin: '0.75rem 0' }}
                    >
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <div className="section-divider animate-fade-in-up delay-100" />
                </div>

                <div
                    style={{
                        maxWidth: '720px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="glass-card animate-fade-in-up"
                            style={{
                                padding: '1.25rem 1.5rem',
                                cursor: 'pointer',
                                borderRadius: 'var(--radius-md)',
                                animationDelay: `${0.1 + i * 0.08}s`,
                            }}
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}
                            >
                                <span style={{ fontWeight: 600, fontSize: '0.95rem', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                    {faq.q}
                                </span>
                                <span
                                    style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 300,
                                        flexShrink: 0,
                                        transition: 'transform var(--transition-fast)',
                                        transform: openFaq === i ? 'rotate(45deg)' : 'none',
                                    }}
                                >
                                    +
                                </span>
                            </div>
                            {openFaq === i && (
                                <p
                                    style={{
                                        marginTop: '0.75rem',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.7,
                                        color: 'var(--text-muted)',
                                    }}
                                >
                                    {faq.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
};

export default ContactPageContent;
