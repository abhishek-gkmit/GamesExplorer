import { fontFamily, fontSize } from '@constants/fonts';
import {
  heightPercentageToDP,
  horizontalScale,
  moderateScale,
  verticalScale,
  widthPercentageToDP,
} from '@utility/scalingHelpers';
import { StyleSheet } from 'react-native';

function collectionGamesStyles(colors: Colors) {
  return StyleSheet.create({
    collectionsScreen: {
      flex: 1,
      backgroundColor: colors.background,
    },

    collectionsHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingVertical: verticalScale(15),
      paddingLeft: horizontalScale(10),
      zIndex: 80,
    },

    backBtnAndHeadingcontainer: {
      flex: 1,
      flexDirection: 'row',
      gap: horizontalScale(20),
      alignItems: 'center',
    },

    backBtn: {
      zIndex: 100,
    },

    collectionsHeading: {
      flex: 1,
      fontSize: fontSize.eighteen,
      fontFamily: fontFamily.MontserratMedium,
      color: colors.foreground,
    },

    menuOverlay: {
      width: widthPercentageToDP(100),
      height: heightPercentageToDP(100),
      backgroundColor: colors.black0,
      position: 'absolute',
      top: -18,
      left: -369,
    },

    menuBtn: {
      paddingHorizontal: horizontalScale(10),
    },

    menuContainer: {
      position: 'absolute',
      top: 30,
      left: -75,
      width: horizontalScale(100),
      backgroundColor: colors.gunmetal,
      padding: moderateScale(10),
      gap: verticalScale(10),
      zIndex: 10,
      borderRadius: 10,
      elevation: 10,
    },

    editMenuOption: {},

    deleteMenuOption: {
      color: colors.error,
    },

    gameList: {
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

    listLoader: {
      backgroundColor: colors.black0,
    },

    editModal: {
      flex: 1,
      backgroundColor: colors.black8,
      justifyContent: 'center',
      alignItems: 'center',
    },

    editDialog: {
      width: '90%',
      marginHorizontal: horizontalScale(20),
      borderRadius: moderateScale(10),
    },
  });
}

export default collectionGamesStyles;
