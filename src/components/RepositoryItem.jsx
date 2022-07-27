import { Text } from 'react-native';

const RepositoryItem = ({ repo }) => {
  return (
    <Text>
      Full name: {`${repo.fullName} \n`}
      Description: {`${repo.description} \n`}
      Language: {`${repo.language} \n`}
      Stars: {`${repo.stargazersCount} \n`}
      Forks: {`${repo.forksCount} \n`}
      Reviews: {`${repo.reviewCount} \n`}
      Rating: {repo.ratingAverage}
    </Text>
  );
};

export default RepositoryItem;
