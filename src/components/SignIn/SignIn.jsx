import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import useSignIn from '../../hooks/useSignIn';
import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Please enter your username'),
  password: yup
    .string()
    .min(3, 'Password must be at least 3 characters long')
    .required('Please enter your password'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const client = useApolloClient();

  const onSubmit = async values => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      await client.resetStore();
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
