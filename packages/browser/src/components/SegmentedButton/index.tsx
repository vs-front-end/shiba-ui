import * as S from './styles';
import type { ISegmentedButton } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { useState, useEffect } from 'react';

export const SegmentedButton = ({
  options,
  activeValue,
  handleValueChange,
  background,
  borderColor,
  borderWidth,
  borderRadius,
  width,
  height,
  isHidden,
  ...props
}: ISegmentedButton) => {
  const [activeOption, setActiveOption] = useState(activeValue);

  useEffect(() => {
    setActiveOption(activeValue);
  }, [activeValue]);

  const handleOptionClick = (value: string) => {
    setActiveOption(value);
    handleValueChange(value);
  };

  if (isHidden || !options || options.length === 0) return null;

  return (
    <S.Container
      data-testid="segmented-button"
      role="tablist"
      background={background}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      width={width}
      height={height}
      {...props}
    >
      {options.map((option) => {
        const isActive = activeOption === option.value;

        return (
          <S.Option
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={option.label}
            onClick={() => handleOptionClick(option.value)}
            isActive={isActive}
            activeBackground={option.activeBackground}
            background={background}
            borderRadius={borderRadius}
            data-testid={`segmented-button-option-${option.value}`}
          >
            {option.leftIcon && (
              <Icon
                icon={option.leftIcon}
                color={
                  isActive
                    ? option.activeColor || 'paper'
                    : option.iconColor || 'content'
                }
                size={option.iconSize || 14}
              />
            )}

            <TextDisplay
              text={option.label}
              color={
                isActive
                  ? option.activeColor || 'paper'
                  : option.textColor || 'content'
              }
              fontSize={option.fontSize || 14}
            />

            {option.rightIcon && (
              <Icon
                icon={option.rightIcon}
                color={
                  isActive
                    ? option.activeColor || 'paper'
                    : option.iconColor || 'content'
                }
                size={option.iconSize || 14}
              />
            )}
          </S.Option>
        );
      })}
    </S.Container>
  );
};
