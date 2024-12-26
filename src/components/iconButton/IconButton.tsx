import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import useStyles from '@hooks/useStyles';

import iconButtonStyles from './styles';
import { useMemo } from 'react';
import { iconFamilies } from '@constants';

function getIconFromIconFamily(iconFamily?: IconFamilies) {
  switch (iconFamily) {
    case iconFamilies.material:
      return MaterialIcons;
    default:
      return MaterialCommunityIcon;
  }
}

function IconButton({
  icon,
  btnStyle,
  iconStyle,
  iconFamily,
  ...props
}: IconButtonProps) {
  const styles = useStyles(iconButtonStyles);

  const Icon = useMemo(() => {
    return getIconFromIconFamily(iconFamily);
  }, [iconFamily]);

  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.iconButton, btnStyle)}
      activeOpacity={0.8}
      {...props}>
      <Icon style={iconStyle} {...icon} />
    </TouchableOpacity>
  );
}

export default IconButton;
