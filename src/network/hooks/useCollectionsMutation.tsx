import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  addGameToCollection,
  createNewCollection,
  deleteCollection,
  removeGameFromCollection,
} from '@network/apiMethods';
import { allCollections } from '@constants/query';

function useCollectionsMutation(gameId: number) {
  const queryClient = useQueryClient();

  const addToCollection = useMutation({
    mutationFn: (collectionId: number) =>
      addGameToCollection(gameId, collectionId),
  });

  const removeFromCollection = useMutation({
    mutationFn: (collectionId: number) =>
      removeGameFromCollection(gameId, collectionId),
  });

  const createCollection = useMutation({
    mutationFn: (name: string) => createNewCollection(name),
    onSuccess: data => {
      queryClient.setQueryData<GameCollection[]>([allCollections], oldData => {
        if (!oldData) {
          return;
        }
        return [...oldData, data];
      });
    },
  });

  const removeCollection = useMutation({
    mutationFn: (collectionId: number) => deleteCollection(collectionId),
  });

  return {
    addToCollection,
    removeFromCollection,
    createCollection,
    removeCollection,
  };
}

export default useCollectionsMutation;
