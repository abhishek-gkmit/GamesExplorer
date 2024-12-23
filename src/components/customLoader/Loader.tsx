import { View, ActivityIndicator, StyleSheet } from 'react-native';

import useStyles from '@hooks/useStyles';
import useGlobalStyles from '@hooks/useGlobalStyles';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';

import getStyles from './styles';

function Loader({ size }: CustomLoaderProps) {
  const { colors } = useAppSelector(selectTheme);

  const globalStyles = useGlobalStyles();
  const localStyles = useStyles(getStyles);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.centerAlignContainer,
        localStyles.loaderContainer,
      )}>
      <ActivityIndicator
        animating={true}
        color={colors.primary}
        size={size || 'large'}
      />
    </View>
  );
}

export default Loader;
