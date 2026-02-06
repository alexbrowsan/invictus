import React from 'react';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
        style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'white',
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            width: '100%',
            outline: 'none',
            fontSize: '1rem'
        }}
        {...props}
    />
);
