import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './SignInContainer';
import { Alert } from 'react-native';

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
      Alert.alert(null, e.message || 'Something went wrong', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
