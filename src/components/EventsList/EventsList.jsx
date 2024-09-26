import styles from './EventsList.module.css';
import data from '../../data/events.json';
import EventItem from '../EventItem/EventItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/events/operations';
import {
  selectEvents,
  selectPage,
  selectPerPage,
  selectSortBy,
  selectSortOrder,
} from '../../redux/events/selectors';

const EventsList = () => {
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);

  useEffect(() => {
    const params = { page, perPage, sortBy, sortOrder };

    dispatch(fetchEvents(params));
  }, [dispatch, page, perPage, sortBy, sortOrder]);

  return (
    <section>
      <h1>Events</h1>

      {events.length > 0 ? (
        <ul className={styles.list}>
          {events.map(event => (
            <EventItem key={event._id} event={event} />
          ))}
        </ul>
      ) : (
        <p>No events yet...</p>
      )}
    </section>
  );
};

export default EventsList;
