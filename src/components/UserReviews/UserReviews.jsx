import useCheckAuthentication from '../../hooks/useCheckAuthentication';
import LoadingIndicator from '../LoadingIndicator';
import UserReviewsContainer from './UserReviewsContainer';

const UserReviews = () => {
  const { isSignedIn } = useCheckAuthentication(true);

  return isSignedIn ? (
    <UserReviewsContainer user={isSignedIn} />
  ) : (
    <LoadingIndicator />
  );
};

export default UserReviews;
