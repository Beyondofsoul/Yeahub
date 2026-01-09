import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { QuestionsPage } from '@/pages/Questions';
import Question from '@/pages/Question/ui/Page';
import AuthPage from '@/pages/AuthPage/ui/Page';
import { ProtectedRouteAuth } from '@/pages/AuthPage';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: '/auth', element: <AuthPage /> },
      {
        path: '/questions',
        element: (
          <ProtectedRouteAuth>
            <QuestionsPage />
          </ProtectedRouteAuth>
        ),
      },
      {
        path: '/questions/:questionId',
        element: (
          <ProtectedRouteAuth>
            <Question />
          </ProtectedRouteAuth>
        ),
      },
    ],
  },
]);
