import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';
import SignUpContainer from './SignUpContainer';
import { Alert } from 'react-native';

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const client = useApolloClient();

  const onSubmit = async values => {
    const { username, password } = values;
    try {
      console.log('BEFORE SIGN UP');
      await signUp({ username, password });
      console.log('BEFORE SIGN IN');
      await signIn({ username, password });
      console.log('BEFORE CLIENT RESET');
      await client.resetStore();
      navigate('/');
    } catch (e) {
      Alert.alert(null, e.message || 'Something went wrong', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
