import { useState } from 'react';
import { Card } from '../../components/ui';
import { CheckCircle2, Circle } from 'lucide-react';
import { MOCK_TASKS } from '../../data/mock';
import type { Task } from '../../types';

export const TasksPage = () => {
    const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

    const toggleTask = (id: number) => {
        setTasks(prev => prev.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-end">
                <h2 className="text-xl">Задачи</h2>
                <span className="text-xs text-secondary font-bold uppercase tracking-wider">
                    Выполнено: {tasks.filter(t => t.completed).length} / {tasks.length}
                </span>
            </div>

            <div className="flex flex-col gap-3">
                {tasks.map((task) => (
                    <Card
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        style={{
                            padding: '16px',
                            borderLeft: task.completed ? '4px solid var(--color-success)' : '4px solid #222',
                            opacity: task.completed ? 0.7 : 1,
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <span style={{
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                textTransform: 'uppercase',
                                textDecoration: task.completed ? 'line-through' : 'none',
                                color: task.completed ? 'var(--color-text-secondary)' : 'var(--color-text-primary)'
                            }}>
                                {task.title}
                            </span>
                            {task.completed ? (
                                <CheckCircle2 color="var(--color-success)" size={24} />
                            ) : (
                                <Circle color="#333" size={24} />
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
