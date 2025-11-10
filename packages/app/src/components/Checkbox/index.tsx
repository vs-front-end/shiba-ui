import * as S from './styles';
import type { ICheckbox } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

export const Checkbox = ({
  isChecked,
  onChange,
  size,
  icon,
  iconColor,
  isDisabled,
  isHidden,
  background,
  ...props
}: ICheckbox) => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(
    isChecked || false
  );

  const handleChange = () => {
    if (isDisabled) return;
    const newCheckedState = !checkboxIsChecked;

    setCheckboxIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  useEffect(() => {
    setCheckboxIsChecked(isChecked || false);
  }, [isChecked]);

  if (isHidden) return null;

  return (
    <TouchableOpacity
      onPress={handleChange}
      disabled={isDisabled}
      activeOpacity={0.8}
      accessibilityRole="checkbox"
      accessibilityState={{
        checked: checkboxIsChecked,
        disabled: isDisabled,
      }}
      accessibilityLabel="Checkbox"
      data-testid="checkbox"
    >
      <S.Container
        isChecked={checkboxIsChecked}
        size={size}
        isDisabled={isDisabled}
        background={background}
        {...props}
      >
        {checkboxIsChecked && (
          <S.Tick>
            <Icon
              icon={icon || 'check'}
              color={iconColor || 'paper'}
              size={size ? size / 1.75 : 18}
            />
          </S.Tick>
        )}
      </S.Container>
    </TouchableOpacity>
  );
};
