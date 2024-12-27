import { useCallback, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getCollectionFeed } from '@network/apiMethods';
import { collectionFeed } from '@constants/query';

function useCollectionFeedQuery(collectionId: number) {
  const { data, fetchNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery(
    {
      queryKey: [collectionFeed, collectionId],
      queryFn: ({ pageParam, signal }) =>
        getCollectionFeed(collectionId, pageParam, signal),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages, lastPageParam) => {
        const { hasNextPage } = lastPage;

        if (!hasNextPage) {
          return undefined;
        }

        return lastPageParam + 1;
      },
      staleTime: Infinity,
    },
  );

  const collectionFeedGames = useMemo(() => {
    const collectionFeedGames = data?.pages.reduce((prev, current) => {
      return {
        formattedGamesOfCollections: [
          ...prev.formattedGamesOfCollections,
          ...current.formattedGamesOfCollections,
        ],
        hasNextPage: current.hasNextPage,
      };
    });

    return collectionFeedGames;
  }, [data]);

  const getNextPage = useCallback(() => {
    !isFetchingNextPage && collectionFeedGames?.hasNextPage && fetchNextPage();
  }, [collectionFeedGames]);

  return { collectionFeedGames, isLoading, getNextPage };
}

export default useCollectionFeedQuery;
