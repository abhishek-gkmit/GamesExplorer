import { createSlice } from '@reduxjs/toolkit';

import { userSliceConstants } from '@constants/storeConstants';
import {
  setUserKeyAction,
  removeUserKeyAction,
  setUserDetailsAction,
} from '@store/actions/user';

const initialUserState: UserState = {
  isUserLoggedIn: false,
  userKey: '',
  userDetails: {
    id: 1000,
    email: 'user@example.com',
    username: 'username',
    fullName: 'full name',
  },
};

const userSlice = createSlice({
  name: userSliceConstants.name,
  initialState: initialUserState,
  reducers: {
    setUserKeyAction,
    removeUserKeyAction,
    setUserDetailsAction,
  },
});

const userReducer = userSlice.reducer;

const {
  setUserKeyAction: setUserKey,
  removeUserKeyAction: removeUserKey,
  setUserDetailsAction: setUserDetails,
} = userSlice.actions;

export { userReducer, setUserKey, removeUserKey, setUserDetails };
