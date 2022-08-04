import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = repositoryId => {
  const [repository, setRepository] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!error && !loading) {
      setRepository(data.repository);
    }
  }, [data, error, loading]);

  return { repository };
};

export default useRepository;
