import ROUTES from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabsNavigator from './BottomTabs';

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.MainStack.BottomTabs}
        component={BottomTabsNavigator}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
