import type { IColumn } from '@shiba-ui/shared';
import * as S from './styles';

export const Column = ({ children, isHidden, ...props }: IColumn) => {
  if (isHidden) return null;

  return (
    <S.Container
      data-testid="column"
      accessibilityRole="none"
      {...props}
    >
      {children}
    </S.Container>
  );
};
