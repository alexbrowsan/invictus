import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
    icon?: React.ElementType;
    fullWidth?: boolean;
}

export const Button = ({
    children,
    variant = 'primary',
    icon: Icon,
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) => {
    const baseStyles = {
        padding: '12px 20px',
        borderRadius: 'var(--radius-md)',
        fontWeight: 600,
        fontSize: '0.95rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'all 0.2s ease',
    };

    const variants = {
        primary: {
            background: 'var(--accent-gradient)',
            color: '#fff',
            textTransform: 'uppercase' as const,
            letterSpacing: '1px',
            border: 'none',
        },
        secondary: {
            background: 'rgba(255,255,255,0.05)',
            color: 'var(--color-text-primary)',
            border: '1px solid rgba(255,255,255,0.1)',
        },
        outline: {
            background: 'transparent',
            border: '1px solid var(--color-primary)',
            color: 'white',
        },
        danger: {
            background: 'rgba(255, 23, 68, 0.1)',
            color: 'var(--color-danger)',
            border: '1px solid var(--color-danger)',
        },
        ghost: {
            background: 'transparent',
            color: 'var(--color-text-secondary)',
        }
    };

    return (
        <button
            style={{
                ...baseStyles,
                ...variants[variant],
                width: fullWidth ? '100%' : 'auto',
                borderRadius: variant === 'primary' ? '0px' : 'var(--radius-md)',
            }}
            className={className}
            {...props}
        >
            {Icon && <Icon size={18} strokeWidth={2.5} />}
            <span style={{ fontWeight: 800 }}>{children}</span>
        </button>
    );
};
