import * as S from './styles';
import type { ITab } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { useState, useEffect } from 'react';

export const Tab = ({
  options,
  activeValue,
  handleValueChange,
  borderColor,
  textColor,
  fontSize,
  iconSize,
  width,
  height,
  isHidden,
  ...props
}: ITab) => {
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
      data-testid="tab"
      accessibilityRole="tablist"
      accessibilityLabel="Tab navigation"
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
            activeColor={option.activeColor}
            borderColor={borderColor}
            data-testid={`tab-option-${option.value}`}
          >
            <S.OptionTouchable
              onPress={() => handleOptionClick(option.value)}
              activeOpacity={0.8}
            >
              {option.leftIcon && (
                <Icon
                  icon={option.leftIcon}
                  color={option.iconColor || 'content'}
                  size={option.iconSize || iconSize || 14}
                />
              )}

              <TextDisplay
                text={option.label}
                color={textColor || 'content'}
                fontSize={fontSize || 14}
              />

              {option.rightIcon && (
                <Icon
                  icon={option.rightIcon}
                  color={option.iconColor || 'content'}
                  size={option.iconSize || iconSize || 14}
                />
              )}
            </S.OptionTouchable>
          </S.Option>
        );
      })}
    </S.Container>
  );
};
