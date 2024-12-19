import { PayloadAction } from '@reduxjs/toolkit';
import { ColorSchemeName } from 'react-native/types';

import { colors } from '@theme/colors';
import { GRADIENTS } from '@theme/gradients';

export function changeTheme(
  state: ThemeState,
  action: PayloadAction<ColorSchemeName>,
) {
  const theme = action.payload || 'light';

  state.theme = theme;
  state.colors = colors[theme];
  state.gradients = GRADIENTS[theme];
}
