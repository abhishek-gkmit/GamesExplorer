import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

import { useAppSelector } from '@store';
import { selectTheme } from '@store/selectors/theme';

function useStyles<T>(themedStyleFunc: (colors: Colors) => T): T {
  const { colors, theme } = useAppSelector(selectTheme);

  // to handle the change of orientation
  const dimensions = useWindowDimensions();

  const styles = useMemo(() => {
    return themedStyleFunc(colors);
  }, [theme, dimensions]);

  return styles;
}

export default useStyles;
