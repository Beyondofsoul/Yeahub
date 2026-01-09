import AsideAuth from './AsideAuth/AsideAuth';
import MyAuth from './MyAuth/MyAuth';
import styles from './styles.module.css';

function AuthPage() {
  return (
    <main className={styles.auth}>
      <AsideAuth />
      <MyAuth />
    </main>
  );
}
export default AuthPage;
