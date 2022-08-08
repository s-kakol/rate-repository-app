import { Pressable, View, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import Theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 8,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    padding: 12,
    margin: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
});

const AddReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color="textWhite" fontWeight="bold">
          Add review
        </Text>
      </Pressable>
    </View>
  );
};

export default AddReviewForm;
