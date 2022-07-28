import { StyleSheet, View } from 'react-native';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import Theme from './theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: Theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
