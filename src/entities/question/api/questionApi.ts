import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_YEAHUB_BASE_API_URL;

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getQuestionById: builder.query({
      query: (id) => {
        return {
          url: `questions/public-questions/${id}`,
          id: id,
        };
      },
    }),
  }),
});

export const { useGetQuestionByIdQuery } = questionApi;
