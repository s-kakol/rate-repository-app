import { Text, View } from 'react-native';
import { render } from '@testing-library/react-native';

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
};

describe('HealthCheck', () => {
  describe('Base', () => {
    it('Foo', () => {
      expect(1).toBe(1);
    });
  });
  describe('Component', () => {
    it('Renders a greeting message based on the name prop', () => {
      const { debug, getByText } = render(<Greeting name="Bar" />);

      debug();

      expect(getByText('Hello Bar!')).toBeDefined();
    });
  });
});
