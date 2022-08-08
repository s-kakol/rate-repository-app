import AddReviewContainer from './AddReviewContainer';

const AddReview = () => {
  const onSubmit = async values => {
    console.log(values);
  };

  return <AddReviewContainer onSubmit={onSubmit} />;
};

export default AddReview;
