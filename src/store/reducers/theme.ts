import { createSlice } from '@reduxjs/toolkit';

import { colors } from '@theme/colors';
import { GRADIENTS } from '@theme/gradients';
import { colorSchemes } from '@constants';
import { themeSliceConstants } from '@constants/storeConstants';
import { changeTheme } from '@store/actions/theme';

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
