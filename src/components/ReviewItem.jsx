import { View, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigate } from 'react-router-native';

import useDeleteReview from '../hooks/useDeleteReview';
import Text from './Text';
import Theme from '../theme';

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 16,
    marginTop: 8,
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: Theme.colors.primary,
    padding: 16,
    paddingLeft: 24,
    paddingRight: 24,
    margin: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  rating: {
    padding: 8,
    borderWidth: 2,
    borderColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 48,
  },
  text: {
    paddingTop: 4,
    textAlign: 'justify',
  },
});

const ReviewItem = ({ review, refetch, isRepositoryView }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();
  const date = new Date(review.createdAt).toLocaleDateString();
  const title = isRepositoryView
    ? review.user.username
    : review.repository.fullName;

  const handleRedirectToRepository = () => {
    navigate(`/repository/${review.repository.id}`);
  };

  const handleRepositoryDeletion = () => {
    Alert.alert(
      review.repository.fullName,
      `Are you sure you want to delete your review?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {}, // Necessary for proper spacing other two buttons
        {
          text: 'Delete',
          onPress: async () => {
            await deleteReview(review.id);
            await refetch();
          },
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.rating}>
          <Text color="primary" fontWeight="bold" fontSize="subheading">
            {review.rating}
          </Text>
        </View>
        <View style={styles.content}>
          <Text fontWeight="bold" fontSize="subheading">
            {title}
          </Text>
          <Text color="textSecondary">{date}</Text>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
      {!isRepositoryView && (
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={handleRedirectToRepository}>
            <Text fontSize="subheading" fontWeight="bold" color="textWhite">
              View Repository
            </Text>
          </Pressable>
          <Pressable
            style={{
              ...styles.button,
              backgroundColor: Theme.colors.lighterRed,
            }}
            onPress={handleRepositoryDeletion}
          >
            <Text fontSize="subheading" fontWeight="bold" color="textWhite">
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
