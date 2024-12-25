import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';
import { StyleSheet } from 'react-native';

function searchScreenStyles(colors: Colors) {
  return StyleSheet.create({
    searchScreen: {
      flex: 1,
      backgroundColor: colors.background,
    },

    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: horizontalScale(10),
      backgroundColor: colors.background,
      color: colors.foreground,
      borderBottomLeftRadius: moderateScale(20),
      borderBottomRightRadius: moderateScale(20),
      elevation: 20,
      paddingHorizontal: horizontalScale(15),
      paddingVertical: verticalScale(5),
    },

    searchInput: {
      flex: 1,
      backgroundColor: colors.background,
      color: colors.foreground,
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
  });
}

export default searchScreenStyles;
