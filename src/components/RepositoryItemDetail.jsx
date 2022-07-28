import { View } from 'react-native';
import Text from './Text';

const RepositoryItemDetail = props => {
  const handleBigValue = number => `${Math.round(number / 100) / 10}k`;

  const displayValue =
    props.value >= 1000 ? handleBigValue(props.value) : props.value;

  return (
    <View style={{ alignItems: 'center' }}>
      <Text fontWeight="bold">{displayValue}</Text>
      <Text color="textSecondary">{props.name}</Text>
    </View>
  );
};

export default RepositoryItemDetail;
