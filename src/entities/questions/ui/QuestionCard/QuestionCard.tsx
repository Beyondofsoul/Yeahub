import { MAX_PREWIEW_LENGTH } from '@/shared/constants/constants';
import { IQuestion } from '../../model/types';
import styles from './styles.module.css';
import { useState } from 'react';
import shev from '@/shared/assets/Chevrone_Down.svg';
import DOMPurify from 'dompurify';
interface Props {
  question: IQuestion;
}

function QuestionCard({ question }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const cleanShortAnswer = DOMPurify.sanitize(question.shortAnswer);

  const cleanlongAnswer = DOMPurify.sanitize(question.longAnswer);
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.title}>{question.title}</div>
        <div className={styles.description}>{question.description}</div>
      </div>
      <div className={styles.short}>
        <h4 className={styles.answerTitle}>Краткий ответ</h4>
        <div
          className={styles.shortAnswer}
          dangerouslySetInnerHTML={{ __html: cleanShortAnswer }}
        />
      </div>
      <div className={styles.long}>
        <h4 className={styles.answerTitle}>Развернутый ответ</h4>
        <div
          className={`${styles.prevAnswer} ${isOpen ? styles.open : ''}`}
          dangerouslySetInnerHTML={{ __html: cleanlongAnswer.substring(0, MAX_PREWIEW_LENGTH) }}
        ></div>
        {isOpen && (
          <div
            className={styles.longAnswer}
            dangerouslySetInnerHTML={{
              __html: question.longAnswer.substring(1000),
            }}
          />
        )}
        <button onClick={toggleContent} className={styles.button}>
          {!isOpen ? (
            <div className={styles.hide}>
              <p className={styles.buttonTitle}>Развернуть</p>
              <img src={shev} alt="" className={styles.unfoldImg} />
            </div>
          ) : (
            <div className={styles.hide}>
              <p className={styles.buttonTitle}>Свернуть</p>
              <img src={shev} alt="" className={styles.hideImg} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
export default QuestionCard;
