import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  addGameToCollection,
  createNewCollection,
  deleteCollection,
  removeGameFromCollection,
  updateCollection,
} from '@network/apiMethods';
import {
  allCollections,
  collectionFeed,
  gameCollections,
} from '@constants/query';

function useCollectionsMutation(gameId?: number) {
  const queryClient = useQueryClient();

  const addToCollection =
    gameId &&
    useMutation({
      mutationFn: (collectionId: number) =>
        addGameToCollection(gameId, collectionId),
      onSuccess: data => {
        queryClient.setQueryData<number[]>([gameCollections], oldData => {
          if (!oldData) {
            return oldData;
          }

          queryClient.refetchQueries({
            queryKey: [collectionFeed],
          });

          return [...oldData, gameId];
        });
      },
    });

  const removeFromCollection =
    gameId &&
    useMutation({
      mutationFn: (collectionId: number) =>
        removeGameFromCollection(gameId, collectionId),
      onSuccess: data => {
        queryClient.setQueryData<number[]>([gameCollections], oldData => {
          if (!oldData) {
            return oldData;
          }

          queryClient.refetchQueries({
            queryKey: [collectionFeed],
          });

          return oldData.filter(oldGameId => oldGameId !== gameId);
        });
      },
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

  const updateCollectionName = useMutation({
    mutationFn: ({ collectionId, name }: { collectionId: number; name: string }) =>
      updateCollection(collectionId, name),
    onSuccess: data => {
      queryClient.setQueryData<GameCollection[]>([allCollections], oldData => {
        if (!oldData) {
          return;
        }

        return oldData.map(oldGameCollection => {
          if (oldGameCollection.id === data.id) {
            return data;
          }

          return oldGameCollection;
        });
      });
    },
  });

  const removeCollection = useMutation({
    mutationFn: (collectionId: number) => deleteCollection(collectionId),
    onSuccess: data => {
      queryClient.setQueryData<GameCollection[]>([allCollections], oldData => {
        if (!oldData) {
          return;
        }

        return oldData.filter(
          oldGameCollection => oldGameCollection.id !== data,
        );
      });
    },
  });

  return {
    addToCollection,
    removeFromCollection,
    createCollection,
    removeCollection,
    updateCollectionName,
  };
}

export default useCollectionsMutation;
