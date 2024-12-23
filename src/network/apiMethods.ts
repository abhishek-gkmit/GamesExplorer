import { apiConstants, apiEndpoints } from './apiConstants';
import { _postForAuth } from './axiosMethods';

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

export { login, signUp };
