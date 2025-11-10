import * as S from './styles';
import type { IProgressBar } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';

export const ProgressBar = ({
  progressValue,
  background,
  height,
  width,
  isHidden,
  hideLabel,
  ...props
}: IProgressBar) => {
  const clampValue = (value: number | undefined, min: number, max: number) => {
    if (value === undefined || value === null) return 0;
    return Math.min(Math.max(value, min), max);
  };

  const barProgressValue = clampValue(progressValue, 0, 100);

  if (isHidden) return null;

  return (
    <S.Container
      data-testid="progress-bar"
      role="progressbar"
      aria-valuenow={barProgressValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress: ${barProgressValue}%`}
      width={width}
      {...props}
    >
      <S.BarOuter height={height} width={width}>
        <S.BarInner
          progressValue={barProgressValue}
          background={background}
          height={height}
        />
      </S.BarOuter>

      {!hideLabel && (
        <S.TextContainer aria-hidden="true">
          <TextDisplay text={`${barProgressValue}%`} fontSize={14} />
        </S.TextContainer>
      )}
    </S.Container>
  );
};
