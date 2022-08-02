import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../grahpql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    await mutate({ variables: { credentials: { username, password } } });
    return result;
  };

  return [signIn, result];
};

export default useSignIn;
