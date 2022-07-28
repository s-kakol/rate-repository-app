import { StyleSheet, View } from 'react-native';
import RepositoryItemDetail from './RepositoryItemDetail';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
  },
});

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>IMG</Text>
        <View>
          <Text>{repo.fullName}</Text>
          <Text>{repo.description}</Text>
          <Text>{repo.language}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <RepositoryItemDetail value={repo.stargazersCount} name="Stars" />
        <RepositoryItemDetail value={repo.forksCount} name="Forks" />
        <RepositoryItemDetail value={repo.reviewCount} name="Reviews" />
        <RepositoryItemDetail value={repo.ratingAverage} name="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;