const usernameRegEx = '^[a-zA-z_0-9]+$';
const emailRegEx = '^[a-zA-Z0-9_]+@[a-z]+.[a-z]{2,3}$';
const passwordRegEx = '^(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$';

export { usernameRegEx, emailRegEx, passwordRegEx };
