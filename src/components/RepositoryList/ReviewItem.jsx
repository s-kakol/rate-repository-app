import { View, StyleSheet } from 'react-native';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  rating: {
    padding: 8,
    borderWidth: 2,
    borderColor: theme.colors.primary,
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

const ReviewItem = ({ review, isRepositoryView }) => {
  const date = new Date(review.createdAt).toLocaleDateString();
  const title = isRepositoryView
    ? review.user.username
    : review.repository.fullName;

  return (
    <View style={styles.container}>
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
  );
};

export default ReviewItem;
