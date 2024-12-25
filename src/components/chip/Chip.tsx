import { StyleSheet, TouchableOpacity } from 'react-native';

import TextBlock from '@components/customText';
import useStyles from '@hooks/useStyles';

import chipStyles from './styles';

function Chip({ text, onPress, style, textStyle }: ChipProps) {
  const styles = useStyles(chipStyles);

  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.chip, style)}
      activeOpacity={1}
      onPress={onPress}>
      <TextBlock style={StyleSheet.compose(styles.chipTitle, textStyle)}>
        {text}
      </TextBlock>
    </TouchableOpacity>
  );
}

export default Chip;
