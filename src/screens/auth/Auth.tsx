import { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import ButtonWithIcon from '@components/buttonWithIcon';
import TextBlock from '@components/customText';
import Input from '@components/input';
import FadeInSlideUp from '@components/animations/fadeInSlideUp';
import Loader from '@components/customLoader';
import useGlobalStyles from '@hooks/useGlobalStyles';
import useAuthMutations from '@network/hooks/useAuthMutations';
import useStyles from '@hooks/useStyles';
import {
  emailRegEx,
  passwordRegEx,
  usernameRegEx,
} from '@constants/regularExpressions';
import { appLogo, loginBackground } from '@constants/images';

import authStyles from './styles';

const initialFormData = {
  username: 'abhi_811',
  email: 'abhirathore1234@gmail.com',
  password: 'Zzzz@9876',
};

function validateFormData(formData: AuthFormData, isLoginForm: boolean) {
  const errors: AuthFormErrors = {};
  let isError = false;

  // validating form inputs
  if (formData.email.trim() === '') {
    errors.email = 'Email is required';
    isError = true;
  } else if (!new RegExp(emailRegEx).test(formData.email)) {
    errors.email = "Email should be in 'username@example.com' format";
    isError = true;
  }

  if (!isLoginForm && formData.username.trim() === '') {
    errors.username = 'Username is required';
    isError = true;
  } else if (
    !isLoginForm &&
    !new RegExp(usernameRegEx).test(formData.username)
  ) {
    errors.username = 'Username should only contain A-Z, a-z, 0-9 and _';
    isError = true;
  }

  if (formData.password.trim() === '') {
    errors.password = 'Password is required';
    isError = true;
  } else if (!new RegExp(passwordRegEx).test(formData.password)) {
    errors.password =
      'Password must be 8 letters long and contain at least one uppercase letter, one digit and one special character.';
    isError = true;
  }

  return { errors, isError };
}

function Auth() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState<AuthFormData>(initialFormData);
  const [errors, setErrors] = useState<AuthFormErrors>({});

  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const {
    mutation,
    error: mutationErrors,
    loading,
  } = useAuthMutations(isLoginForm);

  const styles = useStyles(authStyles);

  const handleChange = useCallback(
    (data: Partial<AuthFormData>) => {
      setFormData(formData => ({ ...formData, ...data }));

      setErrors(errors => ({
        ...errors,
        [Object.keys(data)[0]]: '',
      }));
    },
    [formData, setFormData, setErrors, errors],
  );

  const handleSubmit = useCallback(() => {
    const { errors, isError } = validateFormData(formData, isLoginForm);

    if (isError) {
      setErrors(errors);
      return;
    }

    mutation.mutate(formData);
  }, [formData, setErrors]);

  useEffect(() => {
    // unfocus inputs when screen changes from login to signup
    usernameRef.current?.blur();
    emailRef.current?.blur();
    passwordRef.current?.blur();

    setFormData(initialFormData);
    setErrors({});
  }, [isLoginForm, setFormData, setErrors]);

  useEffect(() => {
    mutationErrors && setErrors(mutationErrors);
  }, [mutationErrors]);

  const globalStyles = useGlobalStyles();

  if (loading) {
    return <Loader />;
  }

  return (
    <FastImage
      style={[globalStyles.screen, styles.authScreen]}
      source={loginBackground}>
      <View style={styles.imageOverlay}>
        <FadeInSlideUp style={styles.logoAndNameContainer}>
          <FastImage style={styles.appLogo} source={appLogo} />
          <TextBlock style={styles.appName}>Games Explorer</TextBlock>
        </FadeInSlideUp>

        <KeyboardAvoidingView contentContainerStyle={{ backgroundColor: 'red' }}>
          <ImageBackground
            style={styles.formContainer}
            blurRadius={60}
            source={loginBackground}>
            <FadeInSlideUp>
              <TextBlock style={styles.formHeading}>
                {isLoginForm ? 'Welcome back' : 'Create an account'}
              </TextBlock>
            </FadeInSlideUp>

            {!isLoginForm ? (
              <Input
                value={formData.username}
                setValue={value => handleChange({ username: value })}
                label="Username"
                icon={{ name: 'at' }}
                errorMsg={errors.username}
                ref={usernameRef}
              />
            ) : null}

            <FadeInSlideUp delay={100}>
              <Input
                value={formData.email}
                setValue={value => handleChange({ email: value })}
                label="Email"
                icon={{ name: 'email' }}
                errorMsg={errors.email}
                ref={emailRef}
              />
            </FadeInSlideUp>

            <FadeInSlideUp delay={200}>
              <Input
                value={formData.password}
                setValue={value => handleChange({ password: value })}
                label="Password"
                secureTextEntry
                icon={{ name: 'lock' }}
                errorMsg={errors.password}
                ref={passwordRef}
              />
            </FadeInSlideUp>

            <FadeInSlideUp delay={300}>
              <ButtonWithIcon
                text={isLoginForm ? 'Login' : 'Sign Up'}
                onPress={handleSubmit}
                style={styles.submitBtn}
                textStyle={styles.submitBtnText}
              />
            </FadeInSlideUp>

            <FadeInSlideUp delay={400}>
              <View style={styles.loginOptionContainer}>
                <TextBlock style={styles.loginQuestion}>
                  {isLoginForm
                    ? "You don't have an account? "
                    : 'Already have an account? '}
                </TextBlock>

                <TouchableOpacity
                  onPress={() => setIsLoginForm(isLoginForm => !isLoginForm)}>
                  <TextBlock style={styles.loginOptionIndicator}>
                    {isLoginForm ? 'Sign Up' : 'Login'}
                  </TextBlock>
                </TouchableOpacity>
              </View>
            </FadeInSlideUp>
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </FastImage>
  );
}

export default Auth;
