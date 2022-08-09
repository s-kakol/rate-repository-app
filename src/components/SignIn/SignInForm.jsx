import { Pressable, View } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import FormsStyle from '../../styles/forms';

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={FormsStyle.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit} style={FormsStyle.button}>
        <Text color="textWhite" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
