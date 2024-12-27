import { fontFamily, fontSize } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';
import { StyleSheet } from 'react-native';

function collectionsScreenStyles(colors: Colors) {
  return StyleSheet.create({
    collectionsScreen: {
      flex: 1,
      backgroundColor: colors.background,
    },

    collectionsHeader: {
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(15),
    },

    collectionsHeading: {
      fontSize: fontSize.eighteen,
      fontFamily: fontFamily.MontserratMedium,
      textAlign: 'left',
    },

    collectionCard: {
      elevation: 5,
    },

    collectionsContainer: {},

    collectionsContainerContent: {
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(20),
      gap: verticalScale(10),
    },

    collectionCardContainer: {
      flexDirection: 'row',
      backgroundColor: colors.collectionCardBackground,
      borderRadius: moderateScale(10),
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: horizontalScale(20),
    },
  });
}

export default collectionsScreenStyles;
