import { StyleSheet } from 'react-native';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    loaderContainer: {
      backgroundColor: colors.background,
    },
  });
}

export default getThemedStyles;
