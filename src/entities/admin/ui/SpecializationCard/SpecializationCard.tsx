import { useState } from 'react';
import styles from './styles.module.css';

interface Specialization {
  id: number;
  name: string;
  image: string;
  description: string;
  status: string;
}

interface Props {
  specialization: Specialization;
}

export function SpecializationCard({ specialization }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.card}>
      <label className={styles.checkboxCell}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className={`${styles.checkboxFake} ${checked ? styles.checked : ''}`} />
      </label>
      <div className={styles.previewCell}>
        <img src={specialization.image} alt={specialization.name} className={styles.preview} />
      </div>
      <div className={styles.nameCell}>{specialization.name}</div>
      <div className={styles.descriptionCell} title={specialization.description}>
        {specialization.description}
      </div>
      <div className={styles.descriptionCell} title={specialization.description}>
        {specialization.status}
      </div>
    </div>
  );
}
