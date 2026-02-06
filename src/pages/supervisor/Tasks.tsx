import { Card } from '../../components/ui';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { MOCK_TASKS } from '../../data/mock';

export const TasksPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl">Задачи</h2>

            <div className="flex flex-col gap-3">
                {MOCK_TASKS.map((task) => (
                    <Card
                        key={task.id}
                        style={{
                            borderLeft: `4px solid ${task.status === 'Completed' ? 'var(--color-success)' :
                                    task.status === 'Overdue' ? 'var(--color-danger)' : 'var(--color-warning)'
                                }`
                        }}
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <p style={{ fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase' }}>{task.title}</p>
                                <div className="flex items-center gap-2 text-secondary">
                                    <Clock size={14} />
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>До {task.time}</span>
                                </div>
                            </div>
                            {task.status === 'Completed' ? (
                                <CheckCircle color="var(--color-success)" size={20} />
                            ) : task.status === 'Overdue' ? (
                                <AlertCircle color="var(--color-danger)" size={20} />
                            ) : (
                                <div style={{
                                    padding: '4px 8px',
                                    background: 'rgba(255,193,7,0.1)',
                                    color: 'var(--color-warning)',
                                    fontSize: '0.6rem',
                                    fontWeight: 900,
                                    textTransform: 'uppercase'
                                }}>
                                    Pending
                                </div>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
