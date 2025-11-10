import * as S from './styles';
import type { ITextLink } from '@shiba-ui/shared';
import type { TextDecorationType } from '../TextDisplay';

interface ITextLinkBrowser extends ITextLink {
  textDecoration?: TextDecorationType;
}

export const TextLink = ({
  text,
  href,
  isHidden,
  isExternal,
  ...props
}: ITextLinkBrowser) => {
  if (isHidden) return null;

  return (
    <S.Container
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      role="link"
      aria-label={text}
      aria-hidden={isHidden}
      data-testid="text-link"
      {...props}
    >
      {text || '-'}
    </S.Container>
  );
};
