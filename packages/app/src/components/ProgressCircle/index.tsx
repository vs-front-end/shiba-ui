import * as S from './styles';
import { IProgressCircle } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';

export const ProgressCircle = ({
  progressValue,
  background,
  size,
  isHidden,
  ...props
}: IProgressCircle) => {
  const clampValue = (value: number | undefined, min: number, max: number) => {
    if (value === undefined || value === null) return 0;
    return Math.min(Math.max(value, min), max);
  };

  const circleProgressValue = clampValue(progressValue, 0, 100);

  const getFontSize = (size: number) => {
    return size * 0.15;
  };

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="progress-circle"
      accessibilityRole="progressbar"
      accessibilityValue={{
        now: circleProgressValue,
        min: 0,
        max: 100,
      }}
      accessibilityLabel={`Progress: ${circleProgressValue}%`}
      size={size}
      {...props}
    >
      <S.CircleBase size={size} />
      <S.CircleFill
        size={size}
        progressValue={circleProgressValue}
        background={background}
      />
      <S.ProgressValue>
        <TextDisplay
          text={`${circleProgressValue}%`}
          fontWeight="semibold"
          fontSize={getFontSize(size || 60)}
        />
      </S.ProgressValue>
    </S.Container>
  );
};
