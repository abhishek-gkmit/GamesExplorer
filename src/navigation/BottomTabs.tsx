import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/home';
import Search from '@screens/search';
import Collections from '@screens/collections';
import BottomTabBar from '@components/customBottomTabBar';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomTabBar {...props} />}>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Search" component={Search} />
      <BottomTabs.Screen name="Collections" component={Collections} />
    </BottomTabs.Navigator>
  );
}

export default BottomTabsNavigator;
