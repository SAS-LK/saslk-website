'use client';

import React from 'react';

interface SectionWrapperProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', style }) => {
    return (
        <section
            id={id}
            className={className}
            style={{
                paddingTop: 'var(--section-padding-y)',
                paddingBottom: 'var(--section-padding-y)',
                paddingLeft: 'var(--section-padding-x)',
                paddingRight: 'var(--section-padding-x)',
                ...style,
            }}
        >
            <div
                style={{
                    maxWidth: 'var(--container-max)',
                    margin: '0 auto',
                    width: '100%',
                }}
            >
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
