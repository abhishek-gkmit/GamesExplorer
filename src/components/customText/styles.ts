import { StyleSheet } from 'react-native';

import { fontFamily } from '@constants/fonts';

function textBlockStyles(colors: Colors) {
  return StyleSheet.create({
    textBlock: {
      color: colors.foreground,
      fontFamily: fontFamily.NunitoSansRegular,
    },
  });
}

export default textBlockStyles;
