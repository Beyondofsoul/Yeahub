import { SpecializationsTable } from '../SpecializationsTable/SpecializationsTable';
import styles from './styles.module.css';

export function SpecializationsPage() {
  return (
    <section className={styles.page}>
      <SpecializationsTable />
    </section>
  );
}
