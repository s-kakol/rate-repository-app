import { gql } from '@apollo/client/core';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const CHECK_AUTHENTICATION = gql`
  query {
    me {
      id
      username
    }
  }
`;
