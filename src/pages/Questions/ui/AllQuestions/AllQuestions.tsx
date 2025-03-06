import { useGetQuestionsQuery } from '@/entities/questions/api/questionsApi';
import styles from './styles.module.css';

import { useAppSelector } from '@/app/appStore';

import { usePaginationNews } from '../../utils/hooks/usePaginationNews';

import { QuestionsList } from '@/widgets/questions';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { Pagination } from '@/shared/ui/pagination/ui/Pagination';

function AllQuestions() {
  const filters = useAppSelector((state) => state.questions.filters);

  const debouncedKeywords = useDebounce(filters.title, 1500);
  const { handlePrevPage, handleNextPage, handlePageClick } = usePaginationNews(filters.page);
  const { data, isLoading } = useGetQuestionsQuery({ ...filters, title: debouncedKeywords });

  if (isLoading) {
    return <div className="">loading</div>;
  }
  return (
    <section className={styles.questions}>
      <h4 className={styles.title}>Вопросы</h4>
      {data.total > 0 ? (
        <>
          <QuestionsList questions={data.data} />
          <Pagination
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            totalPages={Math.ceil(data.total / 10)}
            currentPage={filters.page}
          />
        </>
      ) : (
        <div className="">Вопросы не найдены</div>
      )}
    </section>
  );
}

export default AllQuestions;
