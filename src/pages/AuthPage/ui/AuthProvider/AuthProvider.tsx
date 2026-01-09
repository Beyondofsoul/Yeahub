import { RootState } from '@/app/appStore';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthPage from '../Page';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) {
      console.log('🔍 Токен найден, пользователь авторизован');
    }
  }, [token]);

  if (!token) {
    return <AuthPage />;
  }

  return <>{children}</>;
};
