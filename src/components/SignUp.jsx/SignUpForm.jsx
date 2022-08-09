import { Pressable, View } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import FormsStyle from '../../styles/forms';

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={FormsStyle.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit} style={FormsStyle.button}>
        <Text color="textWhite" fontWeight="bold">
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
