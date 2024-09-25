import styles from './ParticipantItem.module.css';

const ParticipantItem = ({ participant }) => {
  return (
    <li className={styles.item}>
      <h4>{participant.fullname}</h4>
      <p>{participant.email}</p>
    </li>
  );
};

export default ParticipantItem;
