import * as S from './styles';
import type { IBanner } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { useState } from 'react';

export const Banner = ({
  children,
  showCloseButton = true,
  onClose,
  isHidden,
  ...props
}: IBanner) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    onClose?.();
    setIsClosed(true);
  };

  if (isHidden || isClosed) return null;

  return (
    <S.Container role="region" data-testid="banner" {...props}>
      <S.Content>{children}</S.Content>

      {showCloseButton && (
        <S.CloseButton
          type="button"
          onClick={handleClose}
          data-testid="banner-close"
          aria-label="Close banner"
        >
          <Icon icon="x" size={16} color="highlight" />
        </S.CloseButton>
      )}
    </S.Container>
  );
};
