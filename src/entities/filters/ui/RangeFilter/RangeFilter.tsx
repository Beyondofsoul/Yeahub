import styles from './styles.module.css';
import { Button } from '@/shared/ui/button';
import { FilterRange } from '../../model/types';

interface Props {
  items: FilterRange[];
  title: string;
  handleSave: (arg: number | number[]) => void;
  selectedValue: number[] | null;
}

function RangeFilter({ items, title = '', handleSave, selectedValue }: Props) {
  return (
    <div className={styles.range}>
      <div className={styles.title}>{title}</div>
      <div className={styles.items}>
        {items.map((item) => (
          <Button
            key={item.id}
            onClick={() => handleSave(item.value as number | number[])}
            className={`${styles.button} ${
              Array.isArray(selectedValue)
                ? selectedValue.includes(item.value as number) && styles.active
                : selectedValue === item.value && styles.active
            }`}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
export default RangeFilter;
