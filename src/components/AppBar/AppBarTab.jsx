import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './../Text';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexGrow: 0,
  },
});

const AppBarTab = props => {
  return (
    <Link to={props.path} style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading" color="textWhite">
        {props.label}
      </Text>
    </Link>
  );
};

export default AppBarTab;
