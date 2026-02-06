import React, { createContext, useContext, useState } from 'react';
import type { User, UserRole, ShiftInfo } from '../types';

interface AuthContextType {
    user: User | null;
    shiftInfo: ShiftInfo | null;
    login: (role: UserRole) => void;
    logout: () => void;
    startShift: (name: string, time: string) => void;
    endShift: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [shiftInfo, setShiftInfo] = useState<ShiftInfo | null>(null);

    const login = (role: UserRole) => {
        const mockUsers: Record<UserRole, User> = {
            MANAGER: { name: 'Александр (Рук)', role: 'MANAGER' },
            SUPERVISOR: { name: 'Иван (Упр)', role: 'SUPERVISOR' },
            ADMIN: { name: 'Мария (Адм)', role: 'ADMIN' },
        };
        setUser(mockUsers[role]);
    };

    const logout = () => setUser(null);

    const startShift = (adminName: string, startTime: string) => {
        setShiftInfo({ adminName, startTime });
    };

    const endShift = () => setShiftInfo(null);

    return (
        <AuthContext.Provider value={{ user, shiftInfo, login, logout, startShift, endShift }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
