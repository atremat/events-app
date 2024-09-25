import styles from './ParticipantsPage.module.css';
// import participants from '../../data/participants.json';
import ParticipantItem from '../../components/ParticipantItem/ParticipantItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectParticipants } from '../../redux/participants/selectors';
import { useEffect } from 'react';
import { fetchParticipants } from '../../redux/participants/operations';

const ParticipantsPage = () => {
  const participants = useSelector(selectParticipants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParticipants());
  }, [dispatch]);

  return (
    <main>
      <h1>&quot;Awesome Event&quot; participants</h1>

      {participants.length > 0 ? (
        <ul className={styles.list}>
          {participants.map(participant => (
            <ParticipantItem key={participant._id} participant={participant} />
          ))}
        </ul>
      ) : (
        <p>No participants yet.</p>
      )}
    </main>
  );
};

export default ParticipantsPage;
