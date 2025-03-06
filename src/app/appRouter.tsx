import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { QuestionsPage } from '@/pages/Questions';
import Question from '@/pages/Question/ui/Page';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: '/', element: <QuestionsPage /> },
      { path: '/:questionId', element: <Question /> },
    ],
  },
]);
