import { paramsType } from '@/shared/interfaces';

import { baseApi } from '@/shared/api/baseApi';

const questionsApi = baseApi.injectEndpoints({
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
      providesTags: ['Questions'],
    }),
    getQuestionById: builder.query({
      query: (id) => {
        return {
          url: `questions/public-questions/${id}`,
          params: {
            id: id,
          },
        };
      },
      providesTags: ['Questions'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi;
export default questionsApi;
