import { Card } from '../../components/ui';
import { Users, Clock, ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { MOCK_ZONES } from '../../data/mock';

export const DashboardPage = () => {
    const { shiftInfo } = useAuth();

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl">Главная</h2>

            <h3 className="text-lg font-bold">Активные смены</h3>
            <Card style={{ borderLeft: '4px solid var(--color-primary)' }}>
                {shiftInfo ? (
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div style={{ background: '#111', padding: '10px' }}>
                                <Users size={20} color="var(--color-primary)" />
                            </div>
                            <div>
                                <p style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem' }}>{shiftInfo.adminName}</p>
                                <p className="text-xs text-secondary">Администратор (на смене)</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-1 justify-end" style={{ color: 'var(--color-primary)' }}>
                                <Clock size={14} />
                                <span style={{ fontWeight: 900, fontSize: '1rem' }}>{shiftInfo.startTime}</span>
                            </div>
                            <p className="text-[10px] text-secondary uppercase font-bold">Начало</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-secondary py-2 text-sm">Нет активных смен администраторов</p>
                )}
            </Card>

            <div className="flex justify-between items-center mt-2">
                <h3 className="text-lg font-bold">Чек-листы</h3>
                <span className="text-xs text-secondary uppercase font-bold tracking-wider">Обзор</span>
            </div>

            <div className="flex flex-col gap-3">
                {MOCK_ZONES.map((zone) => (
                    <Card key={zone.id}>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: zone.status === 'DONE' ? 'var(--color-success)' :
                                        zone.status === 'PENDING' ? 'var(--color-warning)' : '#333'
                                }} />
                                <div>
                                    <p style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem' }}>{zone.name}</p>
                                    <p className="text-[10px] text-secondary">{zone.time}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span style={{
                                    fontSize: '0.6rem',
                                    fontWeight: 900,
                                    padding: '3px 6px',
                                    background: zone.status === 'DONE' ? 'rgba(0,200,83,0.1)' : 'rgba(255,255,255,0.05)',
                                    color: zone.status === 'DONE' ? 'var(--color-success)' : '#555'
                                }}>
                                    {zone.status}
                                </span>
                                <ChevronRight size={14} className="text-secondary opacity-30" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
