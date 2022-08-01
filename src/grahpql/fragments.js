import { gql } from '@apollo/client/core';

export const REPOSITORY_LIST = gql`
  fragment RepositoryList on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;
