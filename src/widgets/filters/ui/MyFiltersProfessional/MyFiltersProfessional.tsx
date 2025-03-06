import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '@/app/appStore';

import { setFilters } from '@/features/filters/model/FiltersSlice';
import { setFiltersQuestions } from '@/entities/questions/model/questionsSlice';

import ProfessionalFilters from '@/features/filters/ui/ProfessionalFilters/ProfessionalFilters';
import { ISkills, ISpecializations } from '@/features/filters/model/types';

interface Props {
  specializations: ISpecializations[];
  skills: ISkills[];

  total: number;
}

function MyFiltersProfessional({ specializations, skills, total }: Props) {
  const selected = useAppSelector((state) => state.questions.filters);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters.filters);

  const handleShowSpecialization = () => {
    if (filters.limitSpecializations === total) {
      dispatch(setFilters({ key: 'limitSpecializations', value: 5 }));
    } else {
      dispatch(setFilters({ key: 'limitSpecializations', value: total }));
    }
  };
  const handleShowSkills = () => {
    if (filters.limitSkills === total) {
      dispatch(setFilters({ key: 'limitSkills', value: 8 }));
    } else {
      dispatch(setFilters({ key: 'limitSkills', value: total }));
    }
  };
  const handleSaveSpecialization = (value: number) => {
    dispatch(setFiltersQuestions({ key: 'specialization', value: value }));
    if (value === selected.specialization) {
      dispatch(setFiltersQuestions({ key: 'specialization', value: null }));
    }
  };
  const handleSaveSkill = (value: number) => {
    dispatch(setFiltersQuestions({ key: 'skills', value: value }));
    if (value === selected.skills) {
      dispatch(setFiltersQuestions({ key: 'skills', value: null }));
    }
  };

  return (
    <section className={styles.filters}>
      <ProfessionalFilters
        items={specializations}
        handleShow={handleShowSpecialization}
        handleSave={handleSaveSpecialization}
        selectedValue={selected.specialization}
      />
      <ProfessionalFilters
        items={skills}
        selectedValue={selected.skills}
        handleShow={handleShowSkills}
        handleSave={handleSaveSkill}
      />
    </section>
  );
}

export default MyFiltersProfessional;
