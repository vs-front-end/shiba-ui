import * as S from './styles';
import { ICounterInput } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { useState, useEffect } from 'react';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="counter-input"
      role="spinbutton"
      aria-disabled={isDisabled}
      aria-valuemin={minValue}
      aria-valuemax={maxValue}
      aria-valuenow={value}
      background={background}
      borderRadius={borderRadius}
      width={width}
      height={height}
      {...props}
    >
      <S.Button
        type="button"
        aria-label="Decrease"
        onClick={handleDecrement}
        disabled={isDisabled || value <= minValue}
        buttonBackground={buttonBackground}
        height={height}
        data-testid="decrement-button"
      >
        <Icon icon="minus" color={iconColor} size={iconSize} />
      </S.Button>

      <S.ValueContainer height={height}>
        <S.Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          disabled={isDisabled}
          valueColor={valueColor}
          aria-valuemin={minValue}
          aria-valuemax={maxValue}
          aria-valuenow={value}
          data-testid="counter-input-field"
        />
      </S.ValueContainer>

      <S.Button
        type="button"
        aria-label="Increase"
        onClick={handleIncrement}
        disabled={isDisabled || value >= maxValue}
        buttonBackground={buttonBackground}
        height={height}
        data-testid="increment-button"
      >
        <Icon icon="plus" color={iconColor} size={iconSize} />
      </S.Button>
    </S.Container>
  );
};
