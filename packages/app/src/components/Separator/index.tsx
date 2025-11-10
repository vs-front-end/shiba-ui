import type { ISeparator } from '@shiba-ui/shared';
import * as S from './styles';

export const Separator = ({ isHidden, ...props }: ISeparator) => {
  if (isHidden) return null;

  return (
    <S.Container
      data-testid="separator"
      accessibilityRole="none"
      accessibilityLabel="Separator"
      {...props}
    />
  );
};
