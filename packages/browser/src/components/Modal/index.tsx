import * as S from './styles';
import type { IModal } from '@shiba-ui/shared';
import { TextDisplay } from '../TextDisplay';
import { Icon } from '../Icon';

export const Modal = ({
  isOpen = false,
  onClose,
  children,
  title,
  showHeader = false,
  background = 'section',
  borderRadius = 12,
  isHidden,
  ...props
}: IModal) => {
  if (isHidden || !isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <S.Wrapper
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      data-testid="modal-wrapper"
    >
      <S.Overlay
        onClick={handleOverlayClick}
        role="button"
        aria-label="Close modal"
        data-testid="modal-overlay"
      />

      <S.Container
        background={background}
        borderRadius={borderRadius}
        data-testid="modal"
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {showHeader && (
          <S.Header>
            <S.HeaderRow>
              {title && (
                <TextDisplay
                  text={title}
                  fontSize={18}
                  fontWeight="semibold"
                  color="content"
                />
              )}

              <S.CloseButton
                onClick={onClose}
                role="button"
                aria-label="Close modal"
              >
                <Icon icon="x" size={20} color="content" />
              </S.CloseButton>
            </S.HeaderRow>
          </S.Header>
        )}

        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
