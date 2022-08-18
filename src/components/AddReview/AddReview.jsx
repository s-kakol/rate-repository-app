import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../../graphql/mutations';
import { useNavigate } from 'react-router-native';

import AddReviewContainer from './AddReviewContainer';
import { Alert } from 'react-native';

const AddReview = () => {
  const navigate = useNavigate();
  const [mutate] = useMutation(CREATE_REVIEW, {
    onCompleted: async data => {
      const id = await data.createReview.repositoryId;
      navigate(`/repository/${id}`);
    },
  });

  const onSubmit = async values => {
    try {
      await mutate({
        variables: {
          review: {
            ownerName: values.ownerName,
            repositoryName: values.repositoryName,
            rating: +values.rating,
            text: values.text,
          },
        },
      });
    } catch (e) {
      Alert.alert(null, e.message || 'Something went wrong', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    }
  };

  return <AddReviewContainer onSubmit={onSubmit} />;
};

export default AddReview;
