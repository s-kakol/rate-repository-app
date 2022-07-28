import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexGrow: 0,
  },
});

const AppBarTab = props => {
  return (
    <Pressable style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading" color="textWhite">
        {props.label}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
