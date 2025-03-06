import { ChangeEvent } from 'react';
import styles from './styles.module.css';
import search from '@/shared/assets/Magnifer.svg';

interface Props {
  onChange: (arg: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function Input({ onChange, value, ...props }: Props) {
  return (
    <div className={styles.block}>
      <img src={search} alt="" />
      <input
        className={styles.input}
        {...props}
        placeholder={` Введите запрос`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default Input;
