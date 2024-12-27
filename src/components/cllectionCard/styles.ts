import { StyleSheet } from 'react-native';

import { fontFamily, fontSize } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';

function collectionCardStyles(colors: Colors) {
  return StyleSheet.create({
    collectionCard: {
      flexDirection: 'row',
      gap: moderateScale(10),
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: moderateScale(10),
      backgroundColor: colors.collectionCardBackground,
      borderRadius: moderateScale(10),
    },

    collectionName: {
      verticalAlign: 'middle',
      fontFamily: fontFamily.MontserratMedium,
    },

    collectionImage: {
      width: horizontalScale(40),
      height: verticalScale(40),
      borderRadius: moderateScale(10),
    },

    collectionGamesCount: {
      fontSize: fontSize.ten,
      fontFamily: fontFamily.MontserratMedium,
      position: 'absolute',
      top: 2,
      left: 2,
      backgroundColor: colors.gunmetal,
      paddingHorizontal: horizontalScale(8),
      paddingVertical: verticalScale(4),
      borderRadius: moderateScale(10),
    },
  });
}

export default collectionCardStyles;
