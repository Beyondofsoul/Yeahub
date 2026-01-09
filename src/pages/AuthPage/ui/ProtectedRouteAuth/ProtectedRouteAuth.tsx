import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/appStore';

interface ProtectedRouteAuthProps {
  children: React.ReactNode;
}

export const ProtectedRouteAuth = ({ children }: ProtectedRouteAuthProps) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
