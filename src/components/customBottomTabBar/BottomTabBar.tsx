import { memo, useMemo, useCallback, useEffect } from 'react';
import { View, Pressable, Animated, useAnimatedValue } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import uuid from 'react-native-uuid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useStyles from '@hooks/useStyles';
import useThemeContext from '@hooks/useThemeContext';
import ROUTES from '@constants/routes';

import bottomTabBarStyles from './styles';

function getIconName(routeName: string) {
  switch (routeName) {
    case ROUTES.BottomTabs.Dashboard:
      return 'home';

    case ROUTES.BottomTabs.Favourites:
      return 'heart';

    // case ROUTES.BottomTabs.MealPlanner:
    //   return 'clipboard-text-outline';

    default:
      return 'crosshairs-question';
  }
}

const BottomTab = memo(({ isFocused, title, onPress }: BottomTabProps) => {
  const position = useAnimatedValue(0.8);

  const styles = useStyles(bottomTabBarStyles);
  const { colors } = useThemeContext();

  const animatedStyles = useMemo(() => {
    return { transform: [{ scale: position }, { translateY: position.interpolate({ inputRange: [0.8, 1.2], outputRange: [1, -5] }) }] };
  }, [position]);

  const animate = useCallback(() => {
    Animated.timing(position, {
      toValue: 1.2,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [position]);

  useEffect(() => {
    if (isFocused) {
      animate();
    }
  }, [isFocused]);

  return (
    <Pressable style={styles.tabContainer} onPress={onPress}>
      <Animated.View style={[styles.tab, animatedStyles]}>
        <MaterialCommunityIcons
          name={getIconName(title)}
          size={24}
          color={colors.primary}
        />
      </Animated.View>
    </Pressable>
  );
});

function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const styles = useStyles(bottomTabBarStyles);

  return (
    <View style={styles.tabsContainer}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;

        return (
          <BottomTab
            key={uuid.v1().toString()}
            isFocused={isFocused}
            title={label}
            onPress={() => navigation.navigate(route.name)}
          />
        );
      })}
    </View>
  );
}

export default BottomTabBar;
