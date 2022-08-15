import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryFilterBar from './RepositoryFilterBar';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({
  repositories,
  filterOptions,
  setFilterOptions,
  setSearchKeyword,
  onEndReach,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem singleView={false} repo={item} />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => (
        <RepositoryFilterBar
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
          setSearchKeyword={setSearchKeyword}
        />
      )}
    />
  );
};

export default RepositoryListContainer;
