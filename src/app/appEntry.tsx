import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../shared/index.css';
import { appRouter } from './appRouter';
import { RouterProvider } from 'react-router-dom';
import { store } from './appStore';
import { Provider } from 'react-redux';
import { AuthProvider } from '@/pages/AuthPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </Provider>
  </StrictMode>,
);
