import { render } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryList/RepositoryListContainer';
import * as router from 'react-router';
const mockedUseNavigate = jest.fn();

const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
};

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    beforeEach(() => {
      jest
        .spyOn(router, 'useNavigate')
        .mockImplementation(() => mockedUseNavigate);
    });

    it('renders repository information correctly', () => {
      const filterOptions = {
        value: 'LATEST',
        order: 'CREATED_AT',
        direction: 'DESC',
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer
          repositories={repositories}
          filterOptions={filterOptions}
        />
      );

      const round = number => {
        return number >= 1000 ? `${Math.round(number / 100) / 10}k` : number;
      };

      const repositoryItems = getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      const forksCounts = getAllByTestId('Forks');
      const stargazersCounts = getAllByTestId('Stars');
      const ratingsAverage = getAllByTestId('Rating');
      const reviewCounts = getAllByTestId('Reviews');

      const firstRepoData = repositories.edges[0].node;
      const secondRepoData = repositories.edges[1].node;

      expect(firstRepositoryItem).toHaveTextContent(firstRepoData.fullName);
      expect(firstRepositoryItem).toHaveTextContent(firstRepoData.description);
      expect(firstRepositoryItem).toHaveTextContent(firstRepoData.language);
      expect(forksCounts[0]).toHaveTextContent(round(firstRepoData.forksCount));
      expect(stargazersCounts[0]).toHaveTextContent(
        round(firstRepoData.stargazersCount)
      );
      expect(ratingsAverage[0]).toHaveTextContent(
        round(firstRepoData.ratingAverage)
      );
      expect(reviewCounts[0]).toHaveTextContent(
        round(firstRepoData.reviewCount)
      );

      expect(secondRepositoryItem).toHaveTextContent(secondRepoData.fullName);
      expect(secondRepositoryItem).toHaveTextContent(
        secondRepoData.description
      );
      expect(secondRepositoryItem).toHaveTextContent(secondRepoData.language);
      expect(forksCounts[1]).toHaveTextContent(
        round(secondRepoData.forksCount)
      );
      expect(stargazersCounts[1]).toHaveTextContent(
        round(secondRepoData.stargazersCount)
      );
      expect(ratingsAverage[1]).toHaveTextContent(
        round(secondRepoData.ratingAverage)
      );
      expect(reviewCounts[1]).toHaveTextContent(
        round(secondRepoData.reviewCount)
      );
    });
  });
});
