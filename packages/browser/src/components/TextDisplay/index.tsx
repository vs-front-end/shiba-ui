import * as S from './styles';
import { ITextDisplay } from '@shiba-ui/shared';

export const TextDisplay = ({ text, isHidden, ...props }: ITextDisplay) => {
  if (isHidden) return null;

  return (
    <S.Container
      role="text"
      aria-label={text}
      aria-hidden={isHidden}
      data-testid="text-display"
      {...props}
    >
      {text || '-'}
    </S.Container>
  );
};
