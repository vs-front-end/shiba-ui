import * as S from './styles';
import type { IBanner } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { useState } from 'react';
import { Pressable } from 'react-native';

export const Banner = ({
  children,
  showCloseButton = true,
  onClose,
  isHidden,
  ...props
}: IBanner) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
    onClose?.();
  };

  if (isHidden || isClosed) return null;

  return (
    <S.Container
      data-testid="banner"
      {...props}
    >
      <S.Content>{children}</S.Content>

      {showCloseButton && (
        <Pressable onPress={handleClose}>
          <S.CloseButton
            data-testid="banner-close"
            accessibilityRole="button"
            accessibilityLabel="Close banner"
          >
            <Icon icon="x" size={16} color="highlight" />
          </S.CloseButton>
        </Pressable>
      )}
    </S.Container>
  );
};

