import { Input } from '@/shared/ui/Input';
import styles from './styles.module.css';
import { Button } from '@/shared/ui/button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../api/authApi';
import { setCredentials } from '../../model/authSlice';

const schema = yup.object({
  username: yup.string().email('Неверный email').required('Email обязателен'),
  password: yup.string().min(7, 'Минимум 7 символов').required('Пароль обязателен'),
});

type FormData = yup.InferType<typeof schema>;
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data: FormData) => {
    try {
      const result = await login(data).unwrap();

      dispatch(
        setCredentials({
          token: result.access_token,
          user: result.user,
        }),
      );

      reset();

      window.location.href = '/admin';

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('❌ Ошибка:', err);
      alert(err?.data?.message || 'Ошибка авторизации');
    }
  };

  return (
    <form className={styles.mainAuthForm} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.mainAuthFormSlot}>
        <label className={styles.mainAuthFormLabel}>Электронная почта</label>
        <Input type="email" placeholder="Введите электронную почту" {...register('username')} />
        {errors.username && <span className={styles.error}>{errors.username.message}</span>}
      </p>

      <p className={styles.mainAuthFormSlot}>
        <label className={styles.mainAuthFormLabel}>Пароль</label>
        <Input type="password" placeholder="Введите пароль" {...register('password')} />
        {errors.password && <span className={styles.error}>{errors.password.message}</span>}
      </p>

      <Button className={styles.mainAuthButton} type="submit" disabled={!isValid || isLoading}>
        {isLoading ? 'Входим...' : 'Вход'}
      </Button>
    </form>
  );
}
export default LoginForm;
