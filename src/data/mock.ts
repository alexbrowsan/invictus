import type { Zone, Task } from '../types';

export const MOCK_ZONES: Zone[] = [
    { id: 1, name: 'Рецепция', time: '07:00', status: 'DONE' },
    { id: 2, name: 'Кардио зона', time: '13:00', status: 'DONE' },
    { id: 3, name: 'Раздевалки', time: '17:00', status: 'PENDING' },
    { id: 4, name: 'Туалет', time: '21:00', status: 'LOCKED' },
];

export const MOCK_TASKS: Task[] = [
    { id: 1, title: 'Проверить расходники в туалетах', completed: false },
    { id: 2, title: 'Замена полотенец в VIP', completed: true },
    { id: 3, title: 'Проверка датчиков сауны', completed: false },
    { id: 4, title: 'Пополнение воды на рецепции', completed: false },
    { id: 5, title: 'Клининг кардио зоны', completed: true },
];

export const TEMPERATURE_SENSORS = [
    { id: 1, name: 'Сауна (Мужская)', location: 'Зона SPA', range: '85-95°C' },
    { id: 2, name: 'Сауна (Женская)', location: 'Зона SPA', range: '85-95°C' },
    { id: 3, name: 'Зона SPA (Общая)', location: 'Зона SPA', range: '24-26°C' },
    { id: 4, name: 'Зал групповых программ', location: '2 этаж', range: '20-22°C' },
];

export const CHECKLIST_ITEMS = [
    'Чистота пола', 'Наличие полотенец', 'Исправность тренажеров', 'Мусорные баки пусты'
];
