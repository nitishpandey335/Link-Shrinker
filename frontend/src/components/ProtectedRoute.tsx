// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import type { JSX } from 'react/jsx-runtime';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" replace />; // Redirect to SignIn if no token
  }

  return children;
};

export default ProtectedRoute;
