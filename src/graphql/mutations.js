import { gql } from '@apollo/client/core';

export const AUTHENTICATE = gql`
  mutation ($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;
