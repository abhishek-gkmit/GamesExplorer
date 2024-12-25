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
        return lastPageParam + 1;
      },
      staleTime: Infinity,
    },
  );

  const gamesList = useMemo(() => {
    return data?.pages.reduce((prev, current) => [...prev, ...current], []);
  }, [data]);

  const getNextPage = useCallback(() => {
    !isFetchingNextPage && gamesList?.length && fetchNextPage();
  }, [gamesList]);

  return { gamesList, isLoading, getNextPage };
}

export default useGamesListQuery;
