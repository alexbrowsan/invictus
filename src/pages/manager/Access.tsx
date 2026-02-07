import { Card } from '../../components/ui';
import { User, ShieldCheck } from 'lucide-react';

export const AccessPage = () => {
    const admins = [
        { name: 'Батырхан', role: 'Старший администратор' },
        { name: 'Арман', role: 'Администратор' },
        { name: 'Елена', role: 'Администратор' },
    ];

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl">Доступы</h2>

            <div className="flex flex-col gap-3">
                {admins.map((admin, idx) => (
                    <Card key={idx} style={{ padding: '16px' }}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div style={{
                                    background: '#111',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid #222'
                                }}>
                                    <User size={20} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem' }}>{admin.name}</p>
                                    <p className="text-xs text-secondary">{admin.role}</p>
                                </div>
                            </div>
                            <ShieldCheck size={20} color="var(--color-success)" className="opacity-50" />
                        </div>
                    </Card>
                ))}
            </div>

            <p className="text-[10px] text-secondary text-center uppercase font-bold tracking-widest mt-4">
                Управление правами доступа
            </p>
        </div>
    );
};
