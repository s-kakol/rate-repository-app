import { ActivityIndicator, StyleSheet, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating size="large" color={theme.colors.primary} />
    </View>
  );
};

export default LoadingIndicator;
