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

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const circleProgressValue = clampValue(progressValue, 0, 100);
  const offset = circumference - (circleProgressValue / 100) * circumference;

  const getFontSize = (size: number) => {
    return size * 0.15;
  };

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="progress-circle"
      role="progressbar"
      aria-valuenow={circleProgressValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress: ${circleProgressValue}%`}
      size={size}
      {...props}
    >
      <S.Svg viewBox="0 0 80 80" aria-hidden="true">
        <S.CircleBase
          cx="40"
          cy="40"
          r={radius}
          strokeWidth="8"
          data-testid="progress-circle-base"
        />
        <S.CircleRange
          cx="40"
          cy="40"
          r={radius}
          strokeWidth="8"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          data-testid="progress-circle-range"
          background={background}
        />
      </S.Svg>

      <S.ProgressValue aria-hidden="true">
        <TextDisplay
          text={`${circleProgressValue}%`}
          fontWeight="semibold"
          fontSize={getFontSize(size || 60)}
        />
      </S.ProgressValue>
    </S.Container>
  );
};
