import { IQuestions } from '@/shared/interfaces';
import styles from './styles.module.css';
import shev from '@/shared/assets/Chevrone_Down.svg';

import { useState } from 'react';
import QuestionContent from '../QuestionContent/QuestionContent';
interface Props {
  question: IQuestions;
}

function QuestionsCard({ question }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li className={styles.card} onClick={toggleContent}>
      <div className={styles.info}>
        <h5 className={styles.title}>{question.title}</h5>
        <img src={shev} alt="shev" className={`${styles.shev} ${isOpen ? styles.rotate : ''}`} />
      </div>
      {isOpen && <QuestionContent question={question} />}
    </li>
  );
}
export default QuestionsCard;
