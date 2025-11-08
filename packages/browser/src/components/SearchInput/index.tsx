import * as S from './styles';
import { ISearchInput } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { useState } from 'react';

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
  const [inputValue, setInputValue] = useState(value || '');
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

  const getBorderColor = () => {
    if (isFocused) return 'primary';
    return borderColor;
  };

  if (isHidden) return null;

  return (
    <S.Container>
      <S.InputContainer
        data-testid="search-input-container"
        background={background}
        borderColor={getBorderColor()}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        height={height}
        width={width}
      >
        <S.Input
          type="text"
          data-testid="search-input"
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
