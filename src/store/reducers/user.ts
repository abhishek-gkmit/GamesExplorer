import { createSlice } from '@reduxjs/toolkit';

import { userSliceConstants } from '@constants/storeConstants';
import { setUserKeyAction } from '@store/actions/user';

const initialUserState: UserState = {
  isUserLoggedIn: false,
  userKey: '',
};

const userSlice = createSlice({
  name: userSliceConstants.name,
  initialState: initialUserState,
  reducers: {
    setUserKeyAction,
  },
});

const userReducer = userSlice.reducer;

const { setUserKeyAction: setUserKey } = userSlice.actions;

export { userReducer, setUserKey };
