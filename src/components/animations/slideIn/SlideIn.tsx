import { useEffect, useMemo } from 'react';
import { Animated, useAnimatedValue } from 'react-native';

function SlideIn({ delay, duration, style, from, to, children }: SlideInProps) {
  const position = useAnimatedValue(0);

  const animatedStyles = useMemo(() => {
    return {
      transform: [
        {
          translateX: position.interpolate({
            inputRange: [0, 1],
            outputRange: [from || 100, to || 0],
          }),
        },
      ],
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

export default SlideIn;
