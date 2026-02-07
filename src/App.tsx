import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { ShiftPage } from './pages/admin/Shift';

import { ChecklistsPage } from './pages/admin/Checklist';
import { TasksPage } from './pages/supervisor/Tasks';
import { DashboardPage } from './pages/manager/Dashboard';

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

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
