import * as S from './styles';
import type { IDialog } from '@shiba-ui/shared';
import { Button } from '../Button';
import { TextDisplay } from '../TextDisplay';

export const Dialog = ({
  isOpen = false,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  showConfirm = true,
  showCancel = true,
  onConfirm,
  onCancel,
  confirmVariant = 'solid',
  cancelVariant = 'outlined',
  confirmColor,
  cancelColor,
  titleColor = 'content',
  messageColor = 'accent',
  background = 'section',
  borderRadius = 12,
  isHidden,
  ...props
}: IDialog) => {
  if (isHidden || !isOpen) return null;

  const handleConfirm = () => {
    onConfirm?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  return (
    <S.Wrapper
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'dialog-title' : undefined}
      data-testid="dialog-wrapper"
    >
      <S.Overlay
        onClick={handleOverlayClick}
        role="button"
        aria-label="Close dialog"
        data-testid="dialog-overlay"
      />

      <S.Container
        background={background}
        borderRadius={borderRadius}
        data-testid="dialog"
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <S.Content>
          {title && (
            <TextDisplay
              text={title}
              fontSize={20}
              fontWeight="bold"
              color={titleColor}
              textAlign="center"
              id="dialog-title"
            />
          )}

          {message && (
            <TextDisplay
              text={message}
              fontSize={14}
              fontWeight="regular"
              color={messageColor}
              textAlign="center"
            />
          )}
        </S.Content>

        {(showConfirm || showCancel) && (
          <S.ButtonsContainer>
            {showCancel && (
              <S.ButtonWrapper>
                <Button
                  text={cancelText}
                  variant={cancelVariant}
                  onClick={handleCancel}
                  textColor={cancelColor}
                />
              </S.ButtonWrapper>
            )}

            {showConfirm && (
              <S.ButtonWrapper>
                <Button
                  text={confirmText}
                  variant={confirmVariant}
                  onClick={handleConfirm}
                  textColor={confirmColor}
                />
              </S.ButtonWrapper>
            )}
          </S.ButtonsContainer>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

