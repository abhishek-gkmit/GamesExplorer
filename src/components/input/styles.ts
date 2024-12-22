import { StyleSheet } from 'react-native';

import { fontSize } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor: colors.background,
      borderRadius: moderateScale(10),
      padding: moderateScale(10),
      gap: moderateScale(10),
      borderWidth: moderateScale(1),
      borderColor: colors.inputBorderColorUnFocused,
      alignItems: 'center',
    },

    inputContainerFocus: {
      borderColor: colors.primary,
    },

    inputContainerError: {
      borderColor: colors.error,
    },

    inputLabel: {
      color: colors.foreground,
      marginBottom: verticalScale(5),
    },

    textInput: {
      color: colors.foreground,
      fontSize: fontSize.fourteen,
      padding: 0,
      flexGrow: 1,
      flexShrink: 1,
      textAlignVertical: 'center',
    },

    errorMsg: {
      color: colors.error,
      paddingHorizontal: horizontalScale(10),
      marginTop: verticalScale(5),
      textAlign: 'left',
      fontSize: fontSize.twelve,
    },
  });
}

export default getThemedStyles;
