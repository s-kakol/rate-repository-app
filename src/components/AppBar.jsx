import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Theme.colors.navBackground,
    flexDirection: 'row',
  },
  tab: {
    padding: 12,
    flexGrow: 0,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab style={styles.tab} label="Repositories" />
    </View>
  );
};

export default AppBar;
