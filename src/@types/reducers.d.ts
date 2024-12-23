interface ThemeState {
  theme: ColorSchemeName;
  colors: Colors;
  gradients: Gradients;
}

interface UserState {
  isUserLoggedIn: boolean;
  userKey: string;
}
