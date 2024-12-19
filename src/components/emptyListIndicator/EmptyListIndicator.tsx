import TextBlock from '@components/customText';
import useStyles from '@hooks/useStyles';

import getStyles from './styles';

function EmptyListIndicator({ title }: EmptyListIndicatorProps) {
  const styles = useStyles(getStyles);

  return (
    <TextBlock style={styles.heading}>{title || 'No data found'}</TextBlock>
  );
}

export default EmptyListIndicator;
