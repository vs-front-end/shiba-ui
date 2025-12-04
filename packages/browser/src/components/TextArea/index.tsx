import * as S from './styles';
import type { ITextArea } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { useState } from 'react';

export const TextArea = ({
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
  ...props
}: ITextArea) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const getBorderColor = () => {
    if (isError) return 'error';
    if (isFocused) return 'primary';
    return borderColor;
  };

  if (isHidden) return null;

  return (
    <S.Container>
      {label && (
        <S.LabelWrapper>
          <TextDisplay text={label} fontSize={14} fontWeight="medium" />
        </S.LabelWrapper>
      )}

      <S.TextArea
        data-testid="textarea"
        aria-disabled={isDisabled}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={isDisabled}
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
