import clsx from 'clsx';
import styles from './styles.module.css';
import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

function Button({ className, children, onClick, ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.button, className)} {...props} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
