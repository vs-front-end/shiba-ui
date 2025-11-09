import * as S from './styles';
import { IRadio } from '@shiba-ui/shared';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

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
    <TouchableOpacity
      onPress={handleChange}
      disabled={isDisabled}
      activeOpacity={0.8}
      accessibilityRole="radio"
      accessibilityState={{
        selected: radioIsSelected,
        disabled: isDisabled,
      }}
      accessibilityLabel="Radio"
      data-testid="radio"
    >
      <S.Container
        size={size}
        background={background}
        isSelected={radioIsSelected}
        isDisabled={isDisabled}
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
    </TouchableOpacity>
  );
};
