import { StyleSheet } from 'react-native';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
  });
}

export default getThemedStyles;
