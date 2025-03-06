import questionsReducer from '@/entities/questions/model/questionsSlice';

import filtersReducer from '@/entities/filters/model/FiltersSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api/baseApi';

export const rootReducer = combineReducers({
  questions: questionsReducer,
  filters: filtersReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
