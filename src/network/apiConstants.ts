import { API_KEY, API_BASE_URL } from '@env';

export const apiConstants = {
  BASE_URL: API_BASE_URL,
  API_KEY,
};

export const apiEndpoints = {
  login: 'auth/login',
  signUp: 'auth/register',
  gameList: 'games',
};
