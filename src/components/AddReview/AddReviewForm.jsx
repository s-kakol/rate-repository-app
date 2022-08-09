import { Pressable, View } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import FormsStyle from '../../styles/forms';

const AddReviewForm = ({ onSubmit }) => {
  return (
    <View style={FormsStyle.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" />
      <Pressable onPress={onSubmit} style={FormsStyle.button}>
        <Text color="textWhite" fontWeight="bold">
          Add review
        </Text>
      </Pressable>
    </View>
  );
};

export default AddReviewForm;
