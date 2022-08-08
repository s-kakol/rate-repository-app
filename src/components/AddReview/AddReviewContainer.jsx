import * as yup from 'yup';
import { Formik } from 'formik';

import AddReviewForm from './AddReviewForm';

const AddReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  };

  const ratingErrorMessage = 'Please enter a number between 0 and 100';

  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Please enter owner of the repository'),
    repositoryName: yup.string().required('Please enter repository name'),
    rating: yup
      .number()
      .typeError(ratingErrorMessage)
      .min(0, ratingErrorMessage)
      .max(100, ratingErrorMessage)
      .integer()
      .required(ratingErrorMessage),
    text: yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <AddReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default AddReviewContainer;
