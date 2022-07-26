import { StyleSheet, View, Image, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import * as Linking from 'expo-linking';

import Theme from '../../theme';
import RepositoryItemDetail from './RepositoryItemDetail';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  mainArea: {
    paddingLeft: 12,
    marginRight: 90,
  },
  detailsArea: {
    marginTop: 16,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    paddingRight: 12,
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  descriptionBar: {
    paddingTop: 6,
    paddingBottom: 6,
  },
  languageBar: {
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
    backgroundColor: Theme.colors.primary,
  },
  githubBtn: {
    margin: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: Theme.colors.primary,
  },
});

const RepositoryItem = ({ singleView, repo }) => {
  const navigate = useNavigate();

  const renderGithubButton = () => {
    return (
      <Pressable
        style={styles.githubBtn}
        onPress={() => Linking.openURL(repo.url)}
      >
        <Text color="textWhite" fontWeight="bold">
          Open in Github
        </Text>
      </Pressable>
    );
  };

  return (
    <Pressable onPress={() => !singleView && navigate(`/repository/${repo.id}`)}>
      <View testID="repositoryItem" style={styles.container}>
        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
          <View style={styles.mainArea}>
            <Text fontSize="subheading" fontWeight="bold">
              {repo.fullName}
            </Text>
            <Text style={styles.descriptionBar} color="textSecondary">
              {repo.description}
            </Text>
            <Text style={styles.languageBar} color="textWhite">
              {repo.language}
            </Text>
          </View>
        </View>
        <View style={styles.detailsArea}>
          <RepositoryItemDetail value={repo.stargazersCount} name="Stars" />
          <RepositoryItemDetail value={repo.forksCount} name="Forks" />
          <RepositoryItemDetail value={repo.reviewCount} name="Reviews" />
          <RepositoryItemDetail value={repo.ratingAverage} name="Rating" />
        </View>
        {singleView && renderGithubButton()}
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
