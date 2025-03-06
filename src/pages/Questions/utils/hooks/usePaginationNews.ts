import { useAppDispatch } from '@/app/appStore';
import { setFiltersQuestions } from '@/entities/questions/model/questionsSlice';
import { TOTAL_PAGES } from '@/shared/constants/constants';

export const usePaginationNews = (page: number) => {
  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    if (page < TOTAL_PAGES) {
      dispatch(setFiltersQuestions({ key: 'page', value: page + 1 }));
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setFiltersQuestions({ key: 'page', value: page - 1 }));
    }
  };
  const handlePageClick = (page: number) => {
    dispatch(setFiltersQuestions({ key: 'page', value: page }));
  };
  return { handleNextPage, handlePrevPage, handlePageClick };
};
