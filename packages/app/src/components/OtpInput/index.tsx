import * as S from './styles';
import { IOtpInput } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { useState, useEffect, useRef, useCallback } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useTheme } from 'styled-components/native';

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
  const { colors } = useTheme();
  const getInitialValues = () => {
    const values: string[] = [];
    for (let i = 0; i < length; i++) {
      values[i] = value[i] || '';
    }
    return values;
  };

  const [inputValues, setInputValues] = useState<string[]>(getInitialValues());
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<(RNTextInput | null)[]>([]);

  const handleInputChange = useCallback(
    (index: number) => (text: string) => {
      const cleanedText = text.replace(/[^0-9]/g, '');

      if (!isDisabled) {
        if (cleanedText.length > 1) {
          const pasteData = cleanedText.slice(0, length);
          const newInputValues = [...inputValues];

          for (let i = 0; i < pasteData.length; i++) {
            if (index + i < length) {
              newInputValues[index + i] = pasteData[i];
            }
          }

          setInputValues(newInputValues);
          handleChange?.(newInputValues.join(''));

          const focusIndex = Math.min(index + pasteData.length - 1, length - 1);
          inputRefs.current[focusIndex]?.focus();
        } else {
          const digit = cleanedText.slice(-1);
          const newInputValues = [...inputValues];
          newInputValues[index] = digit;
          setInputValues(newInputValues);

          if (digit && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
          }

          handleChange?.(newInputValues.join(''));
        }
      }
    },
    [isDisabled, inputValues, length, handleChange]
  );

  const handleKeyPress = useCallback(
    (index: number) => (event: { nativeEvent: { key: string } }) => {
      if (
        event.nativeEvent.key === 'Backspace' &&
        !inputValues[index] &&
        index > 0
      ) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [inputValues]
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
              keyboardType="numeric"
              maxLength={1}
              placeholder="-"
              value={inputValues[index]}
              onChangeText={handleInputChange(index)}
              onKeyPress={handleKeyPress(index)}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              editable={!isDisabled}
              isDisabled={isDisabled}
              background={background}
              borderColor={getBorderColor(index)}
              borderRadius={borderRadius}
              borderWidth={borderWidth}
              textColor={textColor}
              height={height}
              width={width}
              selectionColor={colors[textColor || 'content']}
              underlineColorAndroid="transparent"
              data-testid={`otp-input-${index}`}
              accessibilityRole="none"
              accessibilityLabel={`Digit ${index + 1}`}
              accessibilityState={{ disabled: isDisabled }}
              {...props}
            />
          ))}
      </S.InputsContainer>

      {hasError && errorMessage && (
        <TextDisplay text={errorMessage} color="error" fontSize={14} />
      )}
    </S.Container>
  );
};
