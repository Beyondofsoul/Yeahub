import styles from './styles.module.css';
import logoImg from '@/shared/assets/logoimg.svg';
import logoText from '@/shared/assets/logotext.svg';

function AsideAuth() {
  return (
    <section className={styles.asideAuth}>
      <div className={styles.asideAuthHeader}>
        <div className={styles.asideAuthHeaderTitle}>
          <img src={logoImg} />
          <img src={logoText} />
        </div>
        <p className={styles.asideAuthHeaderDescription}>YeaHub объединяет IT-специалистов</p>
      </div>
      <div className={styles.asideAuthFooter}>
        <p className={styles.asideAuthFooterTitle}>Стань частью сообщества YeaHub и получи:</p>
        <ul className={styles.asideAuthFooterList}>
          <li>Пошаговый план обучения</li>
          <li>Карьерный рост</li>
          <li>Большое сообщество специалистов</li>
          <li>Обучение с ментором</li>
          <li>Возможность прохождения стажировки</li>
        </ul>
      </div>
    </section>
  );
}
export default AsideAuth;
