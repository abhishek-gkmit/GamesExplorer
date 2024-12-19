import { useMemo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TextBlock from '@components/customText';
import useStyles from '@hooks/useStyles';

import getStyles from './styles';

function ButtonWithIcon({
  text,
  icon,
  iconPosition,
  textStyle,
  style,
  ...props
}: ButtonWithIconProps) {
  const styles = useStyles(getStyles);

  const iconToRender = useMemo(
    () => (icon ? <MaterialIcons {...icon} /> : null),
    [icon],
  );

  const btnText = useMemo(
    () => (
      <TextBlock style={StyleSheet.compose(styles.buttonText, textStyle)}>
        {text}
      </TextBlock>
    ),
    [text, textStyle, styles],
  );

  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.button, style)}
      activeOpacity={0.8}
      {...props}>
      {iconPosition === 'start' ? (
        <>
          {iconToRender}
          {btnText}
        </>
      ) : (
        <>
          {btnText}
          {iconToRender}
        </>
      )}
    </TouchableOpacity>
  );
}

export default ButtonWithIcon;
