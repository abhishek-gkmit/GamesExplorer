import { useQuery } from '@tanstack/react-query';

import { getGameDetails } from '@network/apiMethods';
import { gameDetailsKey } from '@constants/query';

function useGameDetailsQuery(gameId: string) {
  const { data, isFetching } = useQuery({
    queryKey: [gameDetailsKey, gameId],
    queryFn: () => getGameDetails(gameId),
  });

  return { data, loading: isFetching };
}

export default useGameDetailsQuery;
