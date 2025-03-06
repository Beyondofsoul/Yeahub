import { baseApi } from '@/shared/api/baseApi';

const filtersApi = baseApi.injectEndpoints({
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
      providesTags: ['Filters'],
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
      providesTags: ['Filters'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpesializationsQuery, useGetSkillsQuery } = filtersApi;
export default filtersApi;
