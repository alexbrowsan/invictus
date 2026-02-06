import { useState } from 'react';
import { Card, Button } from '../../components/ui';
import { Clock, CheckCircle, Send } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const ShiftPage = () => {
    const { user, shiftInfo, startShift, endShift } = useAuth();
    const [showStatus, setShowStatus] = useState(false);

    if (user?.role !== 'ADMIN') {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center p-6">
                <p style={{ color: 'var(--color-primary)', fontWeight: 900, fontSize: '1.2rem', textTransform: 'uppercase' }}>
                    Доступ ограничен
                </p>
                <p className="text-secondary mt-2">Эта функция доступна только администраторам клуба.</p>
            </div>
        );
    }

    const isShiftActive = !!shiftInfo;

    const toggleShift = () => {
        if (!isShiftActive) {
            const now = new Date();
            const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            startShift(user?.name || 'Администратор', timeStr);
            setShowStatus(true);
            setTimeout(() => setShowStatus(false), 3000);
        } else {
            endShift();
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl">Моя Смена</h2>
                {isShiftActive && (
                    <span style={{
                        fontSize: '0.65rem',
                        background: 'rgba(0, 200, 83, 0.1)',
                        color: 'var(--color-success)',
                        padding: '4px 8px',
                        fontWeight: 900,
                        textTransform: 'uppercase'
                    }}>Online</span>
                )}
            </div>

            {showStatus && (
                <div style={{
                    background: 'var(--color-primary)',
                    color: 'white',
                    padding: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    animation: 'slideDown 0.3s ease'
                }}>
                    <Send size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    ДАННЫЕ ОТПРАВЛЕНЫ РУКОВОДИТЕЛЮ
                </div>
            )}

            <Card className="flex flex-col items-center justify-center py-12 gap-6" style={{ background: '#050505', border: '1px solid #111' }}>
                <div style={{
                    width: '200px',
                    height: '200px',
                    border: `1px solid ${isShiftActive ? 'var(--color-primary)' : '#222'}`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: isShiftActive ? 'rgba(193, 31, 36, 0.03)' : 'transparent',
                    transition: 'all 0.5s ease',
                    position: 'relative'
                }}>
                    {isShiftActive && (
                        <>
                            <div style={{ position: 'absolute', top: -1, left: -1, width: '30px', height: '30px', borderTop: '4px solid var(--color-primary)', borderLeft: '4px solid var(--color-primary)' }} />
                            <div style={{ position: 'absolute', bottom: -1, right: -1, width: '30px', height: '30px', borderBottom: '4px solid var(--color-primary)', borderRight: '4px solid var(--color-primary)' }} />
                        </>
                    )}

                    {isShiftActive ? (
                        <div className="text-center">
                            <span style={{ fontSize: '0.6rem', fontWeight: 900, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Operational</span>
                            <p style={{ fontSize: '3rem', fontWeight: 900, marginTop: '2px', letterSpacing: '-1px' }}>
                                {shiftInfo?.startTime || '00:00'}
                            </p>
                            <p style={{ fontSize: '0.6rem', color: '#555', marginTop: '5px', fontWeight: 700 }}>{user?.name}</p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <div style={{ width: '40px', height: '1px', background: '#333', margin: '0 auto 10px' }} />
                            <span style={{ fontWeight: 900, color: '#222', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem' }}>Standby</span>
                            <div style={{ width: '40px', height: '1px', background: '#333', margin: '10px auto 0' }} />
                        </div>
                    )}
                </div>

                <div className="w-full flex flex-col gap-3 px-6">
                    <Button
                        variant={isShiftActive ? 'danger' : 'primary'}
                        onClick={toggleShift}
                        fullWidth
                    >
                        {isShiftActive ? 'Завершить смену' : 'Начать смену'}
                    </Button>
                    {!isShiftActive && (
                        <p style={{ textAlign: 'center', fontSize: '10px', color: '#444', textTransform: 'uppercase', fontWeight: 700 }}>
                            Нажимая кнопку, вы фиксируете время прихода
                        </p>
                    )}
                </div>
            </Card>

            {isShiftActive && (
                <div className="grid gap-3 mt-4">
                    <Card style={{ padding: '15px' }}>
                        <div className="flex items-center gap-4">
                            <div style={{ background: '#111', padding: '10px' }}>
                                <Clock size={20} color="var(--color-primary)" />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 800, color: '#555' }}>Ближайший обход</p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 900 }}>14:00 <span style={{ color: '#c11f24', fontSize: '0.8rem' }}>· Через 25 мин</span></p>
                            </div>
                        </div>
                    </Card>
                    <Card style={{ padding: '15px' }}>
                        <div className="flex items-center gap-4">
                            <div style={{ background: '#111', padding: '10px' }}>
                                <CheckCircle size={20} color="var(--color-success)" />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 800, color: '#555' }}>Задачи на сегодня</p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 900 }}>3 / 5 <span style={{ color: '#444', fontSize: '0.8rem', fontWeight: 700 }}>Выполнено</span></p>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
};
