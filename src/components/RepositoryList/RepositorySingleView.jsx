import { View, FlatList, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import LoadingIndicator from '../LoadingIndicator';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositorySingleView = () => {
  const repositoryId = useParams().id;
  const { repository } = useRepository(repositoryId);
  const reviewNodes = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  return repository ? (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={() => (
        <RepositoryItem singleView={true} repo={repository} />
      )}
    />
  ) : (
    <LoadingIndicator />
  );
};

export default RepositorySingleView;
