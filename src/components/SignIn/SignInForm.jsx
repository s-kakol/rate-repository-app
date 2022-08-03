import { Pressable, View, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import Theme from '../../theme';

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
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

export default SignInForm;