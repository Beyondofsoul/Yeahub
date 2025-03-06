import styles from './styles.module.css';
import { Link, useParams } from 'react-router-dom';
import shev from '@/shared/assets/Chevrone_Down.svg';
import { useGetQuestionByIdQuery } from '@/entities/questions/api/questionsApi';
import { QuestionCard, QuestionInfo } from '@/entities/questions';

function MyQuestion() {
  const { questionId } = useParams();
  const { data, isLoading } = useGetQuestionByIdQuery(questionId);

  if (isLoading) {
    return <div className="">loading</div>;
  }
  return (
    <>
      <Link to={'/'} className={styles.link}>
        <img src={shev} alt="shev" className={styles.shev} />
        Назад
      </Link>
      <div className={styles.question}>
        <QuestionCard question={data} />
        <QuestionInfo question={data} skills={data.questionSkills} keywords={data.keywords} />
      </div>
    </>
  );
}
export default MyQuestion;
