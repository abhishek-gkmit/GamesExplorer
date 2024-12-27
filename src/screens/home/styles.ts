import { StyleSheet } from 'react-native';

import { fontFamily, fontSize } from '@constants/fonts';
import {
  heightPercentageToDP,
  horizontalScale,
  moderateScale,
  verticalScale,
  widthPercentageToDP,
} from '@utility/scalingHelpers';

function homeStyles(colors: Colors) {
  return StyleSheet.create({
    homeScreen: {
      flex: 1,
      backgroundColor: colors.backgroundDarker,
    },

    homeHeader: {
      paddingVertical: verticalScale(10),
      elevation: 10,
    },

    headingAndProfile: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    screenHeading: {
      fontSize: fontSize.eighteen,
      fontFamily: fontFamily.MontserratMedium,
      verticalAlign: 'middle',
      paddingHorizontal: horizontalScale(20),
    },

    gameList: {
      backgroundColor: colors.background,
      zIndex: 1,
    },

    gameListContent: {
      padding: moderateScale(20),
      gap: moderateScale(20),
      zIndex: 1,
    },

    loader: {
      backgroundColor: colors.black2,
      marginTop: verticalScale(20),
    },

    listLoader: {
      backgroundColor: colors.black0,
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

    menuOverlay: {
      width: widthPercentageToDP(100),
      height: heightPercentageToDP(100),
      backgroundColor: colors.black0,
      position: 'absolute',
      top: -18,
      left: -369,
      zIndex: 20,
    },

    menuBtn: {
      paddingRight: horizontalScale(10),
    },

    menuContainer: {
      position: 'absolute',
      top: 30,
      left: -75,
      width: horizontalScale(100),
      backgroundColor: colors.gunmetal,
      padding: moderateScale(10),
      gap: verticalScale(10),
      zIndex: 100,
      borderRadius: 10,
      elevation: 10,
    },

    logoutOption: {
      color: colors.error,
    },
  });
}

export default homeStyles;
