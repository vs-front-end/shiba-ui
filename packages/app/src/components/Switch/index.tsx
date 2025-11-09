import * as S from './styles';
import { ISwitch } from '@shiba-ui/shared';
import { useEffect, useState, useRef } from 'react';
import { TouchableOpacity, Animated, Easing } from 'react-native';

export const Switch = ({
  isChecked,
  onChange,
  size,
  background,
  isDisabled,
  isHidden,
  ...props
}: ISwitch) => {
  const [switchIsChecked, setSwitchIsChecked] = useState(isChecked || false);
  const animatedValue = useRef(new Animated.Value(isChecked ? 1 : 0)).current;

  const handleChange = () => {
    if (isDisabled) return;
    const newValue = !switchIsChecked;
    setSwitchIsChecked(newValue);
    onChange?.(newValue);
  };

  useEffect(() => {
    setSwitchIsChecked(isChecked || false);
  }, [isChecked]);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: switchIsChecked ? 1 : 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [switchIsChecked, animatedValue]);

  if (isHidden) return null;

  return (
    <TouchableOpacity
      onPress={handleChange}
      disabled={isDisabled}
      activeOpacity={0.8}
      accessibilityRole="switch"
      accessibilityState={{
        checked: switchIsChecked,
        disabled: isDisabled,
      }}
      accessibilityLabel="Switch"
      data-testid="switch"
    >
      <S.Container
        size={size}
        background={background}
        isChecked={switchIsChecked}
        isDisabled={isDisabled}
        {...props}
      >
        <S.Circle
          size={size}
          style={{
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, size || 28],
                }),
              },
            ],
          }}
        />
      </S.Container>
    </TouchableOpacity>
  );
};
