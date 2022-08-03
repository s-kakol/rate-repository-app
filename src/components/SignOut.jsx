import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import useAuthStorage from '../hooks/useAuthStorage';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SignOut = () => {
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const client = useApolloClient();

  const SignOut = async () => {
    try {
      await authStorage.removeAccessToken();
      await client.resetStore();
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  SignOut();
  return (
    <View style={styles.container}>
      <ActivityIndicator animating size="large" color={theme.colors.primary} />
    </View>
  );
};

export default SignOut;
