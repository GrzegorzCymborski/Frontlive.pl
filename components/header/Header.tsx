import { ReactNode, memo } from 'react';
import styles from './header.module.scss';
import { Hero } from './hero/Hero';

type HeaderProps = {
  readonly children: ReactNode;
};

export const Header = memo<HeaderProps>(({ children }) => {
  return (
    <header className={styles.wrapper}>
      {children}
      <Hero />
    </header>
  );
});

Header.displayName = 'Header';
