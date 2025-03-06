import { Button } from '@/shared/ui/button';
import { IQuestion, ISkill } from '../../model/types';
import styles from './styles.module.css';

interface Props {
  question: IQuestion;
  keywords: string[];
  skills: ISkill[];
}

function QuestionInfo({ question, keywords, skills }: Props) {
  return (
    <div className={styles.filters}>
      <p className={styles.rangeTitle}>Уровень:</p>
      <div className={styles.range}>
        <div className={styles.complexity}>
          <p className={styles.complexityTitle}>Сложность:</p>
          <p className={styles.complexityInfo}>{question.complexity}</p>
        </div>
        <div className={styles.complexity}>
          <p className={styles.complexityTitle}>Рейтинг:</p>
          <p className={styles.complexityInfo}>{question.rate}</p>
        </div>
      </div>
      <div className={styles.skills}>
        <p className={styles.skillsTitle}>Навыки:</p>
        {skills.map((skill) => (
          <Button className={styles.active} key={skill.id}>
            <img src={skill.imageSrc} alt="" className={styles.imgSkill} />
            {skill.title}
          </Button>
        ))}
      </div>
      <div className={styles.keywords}>
        <p className={styles.keywordsTitle}>Ключевые слова:</p>
        {keywords.map((keyword) => (
          <a className={styles.link} key={keyword}>
            #{keyword}
          </a>
        ))}
      </div>
    </div>
  );
}
export default QuestionInfo;
