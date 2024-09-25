import styles from './ParticipantsPage.module.css';
import participants from '../../data/participants.json';
import ParticipantItem from '../../components/ParticipantItem/ParticipantItem';

const ParticipantsPage = () => {
  return (
    <main>
      <h1>&quot;Awesome Event&quot; participants</h1>

      <ul className={styles.list}>
        {participants.map(participant => (
          <ParticipantItem key={participant._id} participant={participant} />
        ))}
      </ul>
    </main>
  );
};

export default ParticipantsPage;
