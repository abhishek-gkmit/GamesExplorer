import { useQuery } from '@tanstack/react-query';

import { getAllCollections, getCollectionsOfGames } from '@network/apiMethods';
import { allCollections, gameCollections } from '@constants/query';
import { useAppSelector } from '@store/index';

function useCollectionsQuery(gameId?: number) {
  const userDetails = useAppSelector(state => state.user.userDetails);

  const { data: collections, isFetching: isFetchingAllCollections } = useQuery({
    queryKey: [allCollections],
    queryFn: () => getAllCollections(userDetails.id),
  });

  const { data: gameInCollections, isFetching: isFetchingGameCollections } =
    gameId
      ? useQuery({
        queryKey: [gameCollections, gameId],
        queryFn: () => getCollectionsOfGames(gameId),
      })
      : { data: undefined, isFetching: false };

  return {
    collections,
    gameInCollections,
    isFetchingAllCollections,
    isFetchingGameCollections,
  };
}

export default useCollectionsQuery;
