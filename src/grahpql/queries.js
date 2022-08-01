import { gql } from '@apollo/client/core';
import { REPOSITORY_LIST } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryList
        }
      }
    }
  }
  ${REPOSITORY_LIST}
`;
