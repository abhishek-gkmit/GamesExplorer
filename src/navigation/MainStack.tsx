import ROUTES from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from '@screens/auth';

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.MainStack.AuthScreen} component={AuthScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
