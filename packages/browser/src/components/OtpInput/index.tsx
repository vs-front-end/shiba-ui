import * as S from './styles';
import { IOtpInput } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { useState, useEffect, useRef, useCallback } from 'react';

export const OtpInput = ({
  value = '',
  length = 5,
  handleChange,
  hasError,
  errorMessage,
  isHidden,
  isDisabled,
  background,
  borderColor,
  borderRadius,
  borderWidth,
  textColor,
  height = 40,
  width = 40,
  gap = 8,
  ...props
}: IOtpInput) => {
  const getInitialValues = () => {
    const values: string[] = [];
    for (let i = 0; i < length; i++) {
      values[i] = value[i] || '';
    }
    return values;
  };

  const [inputValues, setInputValues] = useState<string[]>(getInitialValues());
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = useCallback(
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      const digit = newValue.replace(/[^0-9]/g, '').slice(-1);

      if (!isDisabled) {
        const newInputValues = [...inputValues];
        newInputValues[index] = digit;
        setInputValues(newInputValues);

        if (digit && index < length - 1) {
          inputRefs.current[index + 1]?.focus();
        }

        handleChange?.(newInputValues.join(''));
      }
    },
    [isDisabled, inputValues, length, handleChange]
  );

  const handleKeyDown = useCallback(
    (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowRight' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (event.key === 'ArrowLeft' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }

      if (event.key === 'Backspace' && !inputValues[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [inputValues, length]
  );

  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      event.preventDefault();
      const pasteData = event.clipboardData
        .getData('text/plain')
        .replace(/[^0-9]/g, '')
        .slice(0, length);

      if (pasteData && !isDisabled) {
        const newInputValues = [...inputValues];

        for (let i = 0; i < pasteData.length; i++) {
          if (i < length) {
            newInputValues[i] = pasteData[i];
          }
        }

        setInputValues(newInputValues);
        handleChange?.(newInputValues.join(''));

        const focusIndex = Math.min(pasteData.length, length - 1);
        inputRefs.current[focusIndex]?.focus();
      }
    },
    [isDisabled, inputValues, length, handleChange]
  );

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  const getBorderColor = (index: number) => {
    if (hasError) return 'error';
    if (focusedIndex === index) return 'primary';
    return borderColor;
  };

  useEffect(() => {
    const newInputValues: string[] = [];
    for (let i = 0; i < length; i++) {
      newInputValues[i] = value[i] || '';
    }

    if (value !== inputValues.join('')) {
      setInputValues(newInputValues);
    }
  }, [value, length, inputValues]);

  if (isHidden) return null;

  return (
    <S.Container data-testid="otp-input-container">
      <S.InputsContainer gap={gap}>
        {Array(length)
          .fill('')
          .map((_, index) => (
            <S.Input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              placeholder="-"
              value={inputValues[index]}
              onChange={handleInputChange(index)}
              onKeyDown={handleKeyDown(index)}
              onPaste={handlePaste}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              disabled={isDisabled}
              background={background}
              borderColor={getBorderColor(index)}
              borderRadius={borderRadius}
              borderWidth={borderWidth}
              textColor={textColor}
              height={height}
              width={width}
              data-testid={`otp-input-${index}`}
              aria-label={`Digit ${index + 1}`}
              aria-disabled={isDisabled}
              {...props}
            />
          ))}
      </S.InputsContainer>

      {hasError && errorMessage && (
        <TextDisplay text={errorMessage} color="error" fontSize={12} />
      )}
    </S.Container>
  );
};
