import { View, ActivityIndicator, StyleSheet } from 'react-native';

import useStyles from '@hooks/useStyles';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';

import getStyles from './styles';

function Loader({ size, style }: CustomLoaderProps) {
  const { colors } = useAppSelector(selectTheme);

  const localStyles = useStyles(getStyles);

  return (
    <View style={StyleSheet.compose(localStyles.loaderContainer, style)}>
      <ActivityIndicator
        animating={true}
        color={colors.primary}
        size={size || 'large'}
      />
    </View>
  );
}

export default Loader;
