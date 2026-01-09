import { LoginForm } from '@/features/auth';
import styles from './styles.module.css';

function MyAuth() {
  return (
    <section className={styles.mainAuth}>
      <h2 className={styles.mainAuthTitle}>Вход в личный кабинет</h2>
      <LoginForm />
    </section>
  );
}
export default MyAuth;
