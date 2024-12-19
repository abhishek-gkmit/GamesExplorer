import { StyleSheet } from 'react-native';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    button: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      borderRadius: 10,
      padding: 10,
    },

    buttonText: {
      color: colors.foreground,
    },
  });
}

export default getThemedStyles;
