import { QuestionsCard } from '@/entities/questions';
import styles from './styles.module.css';
import { IQuestions } from '@/shared/interfaces';

interface Props {
  questions: IQuestions[];
}

function QuestionsList({ questions }: Props) {
  return (
    <ul className={styles.questionsList}>
      {questions.map((question) => (
        <QuestionsCard question={question} key={question.id} />
      ))}
    </ul>
  );
}

export default QuestionsList;
