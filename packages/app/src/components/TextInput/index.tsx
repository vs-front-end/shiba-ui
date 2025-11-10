import * as S from './styles';
import type { ITextInput } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { useState } from 'react';
import { useTheme } from 'styled-components/native';

export const TextInput = ({
  value,
  handleChange,
  hasError,
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
  ...props
}: ITextInput) => {
  const theme = useTheme();

  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (text: string) => {
    if (!isDisabled) {
      setInputValue(text);
      handleChange?.(text);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getBorderColor = () => {
    if (hasError) return 'error';
    if (isFocused) return 'primary';
    return borderColor;
  };

  if (isHidden) return null;

  return (
    <S.Container>
      <S.InputContainer
        accessibilityRole="none"
        background={background}
        borderColor={getBorderColor()}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        height={height}
        width={width}
        isDisabled={isDisabled}
      >
        <S.Input
          data-testid="text-input"
          value={value !== undefined ? value : inputValue}
          onChangeText={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.highlight}
          editable={!isDisabled}
          textColor={textColor}
          accessibilityRole="none"
          accessibilityLabel={placeholder || 'Text input'}
          accessibilityState={{ disabled: isDisabled }}
          {...props}
        />
      </S.InputContainer>
      {hasError && errorMessage && (
        <TextDisplay text={errorMessage} color="error" fontSize={14} />
      )}
    </S.Container>
  );
};
