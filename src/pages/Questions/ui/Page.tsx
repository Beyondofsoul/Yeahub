import AllQuestions from './AllQuestions/AllQuestions';
import MyFiltersRange from './MyFilters/MyFilters';

import styles from './styles.module.css';

function QuestionsPage() {
  return (
    <main className={styles.main}>
      <AllQuestions />
      <MyFiltersRange />
    </main>
  );
}

export default QuestionsPage;
