import * as S from './styles';
import { IRating } from '@shiba-ui/shared';
import { useState } from 'react';

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

  const handleMouseEnter = (position: number) => {
    if (readonly) return;
    setHoverValue(position);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverValue(null);
  };

  const renderStar = (position: number) => {
    const diff = currentValue - (position - 1);
    const fillPercentage = Math.max(0, Math.min(100, diff * 100));

    return (
      <S.StarContainer
        key={position}
        readonly={readonly}
        size={size}
        role="radio"
        aria-checked={currentValue >= position}
        aria-label={`${position} star${position === 1 ? '' : 's'}`}
        onMouseLeave={handleMouseLeave}
      >
        {!readonly && (
          <S.ClickArea
            onMouseEnter={() => handleMouseEnter(position)}
            onClick={() => handleStarClick(position)}
          />
        )}

        <S.StarBase aria-hidden="true" size={size}>
          ★
        </S.StarBase>

        <S.StarFill
          aria-hidden="true"
          fillPercentage={fillPercentage}
          background={background}
          size={size}
        >
          ★
        </S.StarFill>
      </S.StarContainer>
    );
  };

  const stars = Array.from({ length: maxStars ?? 5 }, (_, i) =>
    renderStar(i + 1)
  );

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="rating"
      role="radiogroup"
      aria-label={`Rating: ${currentValue} out of ${maxStars ?? 5} stars`}
      gap={gap}
      {...props}
    >
      {stars}
    </S.Container>
  );
};
