import { Formik } from 'formik';
import { Pressable, View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import Theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 8,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    padding: 12,
    margin: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
});

const initialValues = {
  login: '',
  password: '',
};

const validationSchema = yup.object().shape({
  login: yup
    .string()
    .min(6, 'Username must be at least 6 characters long')
    .required('Please enter your login'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Please enter your password'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="login" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="textWhite" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(`Login: ${values.login}`);
    console.log(`Pass: ${values.password}`);
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
