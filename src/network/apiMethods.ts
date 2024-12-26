import {
  formatCollections,
  formatCollectionsOfGames,
  formatGameDetails,
  formatGameDetailsList,
  formatNewCollection,
} from '@utility/dataFormatters';

import { apiConstants, apiEndpoints } from './apiConstants';
import { _del, _get, _post, _postForAuth } from './axiosMethods';
import { platformFilters } from '@constants';

async function login(email: string, password: string) {
  const data = {
    email,
    password,
  };

  const config = {
    baseURL: apiConstants.BASE_URL,
    params: {},
  };

  const res = await _postForAuth(apiEndpoints.login, data, config);

  return res;
}

async function signUp(username: string, email: string, password: string) {
  const data = {
    username,
    email,
    password,
  };

  const config = {
    baseURL: apiConstants.BASE_URL,
    params: {},
  };

  const res = await _postForAuth(apiEndpoints.signUp, data, config);

  return res;
}

async function getGamesList(
  page: number,
  categories: string[],
  searchQuery?: string,
  platforms?: string[],
  signal?: AbortSignal,
) {
  const genres = categories
    .map(category => category.toLowerCase())
    .join(',')
    .replaceAll(' ', '-');

  const parent_platforms = platforms
    ?.map(platform => platformFilters.indexOf(platform) + 1)
    .join(',');

  const params = {
    page,
    genres,
    parent_platforms,
    search: searchQuery,
  };

  const res = await _get(apiEndpoints.gameList, params, signal);

  return formatGameDetailsList(res.data);
}

async function getGameDetails(gameId: string) {
  const res = await _get(apiEndpoints.gameDetails(gameId));
  const trailersRes = await _get(apiEndpoints.gameTrailers(gameId));
  const screenshotsRes = await _get(apiEndpoints.screenshots(gameId));

  return formatGameDetails(res.data, trailersRes.data, screenshotsRes.data);
}

async function addGameToCollection(gameId: number, collectionId: number) {
  const body = {
    games: [gameId],
  };

  await _post(apiEndpoints.addGameToCollection(collectionId), body);
  return true;
}

async function removeGameFromCollection(gameId: number, collectionId: number) {
  const body = {
    games: [gameId],
  };

  await _del(
    apiEndpoints.deleteGameFromCollection(collectionId),
    undefined,
    body,
  );
  return true;
}

async function createNewCollection(name: string) {
  const body = {
    name,
    description: '',
    is_private: false,
  };

  const res = await _post(apiEndpoints.newCollection, body);

  return formatNewCollection(res.data);
}

async function deleteCollection(collectionId: number) {
  await _del(apiEndpoints.deleteCollection(collectionId));
}

async function updateCollection(collectionId: number, name: string) { }

async function getCollectionFeed(collectionId: number) { }

async function getAllCollections() {
  const res = await _get(apiEndpoints.getAllCollections(742560));

  return formatCollections(res.data);
}

async function getCollectionsOfGames(gameId: number) {
  const res = await _get(apiEndpoints.getGameCollections(gameId));

  return formatCollectionsOfGames(res.data);
}

export {
  login,
  signUp,
  getGamesList,
  getGameDetails,
  addGameToCollection,
  getAllCollections,
  getCollectionsOfGames,
  getCollectionFeed,
  updateCollection,
  deleteCollection,
  createNewCollection,
  removeGameFromCollection,
};
