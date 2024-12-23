import { MMKV } from 'react-native-mmkv';

import { userAuthKey } from '@constants/storageKeys';

const storage = new MMKV();

function saveUserKey(key: string) {
  storage.set(userAuthKey, key);
}

function getSavedUserKey() {
  return storage.getString(userAuthKey);
}

function clearUserKey() {
  storage.delete(userAuthKey);
}

export { saveUserKey, getSavedUserKey, clearUserKey };
