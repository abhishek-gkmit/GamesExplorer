import { createSlice } from '@reduxjs/toolkit';

import { userSliceConstants } from '@constants/storeConstants';
import { setUserKeyAction, removeUserKeyAction } from '@store/actions/user';

const initialUserState: UserState = {
  isUserLoggedIn: false,
  userKey: '',
};

const userSlice = createSlice({
  name: userSliceConstants.name,
  initialState: initialUserState,
  reducers: {
    setUserKeyAction,
    removeUserKeyAction,
  },
});

const userReducer = userSlice.reducer;

const { setUserKeyAction: setUserKey, removeUserKeyAction: removeUserKey } =
  userSlice.actions;

export { userReducer, setUserKey, removeUserKey };
