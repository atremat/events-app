import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './RegistrationPage.module.css';
import { useId } from 'react';
import { useForm } from 'react-hook-form';

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
});

const RegistrationPage = () => {
  const { eventId } = useParams();

  const fullnameId = useId();
  const emailId = useId();
  const dateId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = data => {
    console.log('registration data: ', data);
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Event registration</h2>

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

        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default RegistrationPage;
