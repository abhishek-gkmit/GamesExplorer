import axios, { CreateAxiosDefaults } from 'axios';

import { handleError } from './errorHandler';
import { apiConstants } from './apiConstants';

const instanceConfig: CreateAxiosDefaults = {
  baseURL: apiConstants.BASE_URL,
  params: {
    key: apiConstants.API_KEY,
  },
};

const axiosInstance = axios.create(instanceConfig);

axiosInstance.interceptors.response.use(null, function onError(error) {
  handleError(error);
  throw error;
});

export { axiosInstance };
