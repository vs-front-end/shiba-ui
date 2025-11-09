import * as S from './styles';
import { ISegmentedButton } from '@shiba-ui/shared';
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
      accessibilityRole="tablist"
      accessibilityLabel="Segmented button"
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
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={option.label}
            isActive={isActive}
            activeBackground={option.activeBackground}
            background={background}
            borderRadius={borderRadius}
            data-testid={`segmented-button-option-${option.value}`}
          >
            <S.OptionTouchable
              onPress={() => handleOptionClick(option.value)}
              activeOpacity={0.8}
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
            </S.OptionTouchable>
          </S.Option>
        );
      })}
    </S.Container>
  );
};
