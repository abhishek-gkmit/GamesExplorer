interface AuthFormData {
  username: string;
  email: string;
  password: string;
}

type AuthFormErrors = Partial<AuthFormData>;
