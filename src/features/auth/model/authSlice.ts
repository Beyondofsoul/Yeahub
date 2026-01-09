import {
  getFromLS,
  removeFromLS,
  setToLS,
} from '@/shared/helpers/manageLocalStorage/manageLocalStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../model/types';

const initialState: AuthState = {
  token: getFromLS('token') || null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: User }>) => {
      const { token, user } = action.payload;

      state.token = token;
      state.user = user;

      setToLS('token', token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;

      removeFromLS('token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
