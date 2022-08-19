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
  const { repository, fetchMore } = useRepository({ repositoryId, first: 5 });
  const reviewNodes = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return repository ? (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem review={item} isRepositoryView={true} />
      )}
      ListHeaderComponent={() => (
        <RepositoryItem singleView={true} repo={repository} />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  ) : (
    <LoadingIndicator />
  );
};

export default RepositorySingleView;
