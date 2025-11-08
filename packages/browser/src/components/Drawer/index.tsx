import React from 'react';
import { IDrawer } from '@shiba-ui/shared';
import * as S from './styles';

export const Drawer: React.FC<IDrawer> = ({
  children,
  isOpen = false,
  onClose,
  ...props
}) => {
  const handleBackdropClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <S.Overlay
          isOpen={isOpen}
          onClick={handleBackdropClick}
          data-testid="drawer-backdrop"
          aria-hidden="true"
        />
      )}

      <S.Container
        tabIndex={-1}
        data-testid="drawer"
        isOpen={isOpen}
        {...props}
      >
        <S.Content>{children}</S.Content>
      </S.Container>
    </>
  );
};
