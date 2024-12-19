import { PayloadAction } from '@reduxjs/toolkit';
import { ColorSchemeName } from 'react-native/types';

import { colors } from '@theme/colors';
import { GRADIENTS } from '@theme/gradients';

export function changeTheme(
  state: ThemeState,
  action: PayloadAction<ColorSchemeName>,
) {
  state.theme = action.payload || 'light';
  state.colors = colors[action.payload || 'light'];
  state.gradients = GRADIENTS[action.payload || 'light'];
}
