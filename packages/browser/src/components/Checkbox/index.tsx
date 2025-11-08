import * as S from './styles';
import { ICheckbox } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { useState, useEffect } from 'react';

export const Checkbox = ({
  isChecked,
  onChange,
  size,
  icon,
  iconColor,
  isDisabled,
  isHidden,
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
    <S.Container
      type="button"
      role="checkbox"
      aria-checked={checkboxIsChecked}
      aria-disabled={isDisabled}
      data-testid="checkbox"
      onClick={handleChange}
      disabled={isDisabled}
      isChecked={checkboxIsChecked}
      size={size}
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
  );
};
