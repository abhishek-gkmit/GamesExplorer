import { StyleSheet } from 'react-native';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    loaderContainer: {
      backgroundColor: colors.black0,
    },
  });
}

export default getThemedStyles;
