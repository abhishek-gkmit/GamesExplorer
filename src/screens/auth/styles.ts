import { StyleSheet } from 'react-native';

import { fontFamily, fontSize, fontWeight } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  widthPercentageToDP,
} from '@utility/scalingHelpers';

function authStyles(colors: Colors) {
  return StyleSheet.create({
    authScreen: {
      backgroundColor: colors.backgroundDarker,
    },

    imageOverlay: {
      flex: 1,
      backgroundColor: colors.black4,
      justifyContent: 'flex-end',
    },

    logoAndNameContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: moderateScale(8),
      position: 'absolute',
      top: 0,
      width: widthPercentageToDP(100),
      marginTop: verticalScale(80),
    },

    appLogo: {
      width: horizontalScale(150),
      height: verticalScale(150),
      borderRadius: 9999,
    },

    appName: {
      textAlign: 'center',
      fontSize: fontSize.twenty,
      fontFamily: fontFamily.MontserratMedium,
    },

    formContainer: {
      justifyContent: 'flex-end',
      gap: moderateScale(15),
      padding: moderateScale(20),
      paddingBottom: verticalScale(100),
      borderTopLeftRadius: moderateScale(10),
      borderTopRightRadius: moderateScale(10),
    },

    formHeading: {
      fontSize: fontSize.twentyFour,
      textAlign: 'left',
    },

    loginOptionContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      bottom: -80,
      width: '100%',
    },

    loginOptionIndicator: {
      color: colors.primary,
      fontWeight: fontWeight.medium,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },

    loginQuestion: {
      color: colors.foreground,
      textAlign: 'center',
    },

    submitBtn: {
      marginTop: verticalScale(5),
      padding: moderateScale(9),
      backgroundColor: colors.secondary,
    },

    submitBtnText: {
      textAlign: 'center',
      fontSize: fontSize.sixteen,
      fontFamily: fontFamily.MontserratMedium,
    },

    loader: {
      height: 20,
      marginTop: verticalScale(20),
      marginBottom: verticalScale(21),
    },
  });
}

export default authStyles;
