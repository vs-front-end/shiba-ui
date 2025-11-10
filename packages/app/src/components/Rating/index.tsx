import * as S from './styles';
import type { IRating } from '@shiba-ui/shared';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export const Rating = ({
  rating,
  maxStars,
  readonly,
  handleChange,
  size,
  gap,
  background,
  isHidden,
  ...props
}: IRating) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const currentValue = hoverValue ?? selectedValue ?? rating ?? 0;

  const handleStarClick = (position: number) => {
    if (readonly) return;

    const newValue = selectedValue === position ? 0 : position;

    setSelectedValue(newValue === 0 ? null : newValue);
    handleChange?.(newValue);
  };

  const handlePressIn = (position: number) => {
    if (readonly) return;
    setHoverValue(position);
  };

  const handlePressOut = () => {
    if (readonly) return;
    setHoverValue(null);
  };

  const renderStar = (position: number) => {
    const diff = currentValue - (position - 1);
    const fillPercentage = Math.max(0, Math.min(100, diff * 100));

    const starContent = (
      <>
        <S.StarBase size={size}>★</S.StarBase>

        <S.StarFill
          fillPercentage={fillPercentage}
          background={background}
          size={size}
        >
          ★
        </S.StarFill>
      </>
    );

    if (readonly) {
      return (
        <S.StarContainer
          key={position}
          readonly={readonly}
          size={size}
          accessibilityRole="radio"
          accessibilityState={{ checked: currentValue >= position }}
          accessibilityLabel={`${position} star${position === 1 ? '' : 's'}`}
        >
          {starContent}
        </S.StarContainer>
      );
    }

    return (
      <TouchableOpacity
        key={position}
        onPressIn={() => handlePressIn(position)}
        onPressOut={handlePressOut}
        onPress={() => handleStarClick(position)}
        activeOpacity={0.5}
      >
        <S.StarContainer
          readonly={readonly}
          size={size}
          accessibilityRole="radio"
          accessibilityState={{ checked: currentValue >= position }}
          accessibilityLabel={`${position} star${position === 1 ? '' : 's'}`}
        >
          {starContent}
        </S.StarContainer>
      </TouchableOpacity>
    );
  };

  const stars = Array.from({ length: maxStars ?? 5 }, (_, i) =>
    renderStar(i + 1)
  );

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="rating"
      accessibilityRole="radiogroup"
      accessibilityLabel={`Rating: ${currentValue} out of ${maxStars ?? 5} stars`}
      gap={gap}
      {...props}
    >
      {stars}
    </S.Container>
  );
};
