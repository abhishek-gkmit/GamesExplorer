import { AxiosError, AxiosRequestConfig } from 'axios';

import { axiosInstance } from './axiosInstance';

async function _get(endpoint: string, params?: any, signal?: AbortSignal) {
  try {
    return await axiosInstance.get(endpoint, { params, signal });
  } catch (error) {
    throw error as AxiosError;
  }
}

async function _post(endpoint: string, body: any) {
  try {
    return await axiosInstance.post(endpoint, body);
  } catch (error) {
    throw error as AxiosError;
  }
}

async function _postForAuth(
  endpoint: string,
  data: any,
  loginConfig: AxiosRequestConfig = {},
) {
  try {
    return await axiosInstance.post(endpoint, data, loginConfig);
  } catch (error) {
    throw error as AxiosError;
  }
}

async function _put(endpoint: string, body: any) {
  try {
    return await axiosInstance.put(endpoint, body);
  } catch (error) {
    throw error as AxiosError;
  }
}

async function _del(endpoint: string, params?: any, data?: any) {
  try {
    return await axiosInstance.delete(endpoint, { params, data });
  } catch (error) {
    throw error as AxiosError;
  }
}

async function _patch(endpoint: string, body: any) {
  try {
    return await axiosInstance.patch(endpoint, body);
  } catch (error) {
    throw error as AxiosError;
  }
}

export { _get, _post, _postForAuth, _put, _del, _patch };
