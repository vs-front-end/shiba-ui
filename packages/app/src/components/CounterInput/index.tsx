import * as S from './styles';
import { ICounterInput } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput as RNTextInput } from 'react-native';

export const CounterInput = ({
  value = 50,
  minValue = 0,
  maxValue = 100,
  increaseBy = 1,
  handleChange,
  isDisabled,
  isHidden,
  background,
  borderRadius,
  buttonBackground,
  valueColor,
  iconColor,
  iconSize,
  width,
  height,
  ...props
}: ICounterInput) => {
  const [inputValue, setInputValue] = useState<string>(String(value));
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const handleIncrement = () => {
    if (!isDisabled && value < maxValue) {
      const newValue = Math.min(value + increaseBy, maxValue);
      handleChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    if (!isDisabled && value > minValue) {
      const newValue = Math.max(value - increaseBy, minValue);
      handleChange?.(newValue);
    }
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleInputBlur = () => {
    const newValue = parseInt(inputValue, 10);

    if (!isNaN(newValue)) {
      const clampedValue = Math.min(Math.max(newValue, minValue), maxValue);
      handleChange?.(clampedValue);
      setInputValue(String(clampedValue));
    } else {
      setInputValue(String(value));
    }
  };

  const getBorderColor = () => {
    if (isFocused) return 'primary';
    return 'highlight';
  };

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="counter-input"
      accessibilityRole="adjustable"
      accessibilityLabel="Counter input"
      accessibilityValue={{
        min: minValue,
        max: maxValue,
        now: value,
        text: String(value),
      }}
      accessibilityState={{ disabled: isDisabled }}
      background={background}
      borderRadius={borderRadius}
      width={width}
      height={height}
      {...props}
    >
      <TouchableOpacity
        onPress={handleDecrement}
        disabled={isDisabled || value <= minValue}
        activeOpacity={0.8}
      >
        <S.Button
          buttonBackground={buttonBackground}
          height={height}
          isDisabled={isDisabled || value <= minValue}
          accessibilityRole="button"
          accessibilityLabel="Decrease"
          data-testid="decrement-button"
        >
          <Icon icon="minus" color={iconColor} size={iconSize} />
        </S.Button>
      </TouchableOpacity>

      <S.ValueContainer borderColor={getBorderColor()} height={height}>
        <S.Input
          value={inputValue}
          onChangeText={handleInputChange}
          editable={!isDisabled}
          valueColor={valueColor}
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            handleInputBlur();
          }}
          accessibilityRole="none"
          accessibilityLabel="Counter value"
          accessibilityState={{ disabled: isDisabled }}
          data-testid="counter-input-field"
        />
      </S.ValueContainer>

      <TouchableOpacity
        onPress={handleIncrement}
        disabled={isDisabled || value >= maxValue}
        activeOpacity={0.8}
      >
        <S.Button
          buttonBackground={buttonBackground}
          height={height}
          isDisabled={isDisabled || value >= maxValue}
          accessibilityRole="button"
          accessibilityLabel="Increase"
          data-testid="increment-button"
        >
          <Icon icon="plus" color={iconColor} size={iconSize} />
        </S.Button>
      </TouchableOpacity>
    </S.Container>
  );
};
