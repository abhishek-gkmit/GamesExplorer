import { StyleSheet } from 'react-native';

function emptyListIndicatorStyles(colors: Colors) {
  return StyleSheet.create({
    heading: {
      color: colors.foreground,
      textAlign: 'center',
    },
  });
}

export default emptyListIndicatorStyles;
