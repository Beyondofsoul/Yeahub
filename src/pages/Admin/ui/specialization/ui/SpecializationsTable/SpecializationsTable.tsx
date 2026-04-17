import { SpecializationCard } from '@/entities/admin';
import styles from './styles.module.css';
import img from '@/shared/assets/image 101.png';
import { useState } from 'react';
import { useGetSpecializationsQuery } from '@/entities/admin/api/specializationsApi';
import PaginationButtons from '@/shared/ui/pagination/ui/Pagination/Pagination';

export function SpecializationsTable() {
  const [selectAll, setSelectAll] = useState(false);

  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  const { data, isLoading, isError } = useGetSpecializationsQuery({
    page,
    limit,
  });

  const totalPages = data?.total ? Math.ceil(data.total / limit) : 0;
  const currentData = data?.data ?? [];

  if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
  if (isError) return <div className={styles.error}>Ошибка загрузки</div>;

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <label className={styles.checkboxHeader}>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            checked={selectAll}
            onChange={(e) => setSelectAll(e.target.checked)}
          />
          <span className={`${styles.checkboxFake} ${selectAll ? styles.checked : ''}`} />
        </label>
        <div className={styles.previewHeader}>Превью</div>
        <div className={styles.nameHeader}>Название</div>
        <div className={styles.descriptionHeader}>Описание</div>
        <div className={styles.descriptionHeader}>Навыки</div>
      </div>
      {currentData.map((spec) => (
        <SpecializationCard
          key={spec.id}
          specialization={{
            id: spec.id,
            name: spec.title,
            image: spec.imageSrc || img,
            description: spec.description,
            status: 'active',
          }}
        />
      ))}
      {totalPages > 1 && (
        <div className={styles.paginationWrapper}>
          <PaginationButtons
            totalPages={totalPages}
            currentPage={page}
            handlePageClick={handlePageClick}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </div>
      )}
    </div>
  );
}
