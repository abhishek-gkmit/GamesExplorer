import { StyleSheet } from 'react-native';

import { moderateScale } from '@utility/scalingHelpers';

function iconButtonStyles(colors: Colors) {
  return StyleSheet.create({
    iconButton: {
      backgroundColor: colors.primary,
      padding: moderateScale(5),
      borderRadius: moderateScale(10),
    },

    buttonText: {
      color: colors.white,
      textAlign: 'center',
    },
  });
}

export default iconButtonStyles;
