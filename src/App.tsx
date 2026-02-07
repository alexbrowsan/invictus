import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { ShiftPage } from './pages/admin/Shift';

import { ChecklistsPage } from './pages/admin/Checklist';
import { TasksPage } from './pages/supervisor/Tasks';
import { DashboardPage } from './pages/manager/Dashboard';
import { AccessPage } from './pages/manager/Access';

const AppRoutes = () => {
  const { user } = useAuth();

  if (!user) return <Login />;

  const getRedirectPath = () => {
    switch (user.role) {
      case 'MANAGER': return "/manager/dashboard";
      case 'SUPERVISOR': return "/sup/tasks";
      case 'ADMIN': return "/admin/shift";
      default: return "/";
    }
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={getRedirectPath()} replace />} />

        {/* Role Specific Routes */}
        <Route path="/admin/shift" element={<ShiftPage />} />

        <Route path="/admin/checklists" element={<ChecklistsPage />} />
        <Route path="/sup/tasks" element={<TasksPage />} />
        <Route path="/manager/dashboard" element={<DashboardPage />} />
        <Route path="/manager/access" element={<AccessPage />} />
        <Route path="/manager/library" element={<div className="flex items-center justify-center h-[60vh] text-secondary uppercase font-bold">Здесь будет библиотека</div>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
