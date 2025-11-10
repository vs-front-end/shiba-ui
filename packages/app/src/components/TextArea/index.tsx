import * as S from './styles';
import type { ITextArea } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { useState } from 'react';
import { useTheme } from 'styled-components/native';

export const TextArea = ({
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
}: ITextArea) => {
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
      <S.TextArea
        data-testid="textarea"
        value={value !== undefined ? value : inputValue}
        onChangeText={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.highlight}
        editable={!isDisabled}
        multiline
        background={background}
        borderColor={getBorderColor()}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        textColor={textColor}
        height={height}
        width={width}
        accessibilityRole="none"
        accessibilityLabel={placeholder || 'Text area'}
        accessibilityState={{ disabled: isDisabled }}
        {...props}
      />

      {hasError && errorMessage && (
        <TextDisplay text={errorMessage} color="error" fontSize={14} />
      )}
    </S.Container>
  );
};
