import useUser from '../../hooks/useUser';
import LoadingIndicator from '../LoadingIndicator';
import UserReviewsContainer from './UserReviewsContainer';

const UserReviews = () => {
  const { userData, refetch } = useUser(true);

  return userData ? (
    <UserReviewsContainer user={userData} refetch={refetch} />
  ) : (
    <LoadingIndicator />
  );
};

export default UserReviews;
