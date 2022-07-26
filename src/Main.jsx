import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AddReview from './components/AddReview/';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import RepositorySingleView from './components/RepositoryList/RepositorySingleView';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp.jsx/SignUp';
import UserReviews from './components/UserReviews';
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
        <Route path="/sign-out" element={<SignOut />} exact />
        <Route path="/sign-up" element={<SignUp />} exact />
        <Route path="/my-reviews" element={<UserReviews />} exact />
        <Route
          path="/repository/:id"
          element={<RepositorySingleView />}
          exact
        />
        <Route path="/add-review" element={<AddReview />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
