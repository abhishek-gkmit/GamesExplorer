import { axiosInstance } from '@network/axiosInstance';

/* set the user `key` in every request's param
 * so that we don't have to pass it every time when we make a request*/
function setTokenInterceptor(key: string) {
  const token = `Token ${key}`;

  axiosInstance.interceptors.request.clear();

  axiosInstance.interceptors.request.use(reqestConfig => {
    reqestConfig.headers.set('token', token);

    return reqestConfig;
  });
}

export { setTokenInterceptor };
