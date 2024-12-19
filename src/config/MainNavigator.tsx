import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import Toast from 'react-native-toast-message';

import TextBlock from '@components/customText';
import { useAppDispatch, useAppSelector } from '@store';
import { changeThemeAction } from '@store/reducers/theme';
import { selectTheme } from '@store/selectors/theme';

function MainNavigator() {
  const theme = useColorScheme();

  const { colors } = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeThemeAction(theme));
  }, [theme]);

  return (
    <>
      <StatusBar backgroundColor={colors.background} />
      <TextBlock>Main Navigator</TextBlock>
      <Toast />
    </>
  );
}

export default MainNavigator;
