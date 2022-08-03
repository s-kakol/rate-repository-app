import * as yup from 'yup';
import { Formik } from 'formik';

import SignInForm from './SignInForm';

const SignInContainer = ({ onSubmit }) => {
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

export default SignInContainer;
