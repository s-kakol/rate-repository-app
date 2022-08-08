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

  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Please enter owner of the repository'),
    repositoryName: yup.string().required('Please enter repository name'),
    rating: yup
      .number()
      .min(0, 'Rating must be between 0 and 100')
      .max(100, 'Rating must be between 0 and 100')
      .integer(),
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
