import { PaginationProps } from './model/types';
import styles from './styles.module.css';
import arrowLeft from '@/shared/assets/Arrow Left.svg';
import arrowRight from '@/shared/assets/Arrow RightPagination.svg';

function PaginationButtons({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currentPage,
}: PaginationProps) {
  const showDots = totalPages > 6;
  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} disabled={currentPage <= 1} onClick={handlePrevPage}>
        <img src={arrowLeft} alt="arr" />
      </button>

      <div className={styles.list}>
        <button
          onClick={() => handlePageClick(1)}
          className={`${styles.pageNumber} ${currentPage === 1 ? styles.active : ''}`}
        >
          1
        </button>
        {showDots && currentPage > 4 && <span className={styles.dots}>...</span>}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          if (page > 1 && page < totalPages && Math.abs(page - currentPage) <= 5) {
            return (
              <button
                key={index}
                onClick={() => handlePageClick(page)}
                className={`${styles.pageNumber} ${currentPage === page ? styles.active : ''}`}
              >
                {page}
              </button>
            );
          }
          return null;
        })}
        {showDots && currentPage < totalPages - 2 && <span className={styles.dots}>...</span>}
        {totalPages > 1 && (
          <button
            onClick={() => handlePageClick(totalPages)}
            className={`${styles.pageNumber} ${currentPage === totalPages ? styles.active : ''}`}
          >
            {totalPages}
          </button>
        )}
      </div>

      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        <img src={arrowRight} alt="arr" />
      </button>
    </div>
  );
}

export default PaginationButtons;
