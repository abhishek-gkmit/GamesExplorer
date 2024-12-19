import { StyleSheet, Text } from 'react-native';

import useStyles from '@hooks/useStyles';

import textBlockStyles from './styles';

function TextBlock({ style, children, ...props }: TextBlockProps) {
  const styles = useStyles(textBlockStyles);

  return (
    <Text style={StyleSheet.compose(styles.textBlock, style)} {...props}>
      {children}
    </Text>
  );
}

export default TextBlock;
