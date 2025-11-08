import * as S from './styles';
import { ISwitch } from '@shiba-ui/shared';
import { useState, useEffect } from 'react';

export const Switch = ({
  isChecked,
  onChange,
  size,
  background,
  isDisabled,
  isHidden,
  ...props
}: ISwitch) => {
  const [switchIsChecked, setSwitchIsChecked] = useState(isChecked || false);

  const handleChange = () => {
    if (isDisabled) return;
    const newCheckedState = !switchIsChecked;

    setSwitchIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  useEffect(() => {
    setSwitchIsChecked(isChecked || false);
  }, [isChecked]);

  if (isHidden) return null;

  return (
    <S.Container
      type="button"
      role="switch"
      aria-checked={switchIsChecked}
      aria-disabled={isDisabled}
      data-testid="switch"
      onClick={handleChange}
      disabled={isDisabled}
      size={size}
      background={background}
      isChecked={switchIsChecked}
      isDisabled={isDisabled}
      {...props}
    >
      <S.Circle size={size} isChecked={switchIsChecked} />
    </S.Container>
  );
};
