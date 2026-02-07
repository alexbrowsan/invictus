import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/ui';
import { Shield, User as UserIcon, Briefcase } from 'lucide-react';
import type { UserRole } from '../types';

export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (role: UserRole) => {
        login(role);
        navigate('/');
    };

    const roles = [
        { id: 'MANAGER', title: 'Руководитель', sub: 'Full Dashboard', icon: Shield, color: 'var(--color-primary)' },
        { id: 'SUPERVISOR', title: 'Управляющий', sub: 'Tasks & Monitoring', icon: Briefcase, color: '#fff' },
        { id: 'ADMIN', title: 'Администратор', sub: 'Daily Checklist', icon: UserIcon, color: '#fff' },
    ];

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
            background: '#000'
        }}>
            <header style={{ marginBottom: '30px', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    margin: '0',
                    color: 'white',
                    letterSpacing: '-1px'
                }}>INVICTUS</h1>
                <div style={{
                    background: '#c11f24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '260px',
                    height: '200px',
                    marginTop: '5px',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 65%)',
                }}>
                    <span style={{
                        fontSize: '7rem',
                        fontWeight: 900,
                        fontFamily: "'Inter Tight', sans-serif",
                        color: 'white',
                        lineHeight: 1,
                        display: 'block',
                        transform: 'translateY(-15px)',
                        marginLeft: '5px' // Slight offset to look more centered with the slant
                    }}>GO</span>
                </div>
                <p style={{ marginTop: '20px', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.7rem', color: '#555', fontWeight: 700 }}>
                    Staff Control System
                </p>
            </header>

            <div style={{ width: '100%', maxWidth: '340px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{
                    textAlign: 'center',
                    color: 'var(--color-text-secondary)',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    letterSpacing: '1px'
                }}>
                    Выберите роль
                </p>

                {roles.map((role) => (
                    <Card key={role.id} onClick={() => handleLogin(role.id as UserRole)} style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ color: role.color }}>
                                <role.icon size={24} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 800, textTransform: 'uppercase', margin: 0 }}>{role.title}</p>
                                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', margin: 0 }}>{role.sub}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
