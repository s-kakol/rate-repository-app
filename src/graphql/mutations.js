import { gql } from '@apollo/client/core';

export const AUTHENTICATE = gql`
  mutation ($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;
