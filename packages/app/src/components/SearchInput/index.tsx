import * as S from './styles';
import { ISearchInput } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { useState } from 'react';
import { useTheme } from 'styled-components/native';

export const SearchInput = ({
  value,
  handleChange,
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
}: ISearchInput) => {
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
    if (isFocused) return 'primary';
    return borderColor;
  };

  if (isHidden) return null;

  return (
    <S.Container>
      <S.InputContainer
        data-testid="search-input-container"
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
          data-testid="search-input"
          value={value !== undefined ? value : inputValue}
          onChangeText={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          editable={!isDisabled}
          textColor={textColor}
          accessibilityRole="search"
          accessibilityLabel={placeholder || 'Search input'}
          accessibilityState={{ disabled: isDisabled }}
          placeholderTextColor={theme.colors.highlight}
          {...props}
        />

        <S.IconContainer>
          <Icon
            icon="search"
            color={isFocused ? 'primary' : iconColor}
            size={iconSize}
          />
        </S.IconContainer>
      </S.InputContainer>
    </S.Container>
  );
};
