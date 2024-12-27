import { NavigationProp, RouteProp } from '@react-navigation/native';

import ROUTES from '@constants/routes';

declare global {
  type MainStackScreenNames = keyof typeof ROUTES.MainStack;
  type MainStackParamList = {
    [ROUTES.MainStack.BottomTabs]: undefined;
    [ROUTES.MainStack.GameDetails]: {
      gameId: string;
    };
    [ROUTES.MainStack.CollectionGames]: {
      collectionId: number;
      collectionName: string;
    };
    [ROUTES.MainStack.CollectionsMgmt]: {
      gameId: number;
    };
  };

  type MainStackNavigationProp = NavigationProp<MainStackParamList>;

  type GameDetailsRouteProp = RouteProp<
    MainStackParamList,
    typeof ROUTES.MainStack.GameDetails
  >;
  type CollectionGamesRouteProp = RouteProp<
    MainStackParamList,
    typeof ROUTES.MainStack.CollectionGames
  >;
  type CollectionsMgmtRouteProp = RouteProp<
    MainStackParamList,
    typeof ROUTES.MainStack.CollectionsMgmt
  >;

  type BottomTabsScreenNames = keyof typeof ROUTES.BottomTabs;
  type BottomTabsParamList = Record<BottomTabsScreenNames, undefined>;
}
