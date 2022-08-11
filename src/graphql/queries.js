import { gql } from '@apollo/client/core';
import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query (
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryDetails
      reviews {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
`;

export const CHECK_AUTHENTICATION = gql`
  query {
    me {
      id
      username
    }
  }
`;
