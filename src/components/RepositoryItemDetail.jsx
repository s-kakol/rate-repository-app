import { View } from 'react-native';
import Text from './Text';

const RepositoryItemDetail = props => {
  return (
    <View>
      <Text>{props.value}</Text>
      <Text>{props.name}</Text>
    </View>
  );
};

export default RepositoryItemDetail;
