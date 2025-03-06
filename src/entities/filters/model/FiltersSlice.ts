import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    limitSpecializations: 5,
    limitSkills: 8,
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<{ key: string; value: string | null | number }>) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
