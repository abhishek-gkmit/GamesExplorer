import { StyleSheet } from 'react-native';

import { horizontalScale, moderateScale } from '@utility/scalingHelpers';

function chipStyles(colors: Colors) {
  return StyleSheet.create({
    chip: {
      backgroundColor: colors.black0,
      padding: moderateScale(5),
      paddingHorizontal: horizontalScale(10),
      borderWidth: moderateScale(1),
      borderColor: colors.chipBorder,
      borderRadius: moderateScale(10),
    },

    chipTitle: {
      color: colors.foreground,
    },
  });
}

export default chipStyles;
