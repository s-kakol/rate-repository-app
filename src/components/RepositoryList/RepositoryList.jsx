import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState();
  const [filterOptions, setFilterOptions] = useState({
    value: 'LATEST',
    order: 'CREATED_AT',
    direction: 'DESC',
  });
  const debounceKeyword = useDebouncedCallback(keyword => {
    setSearchKeyword(keyword);
  }, 1000);

  const { repositories, fetchMore } = useRepositories({
    first: 8,
    order: filterOptions.order,
    direction: filterOptions.direction,
    searchKeyword: searchKeyword,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      filterOptions={filterOptions}
      setFilterOptions={setFilterOptions}
      setSearchKeyword={debounceKeyword}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
