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

function ellipsize(text: string, length: number) {
  if (text.length >= length) {
    return text.slice(0, length - 3) + '...';
  }

  return text;
}

function removeHtmlTags(htmlText: string) {
  return htmlText.replace(/<[^>]*>/g, '');
}

// returns game platform icon name by the platform name
function getPlatformIconName(platform: string) {
  switch (platform.toLowerCase()) {
    case 'pc':
      return 'microsoft-windows';
    case 'xbox':
      return 'microsoft-xbox';
    case 'playstation':
      return 'sony-playstation';
    case 'ios':
      return 'apple-ios';
    case 'android':
      return 'android';
    case 'mac':
      return 'apple';
    case 'linux':
      return 'linux';
    case 'nintendo':
      return 'nintendo-switch';
    default:
      return 'web';
  }
}

export { setTokenInterceptor, ellipsize, removeHtmlTags, getPlatformIconName };
