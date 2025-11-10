import * as S from './styles';
import type { IPasswordInput } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { useState } from 'react';

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
  const [inputValue, setInputValue] = useState(value || '');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (!isDisabled) {
      setInputValue(newValue);
      handleChange?.(newValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
        background={background}
        borderColor={getBorderColor()}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        height={height}
        width={width}
      >
        <S.Input
          type={showPassword ? 'text' : 'password'}
          data-testid="password-input"
          aria-disabled={isDisabled}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={isDisabled}
          textColor={textColor}
          {...props}
        />

        <S.IconContainer
          onClick={isDisabled ? undefined : togglePasswordVisibility}
        >
          <Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            color={isFocused ? 'primary' : iconColor}
            size={iconSize}
          />
        </S.IconContainer>
      </S.InputContainer>

      {hasError && errorMessage && (
        <TextDisplay text={errorMessage} color="error" fontSize={12} />
      )}
    </S.Container>
  );
};
