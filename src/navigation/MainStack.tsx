import ROUTES from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameDetails from '@screens/gameDetails';

import BottomTabsNavigator from './BottomTabs';
import CollectionsManagement from '@screens/collectionMgmt';
import CollectionGames from '@screens/collectionGames';

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.MainStack.BottomTabs}
        component={BottomTabsNavigator}
      />

      <Stack.Screen
        name={ROUTES.MainStack.GameDetails}
        component={GameDetails}
        options={{ animation: 'fade' }}
      />

      <Stack.Screen
        name={ROUTES.MainStack.CollectionsMgmt}
        component={CollectionsManagement}
        options={{ presentation: 'transparentModal', animation: 'fade' }}
      />

      <Stack.Screen
        name={ROUTES.MainStack.CollectionGames}
        component={CollectionGames}
        options={{
          presentation: 'transparentModal',
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
