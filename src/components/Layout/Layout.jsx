import { Suspense } from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
