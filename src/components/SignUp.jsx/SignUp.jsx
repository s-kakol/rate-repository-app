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
      await signUp({ username, password });
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

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
