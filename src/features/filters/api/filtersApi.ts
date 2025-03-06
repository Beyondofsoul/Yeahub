import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_YEAHUB_BASE_API_URL;

export const filtersApi = createApi({
  reducerPath: 'filtersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSpesializations: builder.query({
      query: (limit) => {
        return {
          url: 'specializations',
          params: {
            limit: limit,
          },
        };
      },
    }),
    getSkills: builder.query({
      query: (limit) => {
        return {
          url: 'skills',
          params: {
            limit: limit,
          },
        };
      },
    }),
  }),
});

export const { useGetSpesializationsQuery, useGetSkillsQuery } = filtersApi;
