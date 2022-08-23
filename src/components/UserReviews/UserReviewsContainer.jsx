import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import ReviewItem from '../ReviewItem';
import Text from '../Text';
import Theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 32,
    alignItems: 'center',
  },
  separator: {
    height: 10,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    padding: 16,
    margin: 24,
    borderRadius: 6,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewsContainer = ({ user, refetch }) => {
  const navigate = useNavigate();
  const redirectToAddReviewForm = () => {
    navigate('/add-review');
  };

  const reviewNodes =
    user.reviews.edges.length > 0
      ? user.reviews.edges.map(edge => edge.node)
      : [];

  return reviewNodes.length > 0 ? (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem review={item} refetch={refetch} isRepositoryView={false} />
      )}
    />
  ) : (
    <View style={styles.container}>
      <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
        You haven&apos;t added any reviews yet...
      </Text>
      <Pressable style={styles.button} onPress={redirectToAddReviewForm}>
        <Text color="textWhite" fontWeight="bold">
          Add your first review
        </Text>
      </Pressable>
    </View>
  );
};

export default UserReviewsContainer;
