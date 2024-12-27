import { StyleSheet } from 'react-native';

import { moderateScale, verticalScale } from '@utility/scalingHelpers';

function bottomTabBarStyles(colors: Colors) {
  return StyleSheet.create({
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: colors.gunmetal,
      height: verticalScale(60),
      elevation: 40,
    },

    tabContainer: {
      flex: 1,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(50),
    },

    tab: {
      backgroundColor: colors.gunmetal,
      borderRadius: moderateScale(200),
    },
  });
}

export default bottomTabBarStyles;
