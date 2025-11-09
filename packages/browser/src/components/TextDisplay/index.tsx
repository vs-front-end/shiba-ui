import * as S from './styles';
import { ITextDisplay } from '@shiba-ui/shared';

export type TextDecorationType =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'overline';

interface ITextDisplayBrowser extends ITextDisplay {
  textDecoration?: TextDecorationType;
}

export const TextDisplay = ({
  text,
  isHidden,
  textDecoration,
  ...props
}: ITextDisplayBrowser) => {
  if (isHidden) return null;

  return (
    <S.Container
      role="text"
      aria-label={text}
      aria-hidden={isHidden}
      data-testid="text-display"
      textDecoration={textDecoration || 'none'}
      {...props}
    >
      {text || '-'}
    </S.Container>
  );
};
