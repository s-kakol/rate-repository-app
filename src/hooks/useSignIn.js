import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../grahpql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE, {
    onCompleted: async data => {
      await authStorage.setAccessToken(data.authenticate.accessToken);
    },
  });

  const signIn = async ({ username, password }) => {
    await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });

    return result;
  };

  return [signIn, result];
};

export default useSignIn;
