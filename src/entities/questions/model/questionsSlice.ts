import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    page: 1,
    specialization: null,
    skills: null,
    title: '',
    rate: [1, 2, 3, 4, 5],
    complexity: [1, 2, 3],
  },
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setFiltersQuestions: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>,
    ) => {
      const { key, value } = action.payload;

      state.filters = { ...state.filters, [key]: value };
    },
    setFilterRate: (state, action: PayloadAction<number>) => {
      const value = action.payload;
      const rateIndex = state.filters.rate.indexOf(value);
      if (rateIndex === -1) {
        state.filters.rate.push(value);
      } else {
        state.filters.rate.splice(rateIndex, 1);
      }
    },
    setFilterComplexity: (state, action: PayloadAction<number>) => {
      const value = action.payload;

      const complexityIndex = state.filters.complexity.findIndex(
        (complexity) => JSON.stringify(complexity) === JSON.stringify(value),
      );
      if (complexityIndex === -1) {
        state.filters.complexity.push(value);
      } else {
        state.filters.complexity.splice(complexityIndex, 1);
      }
    },
  },
});

export const { setFiltersQuestions, setFilterRate, setFilterComplexity } = questionsSlice.actions;

export default questionsSlice.reducer;
