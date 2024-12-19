import { axiosInstance } from './axiosInstance';

export async function _get(endpoint: string, params?: any) {
  const res = await axiosInstance.get(endpoint, { params });

  return res.data;
}

export async function _post(endpoint: string, body: any) {
  const res = await axiosInstance.post(endpoint, body);

  return res.data;
}

export async function _put(endpoint: string, body: any) {
  const res = await axiosInstance.put(endpoint, body);

  return res.data;
}

export async function _del(endpoint: string, params?: any) {
  const res = await axiosInstance.delete(endpoint, { params });

  return res.data;
}
