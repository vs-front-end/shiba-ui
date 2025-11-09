import * as S from './styles';
import { IRange } from '@shiba-ui/shared';
import { useEffect, useState } from 'react';
import { PanResponder } from 'react-native';

export const Range = ({
  value,
  handleChange,
  background,
  height,
  width,
  isHidden,
  ...props
}: IRange) => {
  const minValue = 0;
  const maxValue = 100;

  const clampValue = (val: number) => {
    return Math.max(minValue, Math.min(maxValue, val));
  };

  const [rangeValue, setRangeValue] = useState<number>(clampValue(value || 0));
  const [containerWidth, setContainerWidth] = useState(0);

  const percentage = ((rangeValue - minValue) / (maxValue - minValue)) * 100;

  const handleLayout = (event: {
    nativeEvent: { layout: { width: number } };
  }) => {
    const { width: w } = event.nativeEvent.layout;
    if (w > 0) setContainerWidth(w);
  };

  const handleMove = (evt: { nativeEvent: { locationX: number } }) => {
    if (containerWidth === 0) return;

    const { locationX } = evt.nativeEvent;
    const newPercentage = Math.max(
      0,
      Math.min(100, (locationX / containerWidth) * 100)
    );
    const newValue = Math.round(newPercentage);
    const clampedValue = clampValue(newValue);

    setRangeValue(clampedValue);
    handleChange?.(clampedValue);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: handleMove,
    onPanResponderMove: handleMove,
  });

  useEffect(() => {
    setRangeValue(clampValue(value || 0));
  }, [value]);

  if (isHidden) return null;

  return (
    <S.Container
      onLayout={handleLayout}
      width={width}
      height={height}
      accessibilityRole="adjustable"
      accessibilityLabel="Range slider"
      accessibilityValue={{
        min: minValue,
        max: maxValue,
        now: rangeValue,
        text: `${rangeValue}%`,
      }}
      data-testid="range"
      {...panResponder.panHandlers}
      {...props}
    >
      <S.Track background={background} height={height} width={width}>
        <S.Fill
          background={background}
          height={height}
          percentage={percentage}
        />
      </S.Track>
      <S.Thumb
        background={background}
        height={height}
        percentage={percentage}
        {...panResponder.panHandlers}
      />
    </S.Container>
  );
};
