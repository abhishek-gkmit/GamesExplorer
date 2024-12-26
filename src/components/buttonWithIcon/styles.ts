import { StyleSheet } from 'react-native';

import { moderateScale } from '@utility/scalingHelpers';
import { fontFamily } from '@constants/fonts';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    button: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      borderRadius: moderateScale(10),
      padding: moderateScale(10),
    },

    buttonText: {
      flex: 1,
      color: colors.foreground,
      textAlign: 'center',
      fontFamily: fontFamily.MontserratMedium,
    },
  });
}

export default getThemedStyles;
