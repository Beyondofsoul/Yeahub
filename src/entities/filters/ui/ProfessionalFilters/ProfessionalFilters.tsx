import { Button } from '@/shared/ui/button';
import styles from './styles.module.css';
import { SkillsSpecializations } from '../../model/types';

interface Props {
  items: SkillsSpecializations[];
  handleShow: () => void;
  handleSave: (arg: number) => void;
  selectedValue: number | null;
}

function ProfessionalFilters({ items, handleShow, handleSave, selectedValue }: Props) {
  return (
    <>
      <p className={styles.name}>Скиллы</p>
      <ul className={styles.skills}>
        {items.map((item) => (
          <Button
            key={item.id}
            className={`${styles.button} ${selectedValue === item.id ? styles.active : ''}`}
            onClick={() => handleSave(item.id)}
          >
            <img src={item.imageSrc} alt="" className={styles.img} />
            {item.title}
          </Button>
        ))}
        <button onClick={handleShow} className={styles.show}>
          Посмотреть все
        </button>
      </ul>
    </>
  );
}

export default ProfessionalFilters;
