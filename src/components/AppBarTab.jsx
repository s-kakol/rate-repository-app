import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = props => {
  return (
    <Pressable style={props.style}>
      <Text fontWeight="bold" fontSize="subheading" color="textNav">
        {props.label}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
