export type UserRole = 'MANAGER' | 'SUPERVISOR' | 'ADMIN';

export interface User {
    name: string;
    role: UserRole;
    avatar?: string;
}

export interface ShiftInfo {
    adminName: string;
    startTime: string;
}

export interface Zone {
    id: number;
    name: string;
    time: string;
    status: 'DONE' | 'PENDING' | 'LOCKED';
}

export interface Task {
    id: number;
    title: string;
    status: 'Pending' | 'Completed' | 'Overdue';
    time: string;
}

export interface TemperatureLog {
    sensorId: number;
    value: string;
    timestamp: string;
}
