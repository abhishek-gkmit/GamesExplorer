import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import useStyles from '@hooks/useStyles';

import iconButtonStyles from './styles';

function IconButton({icon, btnStyle, iconStyle, ...props}: IconButtonProps) {
  const styles = useStyles(iconButtonStyles);

  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.iconButton, btnStyle)}
      activeOpacity={0.8}
      {...props}>
      <MaterialCommunityIcon style={iconStyle} {...icon} />
    </TouchableOpacity>
  );
}

export default IconButton;
