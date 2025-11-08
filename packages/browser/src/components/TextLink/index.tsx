import * as S from './styles';
import { ITextLink } from '@shiba-ui/shared';

export const TextLink = ({
  text,
  href,
  isHidden,
  isExternal,
  ...props
}: ITextLink) => {
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
