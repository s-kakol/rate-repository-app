import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_USER_DETAILS } from '../graphql/queries';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: GET_USER_DETAILS }],
  });

  const deleteReview = async deleteReviewId => {
    await mutate({
      variables: {
        deleteReviewId,
      },
    });

    return result;
  };

  return [deleteReview, result];
};

export default useDeleteReview;
