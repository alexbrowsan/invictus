import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
    LayoutDashboard,
    CheckSquare,
    User as UserIcon,
    ClipboardList,
    ArrowLeft,
    Key,
    Library,
    Sun,
    Moon
} from 'lucide-react';

interface NavItemProps {
    path: string;
    icon: React.ElementType;
    label: string;
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    if (!user) return <>{children}</>;

    const isActive = (path: string) => location.pathname === path;

    const NavItem = ({ path, icon: Icon, label }: NavItemProps) => (
        <button
            onClick={() => navigate(path)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                color: isActive(path) ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                fontSize: '0.75rem',
                flex: 1,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-theme)'
            }}
        >
            <Icon size={24} />
            <span style={{ fontWeight: isActive(path) ? 700 : 400 }}>{label}</span>
        </button>
    );

    const navigationItems = {
        ADMIN: [
            { path: '/admin/shift', icon: UserIcon, label: 'Смена' },
            { path: '/admin/checklists', icon: CheckSquare, label: 'Чек-листы' },
        ],
        SUPERVISOR: [
            { path: '/sup/tasks', icon: ClipboardList, label: 'Задачи' },
        ],
        MANAGER: [
            { path: '/manager/dashboard', icon: LayoutDashboard, label: 'Дашборд' },
            { path: '/manager/access', icon: Key, label: 'Доступы' },
            { path: '/manager/library', icon: Library, label: 'Библиотека' },
        ]
    };

    const currentNav = navigationItems[user.role as keyof typeof navigationItems] || [];

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            minHeight: '100vh',
            paddingBottom: '80px',
            position: 'relative',
            background: 'var(--color-bg-primary)',
            transition: 'var(--transition-theme)'
        }}>
            <header style={{
                padding: '20px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--color-bg-secondary)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                position: 'sticky',
                top: 0,
                zIndex: 10,
                transition: 'var(--transition-theme)'
            }}>
                <button
                    onClick={logout}
                    style={{ background: 'none', border: 'none', color: 'var(--color-text-primary)', cursor: 'pointer', padding: '4px' }}
                >
                    <ArrowLeft size={24} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                        onClick={toggleTheme}
                        style={{ color: 'var(--color-text-primary)', padding: '4px' }}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <div style={{ textAlign: 'right' }}>
                        <h1 style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.5px', color: 'var(--color-text-primary)' }}>
                            INVICTUS <span style={{ color: 'var(--color-primary)' }}>GO</span>
                        </h1>
                        <p className="text-sm text-secondary" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.65rem', fontWeight: 700 }}>
                            {user.name}
                        </p>
                    </div>
                </div>
            </header>

            <main style={{ padding: '16px' }}>
                {children}
            </main>

            <nav style={{
                position: 'fixed',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '600px',
                background: 'var(--color-bg-card)',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                padding: '12px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '24px',
                transition: 'var(--transition-theme)'
            }}>
                {currentNav.map((item) => (
                    <NavItem key={item.path} {...item} />
                ))}
            </nav>
        </div>
    );
};
