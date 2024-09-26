import styles from './AppBar.module.css';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Events
        </Link>
        <Link to="/participants" className={styles.link}>
          Participants
        </Link>
      </nav>
    </header>
  );
};

export default AppBar;
