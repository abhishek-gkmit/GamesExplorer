import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { login, signUp } from '@network/apiMethods';
import { setTokenInterceptor } from '@utility/helpers';
import { useAppDispatch } from '@store/index';
import { setUserKey } from '@store/reducers/user';
import { saveUserKey } from '@utility/mmkvStorage';

function useAuthMutations(isLoginForm: boolean) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthFormErrors>();

  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: (formData: AuthFormData) => {
      setLoading(true);

      const { username, email, password } = formData;

      if (isLoginForm) {
        return login(email, password);
      }

      return signUp(username, email, password);
    },

    onError: error => {
      const formErrors = (error as AxiosError).response?.data as AuthFormErrors;

      setError(formErrors);
    },

    onSuccess: res => {
      const key = res.data?.key;

      setTokenInterceptor(key);
      dispatch(setUserKey(key));
      saveUserKey(key);
    },

    onSettled: () => setLoading(false),
  });

  return { mutation, error, loading };
}

export default useAuthMutations;
