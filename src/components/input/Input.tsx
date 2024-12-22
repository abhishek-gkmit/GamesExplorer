import React, { ForwardedRef, forwardRef, useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useStyles from '@hooks/useStyles';
import { useAppSelector } from '@store/index';
import { selectTheme } from '@store/selectors/theme';

import getThemedStyles from './styles';
import TextBlock from '@components/customText';

function renderTextInput(
  value: string | undefined,
  setValue: (value: string) => void,
  setIsFocused: (isFocused: boolean) => void,
  secureTextEntry: boolean | undefined,
  colors: Colors,
  passwordVisible: boolean,
  props: any,
  styles: any,
  ref: any,
  icon?: Icon,
) {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={setValue}
      placeholderTextColor={colors.brightGray}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hitSlop={{
        top: 15,
        bottom: 15,
        left: icon?.size ? icon.size + 15 : 24 + 15,
        right: 15,
      }}
      ref={ref}
      secureTextEntry={secureTextEntry && !passwordVisible}
      {...props}
    />
  );
}

function renderMakePasswordVisibleButton(
  passwordVisible: boolean,
  setPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>,
  colors: Colors,
  cprops: any,
) {
  return cprops.secureTextEntry ? (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setPasswordVisible(passwordVisible => !passwordVisible)}>
      <MaterialCommunityIcons
        name={!passwordVisible ? 'eye-off' : 'eye'}
        size={14}
        color={colors.showPasswordBtnIconColor}
      />
    </TouchableOpacity>
  ) : null;
}

// cprops is a shorthand for componentProps
const Input = forwardRef(function Input(
  cprops: InputComponentProps,
  ref: ForwardedRef<TextInput>,
) {
  const { value, setValue, errorMsg, icon, label, secureTextEntry, ...props } =
    cprops;
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const styles = useStyles(getThemedStyles);
  const { colors } = useAppSelector(selectTheme);

  const iconToRender = useMemo(() => {
    const iconColor = isFocused
      ? colors.primary
      : !isFocused && (!errorMsg || errorMsg === '')
        ? colors.inputBorderColorUnFocused
        : colors.error;

    return icon ? (
      <MaterialCommunityIcons
        name={icon.name}
        size={icon.size || 14}
        color={iconColor}
      />
    ) : null;
  }, [icon, errorMsg, isFocused]);

  const textInput = useMemo(() => {
    return renderTextInput(
      value,
      setValue,
      setIsFocused,
      secureTextEntry,
      colors,
      passwordVisible,
      props,
      styles,
      ref,
      icon,
    );
  }, [
    value,
    setValue,
    setIsFocused,
    icon,
    secureTextEntry,
    props,
    colors,
    passwordVisible,
    styles,
  ]);

  const makePasswordVisibleButton = useMemo(() => {
    return renderMakePasswordVisibleButton(
      passwordVisible,
      setPasswordVisible,
      colors,
      cprops,
    );
  }, [cprops, passwordVisible, setPasswordVisible, colors]);

  const errorMsgText = useMemo(() => {
    return errorMsg ? (
      <TextBlock style={styles.errorMsg}>{errorMsg}</TextBlock>
    ) : null;
  }, [errorMsg]);

  const inputLabel = useMemo(() => {
    return label ? (
      <TextBlock style={styles.inputLabel}>{label}</TextBlock>
    ) : null;
  }, [label, styles]);

  const inputContainerStyle = useMemo(() => {
    return isFocused
      ? [styles.inputContainer, styles.inputContainerFocus]
      : !errorMsg || errorMsg === ''
        ? styles.inputContainer
        : [styles.inputContainer, styles.inputContainerError];
  }, [isFocused, errorMsg, styles]);

  return (
    <View>
      {inputLabel}

      <View style={inputContainerStyle}>
        {iconToRender}
        {textInput}
        {makePasswordVisibleButton}
      </View>

      {errorMsgText}
    </View>
  );
});

export default Input;
