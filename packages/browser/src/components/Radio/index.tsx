import * as S from './styles';
import { IRadio } from '@shiba-ui/shared';
import { useState, useEffect } from 'react';

export const Radio = ({
  isSelected,
  onChange,
  size,
  background,
  isDisabled,
  isHidden,
  ...props
}: IRadio) => {
  const [radioIsSelected, setRadioIsSelected] = useState(isSelected || false);

  const handleChange = () => {
    if (isDisabled) return;
    const newSelectedState = !radioIsSelected;

    setRadioIsSelected(newSelectedState);
    onChange?.(newSelectedState);
  };

  useEffect(() => {
    setRadioIsSelected(isSelected || false);
  }, [isSelected]);

  if (isHidden) return null;

  return (
    <S.Container
      type="button"
      role="radio"
      aria-checked={radioIsSelected}
      aria-disabled={isDisabled}
      data-testid="radio"
      onClick={handleChange}
      disabled={isDisabled}
      size={size}
      background={background}
      isSelected={radioIsSelected}
      {...props}
    >
      {radioIsSelected && (
        <S.Inner
          size={size}
          background={background}
          isSelected={radioIsSelected}
        />
      )}
    </S.Container>
  );
};
