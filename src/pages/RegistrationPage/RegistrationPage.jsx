import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './RegistrationPage.module.css';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createParticipant } from '../../redux/participants/operations';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const birthDateExp = /^\d{4}-\d{2}-\d{2}$/;

const registrationSchema = yup.object({
  fullname: yup.string().required('Name is required!'),
  email: yup
    .string()
    .required('Email is requred!')
    .matches(emailRegExp, 'Email is not valid.')
    .email('Email is not valid.'),
  birthDate: yup
    .string()
    .required('Birth date is required!')
    .matches(birthDateExp, 'The date must follow the format YYYY-MM-DD.'),
  question: yup.string().required('Please select an option!'),
});

const RegistrationPage = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();

  const fullnameId = useId();
  const emailId = useId();
  const dateId = useId();
  const socialId = useId();
  const friendsId = useId();
  const myselfId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      fullname: '',
      email: '',
      birthDate: '',
      question: '',
    },
  });

  const onSubmit = data => {
    dispatch(createParticipant({ ...data, eventId }));
    reset();
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Event registration</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.nameWrapper}>
          <label htmlFor={fullnameId} className={styles.label}>
            Full name
          </label>
          <input
            id={fullnameId}
            {...register('fullname')}
            className={styles.input}
          />
          <p className={styles.errorText}>{errors.fullname?.message}</p>
        </div>

        <div className={styles.emailWrapper}>
          <label htmlFor={emailId} className={styles.label}>
            Email
          </label>
          <input id={emailId} {...register('email')} className={styles.input} />
          <p className={styles.errorText}>{errors.email?.message}</p>
        </div>

        <div className={styles.dateWrapper}>
          <label htmlFor={dateId} className={styles.label}>
            Date of birth
          </label>
          <input
            id={dateId}
            {...register('birthDate')}
            className={styles.input}
          />
          <p className={styles.errorText}>{errors.birthDate?.message}</p>
        </div>

        <div className={styles.fieldsetWrapper}>
          <fieldset>
            <legend className={styles.label}>
              Where did you hear about this event?
            </legend>

            <div className={styles.radioWrapper}>
              <input
                {...register('question')}
                type="radio"
                value="social"
                id={socialId}
              />
              <label htmlFor={socialId}>Social media</label>

              <input
                {...register('question')}
                type="radio"
                value="friends"
                id={friendsId}
              />
              <label htmlFor={friendsId}>Friends </label>

              <input
                {...register('question')}
                type="radio"
                value="myself"
                id={myselfId}
              />
              <label htmlFor={myselfId}>Found myself </label>
            </div>
          </fieldset>

          <p className={styles.errorText}>{errors.question?.message}</p>
        </div>

        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default RegistrationPage;
