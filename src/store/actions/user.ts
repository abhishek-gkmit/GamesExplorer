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

export { setUserKeyAction, removeUserKeyAction };
