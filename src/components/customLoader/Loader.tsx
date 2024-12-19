import {View, ActivityIndicator, StyleSheet} from 'react-native';

import useStyles from '@hooks/useStyles';
import useThemeContext from '@hooks/useThemeContext';

import getThemedStyles from '@theme/globalStyles';
import getStyles from './styles';

function Loader({size}: CustomLoaderProps) {
  const {colors} = useThemeContext();

  const globalStyles = useStyles(getThemedStyles);
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
