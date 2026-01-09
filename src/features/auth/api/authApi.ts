import { baseApi } from '@/shared/api/baseApi';
import { LoginRequest, LoginResponse } from '../model/types';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ username, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { username, password },
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useLogoutMutation } = authApi;
export default authApi;
