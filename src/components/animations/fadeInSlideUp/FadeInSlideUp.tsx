import { useEffect, useMemo } from 'react';
import { Animated, useAnimatedValue } from 'react-native';

function FadeInSlideUp({
  delay,
  duration,
  style,
  from,
  to,
  children,
}: FadeInSlideUpProps) {
  const position = useAnimatedValue(0);

  const animatedStyles = useMemo(() => {
    return {
      transform: [
        {
          translateY: position.interpolate({
            inputRange: [0, 1],
            outputRange: [from || 100, to || 0],
          }),
        },
      ],
      opacity: position,
    };
  }, [position]);

  useEffect(() => {
    Animated.timing(position, {
      toValue: 1,
      duration: duration || 500,
      delay: delay || 0,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[style, animatedStyles]}>{children}</Animated.View>
  );
}

export default FadeInSlideUp;
