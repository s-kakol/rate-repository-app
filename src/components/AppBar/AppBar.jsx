import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Theme from '../../theme';
import AppBarTab from './AppBarTab';
import useUser from '../../hooks/useUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Theme.colors.navBackground,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { userData } = useUser();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path="/" label="Repositories" />
        {userData && <AppBarTab path="add-review" label="Create a review" />}
        {userData && <AppBarTab path="my-reviews" label="My reviews" />}
        {userData ? (
          <AppBarTab path="sign-out" label="Sign out" />
        ) : (
          <AppBarTab path="login" label="Sign in" />
        )}
        {!userData && <AppBarTab path="sign-up" label="Sign up" />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
