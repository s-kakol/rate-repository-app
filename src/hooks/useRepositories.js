// import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = variables => {
  // const [repositories, setRepositories] = useState();
  // const { data, error, loading } = useQuery(GET_REPOSITORIES, {
  //   fetchPolicy: 'cache-and-network',
  //   variables,
  // });

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  // useEffect(() => {
  //   if (!error && !loading) {
  //     setRepositories(data.repositories);
  //   }
  // }, [error, loading]);

  // return { repositories };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
