import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '@/app/appStore';

import { RangeFilter } from '@/features/filters';

import { setFilterComplexity, setFilterRate } from '@/entities/questions/model/questionsSlice';
import { DIFFICULTY_ITEMS, RATING_ITEMS } from '@/shared/constants/constants';

function MyFiltersRange() {
  const selected = useAppSelector((state) => state.questions.filters);
  const dispatch = useAppDispatch();

  const handleSave = (arg: number | number[]) => {
    if (Array.isArray(arg)) {
      dispatch(setFilterComplexity(arg as unknown as number));
    } else {
      dispatch(setFilterRate(arg as number));
    }
  };

  return (
    <section className={styles.filters}>
      <RangeFilter
        title="Уровень сложности"
        items={DIFFICULTY_ITEMS}
        selectedValue={selected.complexity.length > 0 ? selected.complexity : null}
        handleSave={handleSave}
      />
      <RangeFilter
        title="Рейтинг"
        items={RATING_ITEMS}
        handleSave={handleSave}
        selectedValue={selected.rate.length > 0 ? selected.rate : null}
      />
    </section>
  );
}

export default MyFiltersRange;
