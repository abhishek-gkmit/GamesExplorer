import { StyleSheet } from 'react-native';

import { moderateScale, verticalScale } from '@utility/scalingHelpers';
import { fontSize } from '@constants/fonts';

function toggleFilterListStyles(colors: Colors) {
  return StyleSheet.create({
    scrollViewContainer: {
      gap: moderateScale(15),
    },

    scrollViewContent: {
      gap: moderateScale(10),
    },

    title: {
      fontSize: fontSize.sixteen,
    },
  });
}

export default toggleFilterListStyles;
