import styles from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Events
        </NavLink>
        <NavLink to="/participants" className={styles.link}>
          Participants
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
