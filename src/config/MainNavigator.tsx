import { useEffect, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import MainStack from '@navigation/MainStack';
import Auth from '@screens/auth';
import Loader from '@components/customLoader';
import { useAppDispatch, useAppSelector } from '@store';
import { changeThemeAction } from '@store/reducers/theme';
import { selectTheme } from '@store/selectors/theme';
import { selectIsUserLoggedIn } from '@store/selectors/user';
import { setUserKey } from '@store/reducers/user';
import { getSavedUserKey } from '@utility/mmkvStorage';
import { setTokenInterceptor } from '@utility/helpers';

function MainNavigator() {
  const [loading, setLoading] = useState(true);

  const theme = useColorScheme();

  const { colors } = useAppSelector(selectTheme);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeThemeAction(theme));
  }, [theme]);

  useEffect(() => {
    setLoading(true);

    const userKey = getSavedUserKey();
    if (userKey) {
      dispatch(setUserKey(userKey));
      setTokenInterceptor(userKey);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <NavigationContainer>
        {isUserLoggedIn ? <MainStack /> : <Auth />}
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default MainNavigator;
