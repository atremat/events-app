import styles from './EventsList.module.css';
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
  selectTotalItems,
} from '../../redux/events/selectors';
import ReactPaginate from 'react-paginate';
import { setPage } from '../../redux/events/slice';

const EventsList = () => {
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);
  const totalItems = useSelector(selectTotalItems);

  useEffect(() => {
    const params = { page, perPage, sortBy, sortOrder };
    dispatch(fetchEvents(params));
  }, [dispatch, page, perPage, sortBy, sortOrder]);

  const handlePageClick = data => {
    dispatch(setPage(data.selected + 1));
  };

  return (
    <section>
      <h1 className={styles.title}>Events</h1>

      {events.length > 0 ? (
        <>
          <ul className={styles.list}>
            {events.map(event => (
              <EventItem key={event._id} event={event} />
            ))}
          </ul>

          <div className={styles.pagination}>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              pageCount={Math.ceil(totalItems / perPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
              className={styles.reactPaginate}
            />
          </div>
        </>
      ) : (
        <p>No events yet...</p>
      )}
    </section>
  );
};

export default EventsList;
