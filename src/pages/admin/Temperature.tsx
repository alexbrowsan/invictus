import { useState } from 'react';
import { Card, Button, Input } from '../../components/ui';
import { Thermometer, Save } from 'lucide-react';
import { TEMPERATURE_SENSORS } from '../../data/mock';

export const TemperaturePage = () => {
    const [readings, setReadings] = useState<Record<number, string>>({});

    const handleSave = () => {
        console.log('Saving readings:', readings);
        alert('Показания сохранены');
    };

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl">Замеры t°C</h2>

            <div className="flex flex-col gap-4">
                {TEMPERATURE_SENSORS.map((sensor) => (
                    <Card key={sensor.id} className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div style={{ background: '#111', padding: '8px' }}>
                                    <Thermometer size={20} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase' }}>{sensor.name}</p>
                                    <p className="text-xs text-secondary">{sensor.location}</p>
                                </div>
                            </div>
                            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#555' }}>НОРМА: {sensor.range}</span>
                        </div>

                        <div className="flex gap-3">
                            <Input
                                type="number"
                                placeholder="Введите t°C"
                                value={readings[sensor.id] || ''}
                                onChange={(e) => setReadings({ ...readings, [sensor.id]: e.target.value })}
                            />
                            <div style={{
                                background: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 16px',
                                fontWeight: 900
                            }}>
                                °C
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <Button icon={Save} onClick={handleSave} fullWidth>
                Зафиксировать все данные
            </Button>
        </div>
    );
};
