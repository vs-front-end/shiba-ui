import * as S from './styles';
import type { ITextInput } from '@shiba-ui/shared';
import { formatInputValue } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { useState, useEffect } from 'react';

export const TextInput = ({
  value,
  handleChange,
  hasError: isError,
  errorMessage,
  isHidden,
  isDisabled,
  placeholder,
  background,
  borderColor,
  borderRadius,
  borderWidth,
  textColor,
  height,
  width,
  label,
  maxLength,
  type,
  ...props
}: ITextInput) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;

    if (!isDisabled) {
      const formattedValue = type ? formatInputValue(rawValue, type) : rawValue;
      setInputValue(formattedValue);
      handleChange?.(formattedValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getBorderColor = () => {
    if (isError) return 'error';
    if (isFocused) return 'primary';
    return borderColor;
  };

  useEffect(() => {
    if (value !== undefined) {
      const formattedValue = type ? formatInputValue(value, type) : value;
      setInputValue(formattedValue);
    }
  }, [value, type]);

  if (isHidden) return null;

  return (
    <S.Container>
      {label && (
        <S.LabelWrapper>
          <TextDisplay text={label} fontSize={14} fontWeight="medium" />
        </S.LabelWrapper>
      )}

      <S.Input
        type="text"
        data-testid="text-input"
        aria-disabled={isDisabled}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={isDisabled}
        maxLength={maxLength}
        background={background}
        borderColor={getBorderColor()}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        textColor={textColor}
        height={height}
        width={width}
        {...props}
      />
      {isError && errorMessage && (
        <TextDisplay text={errorMessage} color="error" fontSize={12} />
      )}
    </S.Container>
  );
};
