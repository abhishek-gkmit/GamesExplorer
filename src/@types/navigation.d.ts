import ROUTES from '@constants/routes';

declare global {
  type MainStackScreenNames = keyof typeof ROUTES.MainStack;
  type MainStackParamList = Record<MainStackScreenNames, undefined>;
}
