import { Link } from 'react-router-dom';
import styles from './EventItem.module.css';

const EventItem = ({ event }) => {
  return (
    <li className={styles.item}>
      <div className={styles.textWrapper}>
        <h4>{event.title}</h4>
        <p>{event.description}</p>
      </div>

      <div className={styles.actions}>
        <Link to={`/registration/${event._id}`}>Register</Link>
        <button type="button">View</button>
      </div>
    </li>
  );
};

export default EventItem;
