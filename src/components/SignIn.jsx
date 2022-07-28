import { Formik } from 'formik';
import { Pressable, View, StyleSheet } from 'react-native';
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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="login" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
