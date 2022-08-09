import * as yup from 'yup';
import { Formik } from 'formik';

import SignUpForm from './SignUpForm';

const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: '',
  };

  const usernameErrorMessage =
    'Username must be between 3 and 30 characters long';
  const passwordErrorMessage =
    'Username must be between 5 and 50 characters long';

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, usernameErrorMessage)
      .max(30, usernameErrorMessage)
      .required('Please enter your username'),
    password: yup
      .string()
      .min(5, passwordErrorMessage)
      .max(50, passwordErrorMessage)
      .required('Please enter your password'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords don't match")
      .required('Please confirm your password'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;
