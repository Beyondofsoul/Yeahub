import { IQuestions } from '@/shared/interfaces';
import styles from './styles.module.css';
import arrow from '@/shared/assets/Arrow Right.svg';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
interface Props {
  question: IQuestions;
}
function QuestionContent({ question }: Props) {
  const cleanShortAnswer = DOMPurify.sanitize(question.shortAnswer);

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.rate}>
          <p className={styles.name}>Рейтинг:</p>
          <p className={styles.Num}>{question.rate}</p>
        </div>
        <div className={styles.rate}>
          <p className={styles.name}>Сложность:</p>
          <p className={styles.Num}>{question.complexity}</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.extra} dangerouslySetInnerHTML={{ __html: cleanShortAnswer }} />
        <div className={styles.more}>
          <Link to={`${question.id}`} className={styles.link}>
            Подробнее
          </Link>
          <img src={arrow} alt="arrow" className={styles.arrow} />
        </div>
      </div>
    </div>
  );
}
export default QuestionContent;
