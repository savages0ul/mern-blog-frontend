import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchAuth } from '../../redux/slices/auth';

export const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'test@test.ru',
      password: '123',
    },
    mode: 'onChange',
  });

  const onSubmit = (values) => {
    dispatch(fetchAuth(values));
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          classes={{ root: styles.title }}
          variant="h5"
        >
          Вход в аккаунт
        </Typography>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Укажите почту' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Укажите пароль' })}
          fullWidth
        />
        <Button
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Войти
        </Button>
      </form>
    </Paper>
  );
};
