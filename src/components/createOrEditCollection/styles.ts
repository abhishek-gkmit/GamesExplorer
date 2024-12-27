import { StyleSheet } from 'react-native';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';
import { fontFamily, fontSize } from '@constants/fonts';

function collectionsMgmtStyles(colors: Colors) {
  return StyleSheet.create({
    createNewCollection: {
      gap: verticalScale(20),
      justifyContent: 'center',
      padding: moderateScale(15),
      elevation: 10,
      backgroundColor: colors.background,
    },

    createNewCollectionHeading: {
      fontSize: fontSize.eighteen,
      fontFamily: fontFamily.MontserratMedium,
    },

    nameInput: {
      backgroundColor: colors.background,
      color: colors.foreground,
      borderWidth: moderateScale(2),
      borderRadius: moderateScale(10),
      borderColor: colors.primary,
      padding: moderateScale(10),
    },

    btnsContainer: {
      flexDirection: 'row',
      gap: horizontalScale(20),
    },

    cancelBtn: {
      flex: 1,
      backgroundColor: colors.backgroundLighter,
    },

    createBtn: {
      flex: 1,
      backgroundColor: colors.secondary,
    },
  });
}

export default collectionsMgmtStyles;
