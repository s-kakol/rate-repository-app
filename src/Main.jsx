import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import SignIn from './components/SignIn';
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
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/login" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
