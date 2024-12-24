import { formatGameDetailsList } from '@utility/dataFormatters';

import { apiConstants, apiEndpoints } from './apiConstants';
import { _get, _post, _postForAuth } from './axiosMethods';

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

async function getGamesList(page: number, categories: string[]) {
  const params = {
    page,
    genres: categories
      .map(category => category.toLowerCase())
      .join(',')
      .replaceAll(' ', '-'),
  };

  console.log('getting data for page', page);
  const res = await _get(apiEndpoints.gameList, params);

  return formatGameDetailsList(res.data);
}

export { login, signUp, getGamesList };
