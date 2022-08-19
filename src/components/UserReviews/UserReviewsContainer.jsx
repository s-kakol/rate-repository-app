import { FlatList, View, StyleSheet } from 'react-native';
import ReviewItem from '../RepositoryList/ReviewItem';
import Text from '../Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsContainer = ({ user }) => {
  const reviewNodes =
    user.reviews.edges.length > 0
      ? user.reviews.edges.map(edge => edge.node)
      : [];

  return reviewNodes.length > 0 ? (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem review={item} isRepositoryView={false} />
      )}
    />
  ) : (
    //To add later: Button to redirect user to "Add review" page
    //user: test1
    <Text>Add your first review!</Text>
  );
};

export default UserReviewsContainer;
