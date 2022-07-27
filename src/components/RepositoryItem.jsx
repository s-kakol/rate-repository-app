import { Text } from 'react-native';

const RepositoryItem = ({ repo }) => {
  return (
    <Text>
      {`
      Full name: ${repo.fullName}
      Description: ${repo.description}
      Language: ${repo.language}
      Stars: ${repo.stargazersCount}
      Forks: ${repo.forksCount}
      Reviews: ${repo.reviewCount}
      Rating: ${repo.ratingAverage}
    `}
    </Text>
  );
};

export default RepositoryItem;
