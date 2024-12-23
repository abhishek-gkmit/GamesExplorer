import { PayloadAction } from '@reduxjs/toolkit';

function setUserKeyAction(state: UserState, action: PayloadAction<string>) {
  if (!action.payload) {
    return;
  }

  state.userKey = action.payload;
  state.isUserLoggedIn = true;
}

export { setUserKeyAction };
