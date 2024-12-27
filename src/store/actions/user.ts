import { PayloadAction } from '@reduxjs/toolkit';
import { clearUserKey } from '@utility/mmkvStorage';

function setUserKeyAction(state: UserState, action: PayloadAction<string>) {
  if (!action.payload) {
    return;
  }

  state.userKey = action.payload;
  state.isUserLoggedIn = true;
}

function removeUserKeyAction(state: UserState) {
  state.userKey = '';
  state.isUserLoggedIn = false;

  clearUserKey();
}

function setUserDetailsAction(
  state: UserState,
  action: PayloadAction<UserDetails>,
) {
  if (!action.payload) {
    return;
  }

  state.userDetails = action.payload;
}

export { setUserKeyAction, removeUserKeyAction, setUserDetailsAction };
