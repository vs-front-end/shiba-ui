import type { ISkeleton } from '@shiba-ui/shared';
import * as S from './styles';

export const Skeleton = ({ isHidden = false, ...props }: ISkeleton) => {
  if (isHidden) return null;

  return (
    <S.Container
      role="progressbar"
      aria-label="Loading content"
      aria-busy="true"
      data-testid="skeleton"
      {...props}
    />
  );
};
