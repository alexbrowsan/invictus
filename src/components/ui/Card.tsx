import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Card = ({ children, className = '', onClick, style, ...props }: CardProps) => (
    <div
        onClick={onClick}
        style={{
            background: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-sm)',
            padding: '20px',
            borderLeft: onClick ? '4px solid transparent' : '1px solid rgba(255,255,255,0.05)',
            transition: 'all 0.2s ease',
            cursor: onClick ? 'pointer' : 'default',
            ...style
        }}
        className={className}
        onMouseEnter={(e) => {
            if (onClick) {
                e.currentTarget.style.borderLeftColor = 'var(--color-primary)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
            }
        }}
        onMouseLeave={(e) => {
            if (onClick) {
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.background = 'var(--color-bg-card)';
            }
        }}
        {...props}
    >
        {children}
    </div>
);
