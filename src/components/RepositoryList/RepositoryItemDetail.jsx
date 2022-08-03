import { View } from 'react-native';
import Text from '../Text';

const RepositoryItemDetail = props => {
  const displayValue =
    props.value >= 1000
      ? `${Math.round(props.value / 100) / 10}k`
      : props.value;

  return (
    <View style={{ alignItems: 'center' }}>
      <Text fontWeight="bold">{displayValue}</Text>
      <Text color="textSecondary">{props.name}</Text>
    </View>
  );
};

export default RepositoryItemDetail;
