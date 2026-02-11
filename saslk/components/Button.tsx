'use client';

import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    href?: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    style,
}) => {
    const sizeStyles: Record<string, React.CSSProperties> = {
        sm: { padding: '0.5rem 1.25rem', fontSize: '0.85rem' },
        md: { padding: '0.75rem 2rem', fontSize: '0.95rem' },
        lg: { padding: '1rem 2.5rem', fontSize: '1.05rem' },
    };

    const variantStyles: Record<string, React.CSSProperties> = {
        primary: {
            background: '#000000',
            color: '#ffffff',
            border: 'none',
        },
        secondary: {
            background: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
        },
        outline: {
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--text-primary)',
        },
    };

    const baseStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        borderRadius: 'var(--radius-full)',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
        letterSpacing: '0.025em',
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-2px)';
        if (variant === 'primary') {
            el.style.background = 'var(--gradient-brand-hover)';
            el.style.color = '#000';
            el.style.boxShadow = 'var(--shadow-glow-lg)';
        } else if (variant === 'secondary') {
            el.style.borderColor = 'var(--accent-primary)';
            el.style.boxShadow = 'var(--shadow-glow)';
        } else {
            el.style.background = 'var(--accent-primary)';
            el.style.borderColor = 'var(--accent-primary)';
            el.style.color = '#000';
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
        if (variant === 'primary') {
            el.style.background = '#000000';
            el.style.color = '#ffffff';
        } else if (variant === 'secondary') {
            el.style.borderColor = 'var(--border-subtle)';
        } else {
            el.style.background = 'transparent';
            el.style.borderColor = 'var(--text-primary)';
            el.style.color = 'var(--text-primary)';
        }
    };

    if (href) {
        return (
            <a
                href={href}
                style={baseStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            style={baseStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </button>
    );
};

export default Button;
