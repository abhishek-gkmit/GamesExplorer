import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getGamesList } from '@network/apiMethods';
import { gamesListKey } from '@constants/query';

function useGamesListQuery(categories: string[]) {
  const { data, fetchNextPage, isLoading, isFetching } = useInfiniteQuery({
    queryKey: [gamesListKey, categories],
    queryFn: ({ pageParam }) => getGamesList(pageParam, categories),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      return lastPageParam + 1;
    },
  });

  const gamesList = useMemo(() => {
    return data?.pages.reduce((prev, current) => [...prev, ...current], []);
  }, [data]);

  return { gamesList, isLoading: isLoading || isFetching, fetchNextPage };
}

export default useGamesListQuery;
