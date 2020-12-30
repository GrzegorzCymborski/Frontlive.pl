import { memo, ReactNode } from 'react';
import { HeaderProvider } from 'components/shared/context/HeaderContext';
import styles from './layout.module.scss';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <HeaderProvider>
      <div className={styles.wrapper}>{children}</div>
    </HeaderProvider>
  );
});

Layout.displayName = 'Layout';
