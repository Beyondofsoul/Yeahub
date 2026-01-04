import { Header } from '@/widgets/header';
import AllQuestions from './AllQuestions/AllQuestions';
import MyFiltersRange from './MyFilters/MyFilters';

import styles from './styles.module.css';

function QuestionsPage() {
  return (
    <div className={styles.questions}>
      <Header />
      <main className={styles.main}>
        <AllQuestions />
        <MyFiltersRange />
      </main>
    </div>
  );
}

export default QuestionsPage;
