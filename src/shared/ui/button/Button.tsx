import clsx from 'clsx';
import styles from './styles.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

function Button({ className, children, onClick, type, ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.button, className)} {...props} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
export default Button;
