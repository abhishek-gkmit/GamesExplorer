import { createSlice } from '@reduxjs/toolkit';

import { colors } from '@theme/colors';
import { GRADIENTS } from '@theme/gradients';
import { colorSchemes, storeConstants } from '@constants';
import { changeTheme } from '@store/actions/theme';

const { theme: themeSliceConstants } = storeConstants;

const initialThemeState = {
  theme: colorSchemes.light,
  colors: colors.light,
  gradients: GRADIENTS.light,
};

const themeSlice = createSlice({
  name: themeSliceConstants.name,
  initialState: initialThemeState,
  reducers: {
    changeTheme,
  },
});

const themeReducer = themeSlice.reducer;

const { changeTheme: changeThemeAction } = themeSlice.actions;

export { themeReducer, changeThemeAction };
