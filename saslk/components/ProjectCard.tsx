'use client';

import React from 'react';

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    tags: string[];
    color?: string;
    delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    category,
    description,
    tags,
    color = 'var(--accent-primary)',
    delay = 0,
}) => {
    const [hovered, setHovered] = React.useState(false);

    const cardStyle: React.CSSProperties = {
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        position: 'relative',
        animation: `fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`,
        opacity: 0,
    };

    const imageAreaStyle: React.CSSProperties = {
        height: '220px',
        background: '#f1f5f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    };

    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(135deg, ${color}cc, ${color}88)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: hovered ? 1 : 0,
        transition: 'opacity var(--transition-base)',
    };

    const patternStyle: React.CSSProperties = {
        fontSize: '4rem',
        opacity: 0.2,
        position: 'absolute',
    };

    return (
        <div
            className="glass-card"
            style={cardStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={imageAreaStyle}>
                {/* Decorative pattern */}
                <span style={{ ...patternStyle, top: '20px', left: '20px' }}>◇</span>
                <span style={{ ...patternStyle, bottom: '20px', right: '20px', fontSize: '3rem' }}>△</span>
                <span style={{
                    fontSize: '2.5rem',
                    color: '#000000',
                    fontWeight: 800,
                    fontFamily: 'var(--font-outfit), sans-serif',
                    letterSpacing: '0.05em',
                    zIndex: 1,
                }}>
                    {title.charAt(0)}
                </span>

                <div style={overlayStyle}>
                    <span style={{
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '1rem',
                        padding: '0.6rem 1.5rem',
                        border: '2px solid #fff',
                        borderRadius: 'var(--radius-full)',
                    }}>
                        View Details
                    </span>
                </div>
            </div>

            <div style={{ padding: '1.5rem' }}>
                <span style={{
                    color: '#000000',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                }}>
                    {category}
                </span>
                <h3 style={{
                    fontSize: '1.15rem',
                    margin: '0.5rem 0',
                    fontFamily: 'var(--font-outfit), sans-serif',
                }}>
                    {title}
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: 'var(--radius-full)',
                                background: 'rgba(0, 0, 0, 0.05)',
                                color: 'var(--text-primary)',
                                fontSize: '0.75rem',
                                fontWeight: 500,
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
