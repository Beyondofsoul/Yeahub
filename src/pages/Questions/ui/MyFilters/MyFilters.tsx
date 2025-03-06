import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { useGetSpesializationsQuery, useGetSkillsQuery } from '@/entities/filters/api/filtersApi';
import { Search } from '@/entities/filters';

import { MyFiltersProfessional, MyFiltersRange } from '@/widgets/filters';

import { setFiltersQuestions } from '@/entities/questions/model/questionsSlice';

function MyFilters() {
  const limitSpecializations = useAppSelector(
    (state) => state.filters.filters.limitSpecializations,
  );
  const limitSkills = useAppSelector((state) => state.filters.filters.limitSkills);
  const dispatch = useAppDispatch();
  const keywords = useAppSelector((state) => state.questions.filters.title);

  const { data: specializations, isLoading: isLoadingSpecializations } =
    useGetSpesializationsQuery(limitSpecializations);
  const { data: skills, isLoading: isLoadingSkills } = useGetSkillsQuery(limitSkills);

  const isLoading = isLoadingSpecializations || isLoadingSkills;

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <section className={styles.filters}>
      <Search
        keywords={keywords}
        setKeywords={(keywords) => dispatch(setFiltersQuestions({ key: 'title', value: keywords }))}
      />
      <MyFiltersProfessional
        specializations={specializations.data}
        skills={skills.data}
        total={specializations.total}
      />
      <MyFiltersRange />
    </section>
  );
}

export default MyFilters;
