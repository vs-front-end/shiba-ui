import type { IRow } from '@shiba-ui/shared';
import * as S from './styles';

export const Row = ({ children, isHidden, ...props }: IRow) => {
  if (isHidden) return null;

  return (
    <S.Container
      data-testid="row"
      accessibilityRole="none"
      {...props}
    >
      {children}
    </S.Container>
  );
};
