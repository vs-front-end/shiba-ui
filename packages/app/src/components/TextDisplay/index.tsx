import * as S from './styles';
import type { ITextDisplay } from '@shiba-ui/shared';

export const TextDisplay = ({
  text,
  isHidden,
  letterSpacing,
  ...props
}: ITextDisplay) => {
  if (isHidden) return null;

  return (
    <S.Container
      data-testid="text-display"
      letterSpacing={letterSpacing}
      {...props}
    >
      {text || '-'}
    </S.Container>
  );
};
