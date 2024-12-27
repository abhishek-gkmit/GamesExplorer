import { StyleSheet } from 'react-native';

import { horizontalScale, moderateScale } from '@utility/scalingHelpers';
import { fontFamily } from '@constants/fonts';

function toggleButtonStyles(colors: Colors) {
  return StyleSheet.create({
    toggleButton: {
      flexDirection: 'row',
      backgroundColor: colors.black0,
      padding: moderateScale(5),
      paddingHorizontal: horizontalScale(10),
      borderWidth: moderateScale(1),
      borderColor: colors.black4,
      borderRadius: moderateScale(10),
      gap: moderateScale(10),
    },

    on: {
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
    },

    text: {
      color: colors.darkGunmetal,
      fontFamily: fontFamily.MontserratMedium,
    },

    textOn: {
      color: colors.foreground,
      fontFamily: fontFamily.MontserratMedium,
    },
  });
}

export default toggleButtonStyles;
