import type { Zone, Task } from '../types';

export const MOCK_ZONES: Zone[] = [
    { id: 1, name: 'Рецепция', time: '08:00', status: 'DONE' },
    { id: 2, name: 'Кардио зона', time: '10:00', status: 'DONE' },
    { id: 3, name: 'Раздевалки', time: '12:00', status: 'PENDING' },
    { id: 4, name: 'Бассейн', time: '14:00', status: 'LOCKED' },
];

export const MOCK_TASKS: Task[] = [
    { id: 1, title: 'Проверить воду в бассейне', status: 'Pending', time: '10:00' },
    { id: 2, title: 'Замена полотенец в VIP', status: 'Completed', time: '09:30' },
    { id: 3, title: 'Проверка датчиков сауны', status: 'Overdue', time: '08:00' },
];

export const TEMPERATURE_SENSORS = [
    { id: 1, name: 'Сауна (Мужская)', location: 'Зона SPA', range: '85-95°C' },
    { id: 2, name: 'Сауна (Женская)', location: 'Зона SPA', range: '85-95°C' },
    { id: 3, name: 'Бассейн (Вода)', location: 'Зона Aqua', range: '27-29°C' },
    { id: 4, name: 'Зал групповых программ', location: '2 этаж', range: '20-22°C' },
];

export const CHECKLIST_ITEMS = [
    'Чистота пола', 'Наличие полотенец', 'Исправность тренажеров', 'Мусорные баки пусты'
];
