import { paramsType } from '@/shared/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_YEAHUB_BASE_API_URL;

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: (params) => {
        const { page = 1, specialization, skills, rate, complexity, title } = params || {};

        const isValidValue = (value: paramsType): boolean => {
          if (value === null || value === undefined) return false;
          if (Array.isArray(value) && value.length === 0) return false;
          return true;
        };
        const filteredParams = Object.fromEntries(
          Object.entries({ page, specialization, skills, rate, complexity, title }).filter(
            ([_, value]) => isValidValue(value),
          ),
        );
        return {
          url: 'questions/public-questions',
          params: filteredParams,
        };
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
