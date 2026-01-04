import { Header } from '@/widgets/header';
import MyQuestion from './MyQuestion/MyQuestion';

import styles from './styles.module.css';

function Question() {
  return (
    <div className={styles.question}>
      <Header />
      <main>
        <MyQuestion />
      </main>
    </div>
  );
}
export default Question;
