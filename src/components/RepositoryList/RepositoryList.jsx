import { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [filterOptions, setFilterOptions] = useState({
    value: 'LATEST',
    order: 'CREATED_AT',
    direction: 'DESC',
  });

  const { repositories } = useRepositories(
    filterOptions.order,
    filterOptions.direction
  );

  return (
    <RepositoryListContainer
      repositories={repositories}
      filterOptions={filterOptions}
      setFilterOptions={setFilterOptions}
    />
  );
};

export default RepositoryList;
