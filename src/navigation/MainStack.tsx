import ROUTES from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameDetails from '@screens/gameDetails';

import BottomTabsNavigator from './BottomTabs';

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
      />
    </Stack.Navigator>
  );
}

export default MainStack;
