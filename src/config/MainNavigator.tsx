import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import MainStack from '@navigation/MainStack';
import Auth from '@screens/auth';
import { useAppDispatch, useAppSelector } from '@store';
import { changeThemeAction } from '@store/reducers/theme';
import { selectTheme } from '@store/selectors/theme';
import { selectIsUserLoggedIn } from '@store/selectors/user';
import { setUserKey } from '@store/reducers/user';
import { getSavedUserKey } from '@utility/mmkvStorage';

function MainNavigator() {
  const theme = useColorScheme();

  const { colors } = useAppSelector(selectTheme);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeThemeAction(theme));
  }, [theme]);

  useEffect(() => {
    const userKey = getSavedUserKey();
    if (userKey) {
      dispatch(setUserKey(userKey));
    }
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.background} />
      <NavigationContainer>
        {isUserLoggedIn ? <MainStack /> : <Auth />}
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default MainNavigator;
