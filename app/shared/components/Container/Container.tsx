import { ReactNode } from 'react';
import { styles } from './container.css';

interface ContainerProps {
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  return <div {...props} className={styles()} />;
}
