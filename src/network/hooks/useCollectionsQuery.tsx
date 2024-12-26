import { allCollections, gameCollections } from '@constants/query';
import { getAllCollections, getCollectionsOfGames } from '@network/apiMethods';
import { useQuery } from '@tanstack/react-query';

function useCollectionsQuery(gameId: number) {
  const { data: collections, isFetching: isFetchingAllCollections } = useQuery({
    queryKey: [allCollections],
    queryFn: () => getAllCollections(),
  });

  const { data: gameInCollections, isFetching: isFetchingGameCollections } =
    useQuery({
      queryKey: [gameCollections, gameId],
      queryFn: () => getCollectionsOfGames(gameId),
    });

  return {
    collections,
    gameInCollections,
    isFetchingAllCollections,
    isFetchingGameCollections,
  };
}

export default useCollectionsQuery;
