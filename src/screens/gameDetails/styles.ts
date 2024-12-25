import { StyleSheet } from 'react-native';

import { fontFamily, fontSize } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';

function gameDetailsStyles(colors: Colors) {
  return StyleSheet.create({
    gameDetails: {
      flex: 1,
      backgroundColor: colors.detailScreen,
    },

    backBtn: {
      backgroundColor: colors.detailScreen,
      padding: moderateScale(10),
    },

    container: {
      flexDirection: 'row',
      paddingHorizontal: horizontalScale(20),
      gap: horizontalScale(10),
    },

    nameAndDevContainer: {},

    gameLogo: {
      width: horizontalScale(50),
      height: verticalScale(50),
      borderRadius: moderateScale(5),
      elevation: 10,
    },

    name: {
      fontSize: fontSize.eighteen,
      fontFamily: fontFamily.MontserratMedium,
      color: colors.foreground,
    },

    developer: {
      fontSize: fontSize.twelve,
      color: colors.foreground,
    },

    detailCardContainer: {
      flex: 1,
      flexDirection: 'row',
      gap: horizontalScale(20),
      marginTop: verticalScale(20),
      paddingHorizontal: horizontalScale(20),
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    detailCardContainerContent: {
      flex: 1,
      gap: horizontalScale(20),
      paddingHorizontal: horizontalScale(20),
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    ratingAndReviewsContainer: {},

    ratingContainer: {
      gap: verticalScale(2),
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    rating: {
      fontSize: fontSize.ten,
      color: colors.foreground,
    },

    detailContainer: {
      alignItems: 'center',
    },

    detailFirstLine: {
      fontSize: fontSize.twelve,
      fontFamily: fontFamily.MontserratMedium,
    },

    detailSecondLine: {
      fontSize: fontSize.ten,
    },

    ageRating: {
      backgroundColor: colors.backgroundLighter,
      color: colors.foregroundDarker,
      padding: moderateScale(1),
      paddingVertical: verticalScale(0),
      fontSize: fontSize.twelve,
      fontFamily: fontFamily.MontserratMedium,
    },

    ageRatingDesc: {
      fontSize: fontSize.ten,
    },

    playtimeContainer: {
      alignItems: 'center',
    },

    playtime: {
      fontSize: fontSize.twelve,
    },

    insights: {
      marginTop: verticalScale(20),
    },

    insightsContent: {
      gap: horizontalScale(10),
      paddingHorizontal: horizontalScale(20),
    },

    insightImage: {
      width: horizontalScale(250),
      height: verticalScale(150),
      borderRadius: moderateScale(10),
    },

    trailer: {
      width: horizontalScale(250),
      height: verticalScale(150),
      borderRadius: moderateScale(10),
    },

    playBtn: {
      backgroundColor: colors.black7,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 9999,
      padding: moderateScale(10),
    },

    customVideo: {
      width: horizontalScale(250),
      height: verticalScale(150),
      borderRadius: moderateScale(10),
      justifyContent: 'center',
      alignItems: 'center',
    },

    videoContainer: {
      backgroundColor: colors.black,
    },

    description: {
      paddingHorizontal: horizontalScale(20),
      paddingTop: verticalScale(20),
    },

    showLessMoreBtn: {
      color: colors.secondary,
      textDecorationLine: 'underline',
      paddingLeft: horizontalScale(5),
      fontSize: fontSize.fourteen,
    },

    descriptionHeadingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: verticalScale(5),
    },

    descriptionHeading: {
      fontSize: fontSize.sixteen,
      fontFamily: fontFamily.MontserratMedium,
    },

    detailContainerSeparator: {
      width: horizontalScale(1),
      height: verticalScale(20),
      backgroundColor: colors.detailSeparator,
    },

    addToCollectionsBtn: {
      marginTop: verticalScale(20),
      marginHorizontal: horizontalScale(20),
      borderRadius: moderateScale(20),
    },

    addToCollectionsBtnText: {
      textAlign: 'center',
      fontFamily: fontFamily.MontserratMedium,
    },

    tagsContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: horizontalScale(20),
      flexWrap: 'wrap',
      gap: horizontalScale(10),
    },

    sectionSeparator: {
      height: verticalScale(1),
      backgroundColor: colors.detailSeparator,
      marginHorizontal: horizontalScale(20),
      marginTop: verticalScale(20),
    },

    sectionHeading: {
      fontSize: fontSize.sixteen,
      fontFamily: fontFamily.MontserratMedium,
      marginTop: verticalScale(15),
      marginBottom: verticalScale(10),
      marginHorizontal: horizontalScale(20),
    },

    gamePlatforms: {
      fontSize: fontSize.twelve,
      backgroundColor: colors.detailScreen,
      marginHorizontal: horizontalScale(20),
      flexDirection: 'row',
      gap: moderateScale(10),
      marginBottom: verticalScale(20),
    },
  });
}

export default gameDetailsStyles;
