import { StyleSheet } from 'react-native';

import { fontFamily, fontSize } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';

function homeStyles(colors: Colors) {
  return StyleSheet.create({
    homeScreen: {
      flex: 1,
      backgroundColor: colors.backgroundDarker,
    },

    screenHeading: {
      fontSize: fontSize.twenty,
      fontFamily: fontFamily.MontserratMedium,
      textAlign: 'center',
      verticalAlign: 'middle',
      marginTop: verticalScale(12),
    },

    gameList: {
      marginTop: verticalScale(20),
      backgroundColor: colors.black4,
    },

    gameListContent: {
      padding: moderateScale(20),
      gap: moderateScale(20),
    },

    loader: {
      backgroundColor: colors.black4,
      marginTop: verticalScale(20),
    },

    toggleFilterList: {
      marginTop: verticalScale(15),
    },

    toggleFilterListContent: {
      paddingHorizontal: horizontalScale(20),
    },

    toggleFilterListHeading: {
      paddingHorizontal: horizontalScale(20),
    },
  });
}

export default homeStyles;
