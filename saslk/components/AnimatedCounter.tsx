'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    target: number;
    label: string;
    suffix?: string;
    duration?: number;
    icon?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    target,
    label,
    suffix = '',
    duration = 2000,
    icon,
}) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(step);
    }, [hasStarted, target, duration]);

    return (
        <div
            ref={ref}
            style={{
                textAlign: 'center',
                padding: '1.5rem',
            }}
        >
            {icon && (
                <div
                    style={{ fontSize: '2rem', marginBottom: '0.75rem', filter: 'grayscale(100%) brightness(0)', transition: 'filter 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.filter = 'none'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) brightness(0)'; }}
                >
                    {icon}
                </div>
            )}
            <div
                style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-outfit), sans-serif',
                    color: '#000000',
                    background: 'none',
                    WebkitTextFillColor: 'initial',
                    lineHeight: 1.2,
                    cursor: 'default',
                    transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gradient-brand)';
                    e.currentTarget.style.webkitBackgroundClip = 'text';
                    e.currentTarget.style.webkitTextFillColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.webkitTextFillColor = 'initial';
                    e.currentTarget.style.color = '#000000';
                }}
            >
                {count}{suffix}
            </div>
            <div
                style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem',
                    fontWeight: 500,
                }}
            >
                {label}
            </div>
        </div>
    );
};

export default AnimatedCounter;
