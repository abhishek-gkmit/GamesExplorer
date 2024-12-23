function selectUserKey(state: RootState) {
  return state.user.userKey;
}

function selectIsUserLoggedIn(state: RootState) {
  return state.user.isUserLoggedIn;
}

export { selectUserKey, selectIsUserLoggedIn };
