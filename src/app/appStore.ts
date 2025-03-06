import { questionsApi } from '@/entities/questions/api/questionsApi';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './appReducer';
import { filtersApi } from '@/features/filters/api/filtersApi';
import { questionApi } from '@/entities/question/api/questionApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      questionsApi.middleware,
      filtersApi.middleware,
      questionApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
