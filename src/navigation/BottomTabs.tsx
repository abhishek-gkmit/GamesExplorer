import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/home';
import Search from '@screens/search';
import Collections from '@screens/collections';
import BottomTabBar from '@components/customBottomTabBar';
import ROUTES from '@constants/routes';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomTabBar {...props} />}>
      <BottomTabs.Screen name={ROUTES.BottomTabs.Home} component={Home} />
      <BottomTabs.Screen name={ROUTES.BottomTabs.Search} component={Search} />
      <BottomTabs.Screen
        name={ROUTES.BottomTabs.Collections}
        component={Collections}
      />
    </BottomTabs.Navigator>
  );
}

export default BottomTabsNavigator;
