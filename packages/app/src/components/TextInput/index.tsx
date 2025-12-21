import * as S from './styles';
import type { ITextInput } from '@shiba-ui/shared';
import { formatInputValue } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { useState } from 'react';
import { useTheme } from 'styled-components/native';

type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'url'
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'number-pad'
  | 'name-phone-pad'
  | 'decimal-pad'
  | 'twitter'
  | 'web-search'
  | 'visible-password';

interface ITextInputApp extends ITextInput {
  /** Keyboard type (React Native only) */
  keyboardType?: KeyboardType;
}

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
  keyboardType,
  label,
  maxLength,
  type,
  ...props
}: ITextInputApp) => {
  const theme = useTheme();

  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (text: string) => {
    if (!isDisabled) {
      const formattedValue = type ? formatInputValue(text, type) : text;
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
    if (hasError) return 'error';
    if (isFocused) return 'primary';
    return borderColor;
  };

  const getKeyboardType = () => {
    if (keyboardType) return keyboardType;

    const phoneTypes = ['phone', 'cellphone'];

    const numericTypes = [
      'cpf',
      'cnpj',
      'cep',
      'date',
      'monetary',
      'credit-card',
    ];

    if (phoneTypes.includes(type || '')) return 'phone-pad';
    if (numericTypes.includes(type || '')) return 'numeric';

    return 'default';
  };

  if (isHidden) return null;

  return (
    <S.Container>
      {label && (
        <S.LabelWrapper>
          <TextDisplay text={label} fontSize={14} fontWeight="medium" />
        </S.LabelWrapper>
      )}

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
          maxLength={maxLength}
          textColor={textColor}
          accessibilityRole="none"
          accessibilityLabel={placeholder || 'Text input'}
          accessibilityState={{ disabled: isDisabled }}
          textAlignVertical="center"
          keyboardType={getKeyboardType()}
          {...props}
        />
      </S.InputContainer>

      {hasError && errorMessage && (
        <TextDisplay text={errorMessage} color="error" fontSize={14} />
      )}
    </S.Container>
  );
};
