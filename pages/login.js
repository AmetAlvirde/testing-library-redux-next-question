import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  AlertIcon,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import useUser from '../lib/useUser';
import fetchJson from '../lib/fetchJson';
import Layout from '../components/Layout';

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState();

  const onSubmit = async data => {
    setIsSubmitting(true);
    try {
      await mutateUser(
        fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
      );
    } catch (error) {
      setIsSubmitting(false);
      if (error.message === 'Unauthorized') {
        setAuthError(true);
      }
    }
  };

  return (
    <Layout>
      <Center paddingTop={{ base: '5%' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              {...register('email', {
                validate: email =>
                  /^[^@]+@\w+(\.\w+)+\w$/.test(email) ||
                  'El email es un campo obligatorio',
              })}
            />
          </FormControl>
          {errors.email && (
            <Alert marginTop={{ base: '3%' }} status="error">
              <AlertIcon />
              {errors.email.message}
            </Alert>
          )}
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...register('password', {
                required: 'La contraseña es un campo obligatorio',
              })}
            />
          </FormControl>
          {errors.password && (
            <Alert marginTop={{ base: '3%' }} status="error">
              <AlertIcon />
              {errors.password.message}
            </Alert>
          )}
          <Center>
            <Button
              isLoading={isSubmitting}
              loadingText="Iniciando sesión"
              size="md"
              colorScheme="green"
              width="100%"
              marginTop={{ base: '5%' }}
              type="submit">
              Login
            </Button>
          </Center>
          <Center>
            {authError && (
              <Alert marginTop={{ base: '3%' }} status="error">
                <AlertIcon />
                Email o contraseña incorrectos
              </Alert>
            )}
          </Center>
        </form>
      </Center>
    </Layout>
  );
};

export default Login;
