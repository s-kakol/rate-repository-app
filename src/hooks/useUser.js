import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_DETAILS } from '../graphql/queries';

const useUser = (shouldGetReviews = false) => {
  const [userData, setUserData] = useState();
  const { data, error, refetch, loading } = useQuery(GET_USER_DETAILS, {
    variables: {
      includeReviews: shouldGetReviews,
    },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!error && !loading) {
      setUserData(data.me);
    }
  }, [data, error, loading]);

  return { userData, refetch };
};

export default useUser;
