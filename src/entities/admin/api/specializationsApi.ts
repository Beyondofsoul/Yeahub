import { baseApi } from '@/shared/api/baseApi';
import type { GetSpecializationsParams, SpecializationsResponse } from '../model/types';

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationsResponse, GetSpecializationsParams | void>({
      query: (params) => ({
        url: '/specializations',
        method: 'GET',
        params: params ?? { page: 1, limit: 6 },
      }),
      providesTags: ['Specializations'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpecializationsQuery } = specializationsApi;
