import { API_KEY, API_BASE_URL } from '@env';

export const apiConstants = {
  BASE_URL: API_BASE_URL,
  API_KEY,
};

export const apiEndpoints = {
  login: 'auth/login',
  signUp: 'auth/register',
  gameList: 'games',
  gameDetails: (gameId: string) => `games/${gameId}`,
  gameTrailers: (gameId: string) => `games/${gameId}/movies`,
  screenshots: (gameId: string) => `games/${gameId}/screenshots`,
  addGameToCollection: (collectionId: number) =>
    `/collections/${collectionId}/games`,
  deleteGameFromCollection: (collectionId: number) =>
    `/collections/${collectionId}/games`,
  newCollection: '/collections',
  deleteCollection: (collectionId: number) => `/collections/${collectionId}`,
  deleteAndUpdateCollection: (collectionId: number) =>
    `/collections/${collectionId}`,
  getCollectionFeed: (collectionId: number) =>
    `/collections/${collectionId}/feed`,
  getAllCollections: (userId: number) => `/users/${userId}/collections`,
  getGameCollections: (gameId: number) =>
    `/users/current/collections/${gameId}`,
};
