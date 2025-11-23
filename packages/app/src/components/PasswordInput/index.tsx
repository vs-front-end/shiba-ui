import * as S from './styles';
import type { IPasswordInput } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';

export const PasswordInput = ({
  value,
  handleChange,
  hasError,
  errorMessage,
  isHidden,
  isDisabled,
  placeholder,
  background,
  borderColor,
  borderWidth,
  borderRadius,
  textColor,
  height,
  width,
  iconColor = 'highlight',
  iconSize = 14,
  ...props
}: IPasswordInput) => {
  const theme = useTheme();

  const [inputValue, setInputValue] = useState(value || '');
  const [showPassword, setShowPassword] = useState(false);
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

  const togglePasswordVisibility = () => {
    if (!isDisabled) {
      setShowPassword((prev) => !prev);
    }
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
        data-testid="password-input-container"
        accessibilityRole="none"
        background={background}
        borderColor={getBorderColor()}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        height={height}
        width={width}
        isDisabled={isDisabled}
      >
        <S.Input
          data-testid="password-input"
          value={value !== undefined ? value : inputValue}
          onChangeText={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          editable={!isDisabled}
          secureTextEntry={!showPassword}
          textColor={textColor}
          accessibilityRole="none"
          accessibilityLabel={placeholder || 'Password input'}
          accessibilityState={{ disabled: isDisabled }}
          placeholderTextColor={theme.colors.highlight}
          textAlignVertical='center'
          {...props}
        />

        <Pressable onPress={togglePasswordVisibility} disabled={isDisabled}>
          <S.IconContainer>
            <Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              color={isFocused ? 'primary' : iconColor}
              size={iconSize}
            />
          </S.IconContainer>
        </Pressable>
      </S.InputContainer>

      {hasError && errorMessage && (
        <TextDisplay text={errorMessage} color="error" fontSize={14} />
      )}
    </S.Container>
  );
};
