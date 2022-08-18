import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Theme from '../../theme';
import AppBarTab from './AppBarTab';
import useCheckAuthentication from '../../hooks/useCheckAuthentication';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Theme.colors.navBackground,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { isSignedIn } = useCheckAuthentication();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path="/" label="Repositories" />
        {isSignedIn && <AppBarTab path="add-review" label="Create a review" />}
        {isSignedIn ? (
          <AppBarTab path="sign-out" label="Sign out" />
        ) : (
          <AppBarTab path="login" label="Sign in" />
        )}
        {!isSignedIn && <AppBarTab path="sign-up" label="Sign up" />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
