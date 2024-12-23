import { fontFamily, fontSize } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';
import { StyleSheet } from 'react-native';

function gameCardStyles(colors: Colors) {
  return StyleSheet.create({
    gameCard: {
      margin: moderateScale(20),
      borderRadius: moderateScale(10),
    },

    gameCardBackground: {
      height: verticalScale(200),
      borderRadius: moderateScale(10),
    },

    gradient: {
      flex: 1,
      justifyContent: 'flex-end',
    },

    gameDetailsContainer: {
      flexDirection: 'row',
      margin: moderateScale(15),
      gap: moderateScale(10),
      alignItems: 'center',
    },

    gameLogo: {
      width: horizontalScale(50),
      height: verticalScale(50),
      borderRadius: moderateScale(5),
    },

    gameDetails: {
      gap: moderateScale(2),
    },

    name: {
      fontSize: fontSize.eighteen,
      fontFamily: fontFamily.MontserratMedium,
      color: colors.white,
    },

    genere: {
      fontSize: fontSize.twelve,
      color: colors.white,
    },

    ratingContainer: {
      flexDirection: 'row',
      gap: moderateScale(5),
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    rating: {
      fontSize: fontSize.twelve,
      color: colors.white,
    },

    gamePlatforms: {
      fontSize: fontSize.twelve,
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: colors.black6,
      borderBottomRightRadius: moderateScale(10),
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(3),
      flexDirection: 'row',
      gap: moderateScale(2),
    },

    addToCollectionsBtn: {
      backgroundColor: colors.vampireBlack,
      marginLeft: horizontalScale(40),
      padding: moderateScale(5),
      position: 'absolute',
      top: 0,
      right: 0,
      borderBottomLeftRadius: moderateScale(10),
    },
  });
}

export default gameCardStyles;
