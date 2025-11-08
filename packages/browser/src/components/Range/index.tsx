import * as S from './styles';
import { IRange } from '@shiba-ui/shared';
import { useState } from 'react';

export const Range = ({
  value,
  handleChange,
  min,
  max,
  background,
  height,
  width,
  isHidden,
  ...props
}: IRange) => {
  const [rangeValue, setRangeValue] = useState<number>(value || 0);

  const minValue = min ?? 0;
  const maxValue = max ?? 100;
  const percentage = ((rangeValue - minValue) / (maxValue - minValue)) * 100;

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = Number(e.target.value);
    setRangeValue(parsedValue);
    handleChange?.(parsedValue);
  };

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="range"
      type="range"
      role="slider"
      aria-valuenow={rangeValue}
      aria-valuemin={minValue}
      aria-valuemax={maxValue}
      aria-valuetext={`${rangeValue}`}
      aria-orientation="horizontal"
      min={minValue}
      max={maxValue}
      value={rangeValue}
      onChange={handleRangeChange}
      background={background}
      height={height}
      width={width}
      percentage={percentage}
      {...props}
    />
  );
};
