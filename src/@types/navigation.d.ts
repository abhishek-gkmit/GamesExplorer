import { NavigationProp, RouteProp } from '@react-navigation/native';

import ROUTES from '@constants/routes';

declare global {
  type MainStackScreenNames = keyof typeof ROUTES.MainStack;
  type MainStackParamList = {
    [ROUTES.MainStack.BottomTabs]: undefined;
    [ROUTES.MainStack.GameDetails]: {
      gameId: string;
    };
    [ROUTES.MainStack.CollectionsMgmt]: undefined;
  };
  type MainStackNavigationProp = NavigationProp<MainStackParamList>;
  type MainStackRouteProp = RouteProp<MainStackParamList>;

  type BottomTabsScreenNames = keyof typeof ROUTES.BottomTabs;
  type BottomTabsParamList = Record<BottomTabsScreenNames, undefined>;
}
