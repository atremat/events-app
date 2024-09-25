import styles from './EventsList.module.css';
import data from '../../data/events.json';
import EventItem from '../EventItem/EventItem';

const EventsList = () => {
  return (
    <section>
      <h1>Events</h1>

      <ul className={styles.list}>
        {data.map(event => (
          <EventItem key={event._id} event={event} />
        ))}
      </ul>
    </section>
  );
};

export default EventsList;
