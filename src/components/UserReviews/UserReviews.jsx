import useCheckAuthentication from '../../hooks/useCheckAuthentication';
import LoadingIndicator from '../LoadingIndicator';
import UserReviewsContainer from './UserReviewsContainer';

const UserReviews = () => {
  const { userData, refetch } = useCheckAuthentication(true);

  return userData ? (
    <UserReviewsContainer user={userData} refetch={refetch} />
  ) : (
    <LoadingIndicator />
  );
};

export default UserReviews;
