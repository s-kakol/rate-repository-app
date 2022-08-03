/* eslint-disable jest/expect-expect */
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignIn/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();

      const { getByPlaceholderText, getByText } = render(
        <SignInContainer onSubmit={onSubmit} />
      );

      fireEvent.changeText(getByPlaceholderText('Username'), 'admin_user');
      fireEvent.changeText(getByPlaceholderText('Password'), 'admin_pass');
      fireEvent.press(getByText('Sign in'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'admin_user',
          password: 'admin_pass',
        });
      });
    });
  });
});
