import { Card } from '../../components/ui';
import { Users, AlertTriangle, Clock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

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

            <h3 className="text-lg font-bold mt-2">Проблемные зоны</h3>
            <div className="flex flex-col gap-3">
                <Card className="flex items-center gap-4" style={{ borderLeft: '4px solid var(--color-danger)' }}>
                    <AlertTriangle color="var(--color-danger)" />
                    <div>
                        <p className="font-bold">Датчик #3 (Сауна)</p>
                        <p className="text-sm text-secondary">Температура выше нормы (95°C)</p>
                    </div>
                </Card>
                <Card className="flex items-center gap-4" style={{ borderLeft: '4px solid var(--color-warning)' }}>
                    <AlertTriangle color="var(--color-warning)" />
                    <div>
                        <p className="font-bold">Раздевалка М</p>
                        <p className="text-sm text-secondary">Чек-лист просрочен на 15 мин</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};
