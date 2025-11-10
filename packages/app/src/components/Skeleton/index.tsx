import * as S from './styles';
import type { ISkeleton } from '@shiba-ui/shared';
import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const AnimatedContainer = Animated.createAnimatedComponent(S.Container);

export const Skeleton = ({ isHidden = false, ...props }: ISkeleton) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedValue.setValue(0);

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [animatedValue]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0.9],
  });

  if (isHidden) return null;

  return (
    <AnimatedContainer
      accessibilityRole="progressbar"
      accessibilityLabel="Loading content"
      accessibilityState={{ busy: true }}
      data-testid="skeleton"
      style={{ opacity }}
      {...props}
    />
  );
};
