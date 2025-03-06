import { questionApi } from '@/entities/question/api/questionApi';
import { questionsApi } from '@/entities/questions/api/questionsApi';
import questionsReducer from '@/entities/questions/model/questionsSlice';
import { filtersApi } from '@/features/filters/api/filtersApi';
import filtersReducer from '@/features/filters/model/FiltersSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  questions: questionsReducer,
  filters: filtersReducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
  [filtersApi.reducerPath]: filtersApi.reducer,
  [questionApi.reducerPath]: questionApi.reducer,
});
