import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
    },
  });

  useEffect(() => {
    if (!error && !loading) {
      setRepositories(data.repositories);
    }
  }, [error, loading]);

  return { repositories };
};

export default useRepositories;
