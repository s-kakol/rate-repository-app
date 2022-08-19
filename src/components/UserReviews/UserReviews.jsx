import useCheckAuthentication from '../../hooks/useCheckAuthentication';
import LoadingIndicator from '../LoadingIndicator';
import UserReviewsContainer from './UserReviewsContainer';

const UserReviews = () => {
  const { userData } = useCheckAuthentication(true);

  return userData ? (
    <UserReviewsContainer user={userData} />
  ) : (
    <LoadingIndicator />
  );
};

export default UserReviews;
