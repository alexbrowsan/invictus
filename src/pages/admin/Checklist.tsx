import { useState } from 'react';
import { Card, Button } from '../../components/ui';
import { Check, ChevronRight } from 'lucide-react';
import { MOCK_ZONES, CHECKLIST_ITEMS } from '../../data/mock';

export const ChecklistsPage = () => {
    const [selectedZone, setSelectedZone] = useState<number | null>(null);
    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    const toggleItem = (item: string) => {
        setCheckedItems(prev =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    };

    if (selectedZone) {
        const zone = MOCK_ZONES.find(z => z.id === selectedZone);
        return (
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <button onClick={() => setSelectedZone(null)} className="text-secondary">
                        Назад
                    </button>
                    <h2 className="text-xl">{zone?.name}</h2>
                </div>

                <div className="flex flex-col gap-3">
                    {CHECKLIST_ITEMS.map((item) => (
                        <Card
                            key={item}
                            onClick={() => toggleItem(item)}
                            style={{
                                padding: '16px',
                                borderLeft: checkedItems.includes(item) ? '4px solid var(--color-success)' : '4px solid transparent'
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <span style={{ fontWeight: 600 }}>{item}</span>
                                {checkedItems.includes(item) && <Check size={20} color="var(--color-success)" />}
                            </div>
                        </Card>
                    ))}
                </div>

                <Button onClick={() => setSelectedZone(null)} fullWidth>
                    Сохранить обход
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl">Обход зон</h2>
            <div className="flex flex-col gap-3">
                {MOCK_ZONES.map((zone) => (
                    <Card
                        key={zone.id}
                        onClick={zone.status !== 'LOCKED' ? () => setSelectedZone(zone.id) : undefined}
                        className={zone.status === 'LOCKED' ? 'opacity-50' : ''}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: zone.status === 'DONE' ? 'var(--color-success)' :
                                        zone.status === 'PENDING' ? 'var(--color-warning)' : '#333'
                                }} />
                                <div>
                                    <p style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem' }}>{zone.name}</p>
                                    <p className="text-xs text-secondary">{zone.time}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span style={{
                                    fontSize: '0.65rem',
                                    fontWeight: 900,
                                    padding: '4px 8px',
                                    background: zone.status === 'DONE' ? 'rgba(0,200,83,0.1)' : 'rgba(255,255,255,0.05)',
                                    color: zone.status === 'DONE' ? 'var(--color-success)' : '#555'
                                }}>
                                    {zone.status}
                                </span>
                                {zone.status !== 'LOCKED' && <ChevronRight size={16} className="text-secondary" />}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
