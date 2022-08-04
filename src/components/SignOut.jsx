import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import useAuthStorage from '../hooks/useAuthStorage';
import LoadingIndicator from './LoadingIndicator';

const SignOut = () => {
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const client = useApolloClient();

  const SignOut = async () => {
    try {
      await authStorage.removeAccessToken();
      await client.resetStore();
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  SignOut();
  return <LoadingIndicator />;
};

export default SignOut;
