import { useParams } from 'react-router-native';

import useRepository from '../../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import LoadingIndicator from '../LoadingIndicator';

const RepositorySingleView = () => {
  const repositoryId = useParams().id;
  const { repository } = useRepository(repositoryId);

  return repository ? (
    <RepositoryItem singleView={true} repo={repository} />
  ) : (
    <LoadingIndicator />
  );
};

export default RepositorySingleView;
