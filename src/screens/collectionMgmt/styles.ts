import { StyleSheet } from 'react-native';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';
import { fontFamily, fontSize } from '@constants/fonts';

function collectionsMgmtStyles(colors: Colors) {
  return StyleSheet.create({
    collectionsMgmtOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.black8,
      paddingVertical: verticalScale(100),
    },

    collectionsMgmt: {
      width: '90%',
      flex: 1,
      backgroundColor: colors.background,
      borderRadius: moderateScale(10),
      paddingHorizontal: horizontalScale(10),
    },

    collectionsMgmtHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: moderateScale(10),
    },

    collectionsMgmtHeading: {
      fontFamily: fontFamily.MontserratMedium,
      fontSize: fontSize.eighteen,
    },

    collectionsCardsContainer: {
      flex: 1,
    },

    collectionsCardsContainerContent: {
      gap: verticalScale(10),
      padding: moderateScale(10),
      paddingBottom: verticalScale(15),
    },

    closeBtn: {
      padding: moderateScale(5),
      alignSelf: 'flex-end',
      borderRadius: 999,
      elevation: 10,
    },

    collectionCardManager: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.collectionCardBackground,
      borderRadius: moderateScale(10),
      elevation: 5,
      paddingRight: horizontalScale(10),
    },

    collectionImage: {
      width: horizontalScale(40),
      height: verticalScale(40),
      borderRadius: moderateScale(10),
    },

    collectionCardLoader: {
      backgroundColor: colors.black0,
    },

    newCollectionBtn: {
      marginBottom: verticalScale(10),
      backgroundColor: colors.secondary,
      fontFamily: fontFamily.MontserratSemiBold,
    },
  });
}

export default collectionsMgmtStyles;
