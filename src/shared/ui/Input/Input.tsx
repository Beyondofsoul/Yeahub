import { ChangeEvent, useState } from 'react';
import styles from './styles.module.css';
import search from '@/shared/assets/Magnifer.svg';
import eye from '@/shared/assets/EyeSlash.svg';

interface Props {
  onChange?: (arg: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  type?: string;
  img?: boolean;
}

function Input({ onChange, value, placeholder, type, img = false, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className={styles.block}>
      {img ? <img src={search} alt="" /> : ''}
      <input
        type={isPassword && !showPassword ? 'password' : 'text'}
        className={styles.input}
        {...props}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {isPassword && (
        <button type="button" onClick={togglePassword} className={styles.eyeButton}>
          <img src={eye} alt="toggle password" />
        </button>
      )}
    </div>
  );
}
export default Input;
