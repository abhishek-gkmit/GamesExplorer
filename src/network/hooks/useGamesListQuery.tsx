import { useCallback, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getGamesList } from '@network/apiMethods';
import { gamesListKey } from '@constants/query';

function useGamesListQuery(
  categories: string[],
  searchQuery?: string,
  platforms?: string[],
) {
  const { data, fetchNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery(
    {
      queryKey: [gamesListKey, categories, searchQuery, platforms],
      queryFn: ({ pageParam, signal }) =>
        getGamesList(pageParam, categories, searchQuery, platforms, signal),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages, lastPageParam) => {
        const { hasNextPage } = lastPage;

        if (hasNextPage) {
          return lastPageParam + 1;
        }
      },
      staleTime: Infinity,
    },
  );

  const gamesList = useMemo(() => {
    return data?.pages.reduce((prev, current) => {
      return {
        formattedGamesList: [
          ...prev.formattedGamesList,
          ...current.formattedGamesList,
        ],
        hasNextPage: current.hasNextPage,
      };
    });
  }, [data]);

  const getNextPage = useCallback(() => {
    !isFetchingNextPage && gamesList?.hasNextPage && fetchNextPage();
  }, [gamesList]);

  return { gamesList, isLoading, getNextPage };
}

export default useGamesListQuery;
