import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Theme.colors.navBackground,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path="/" label="Repositories" />
        <AppBarTab path="login" label="Sign in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
