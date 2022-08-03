import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CHECK_AUTHENTICATION } from '../grahpql/queries';

const useCheckAuthentication = () => {
  const [isSignedIn, setIsSignedIn] = useState();
  const { data, error, loading } = useQuery(CHECK_AUTHENTICATION, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!error && !loading) {
      setIsSignedIn(data.me);
    }
  }, [data, error, loading]);

  return { isSignedIn };
};

export default useCheckAuthentication;
