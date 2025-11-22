import * as S from './styles';
import type { IDialog } from '@shiba-ui/shared';
import { TouchableWithoutFeedback } from 'react-native';
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

  return (
    <S.Wrapper
      accessibilityRole="none"
      data-testid="dialog-wrapper"
    >
      <TouchableWithoutFeedback onPress={handleCancel}>
        <S.Overlay
          accessibilityRole="button"
          accessibilityLabel="Close dialog"
          data-testid="dialog-overlay"
        />
      </TouchableWithoutFeedback>

      <S.Container
        background={background}
        borderRadius={borderRadius}
        data-testid="dialog"
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
                  onPress={handleCancel}
                  textColor={cancelColor}
                />
              </S.ButtonWrapper>
            )}

            {showConfirm && (
              <S.ButtonWrapper>
                <Button
                  text={confirmText}
                  variant={confirmVariant}
                  onPress={handleConfirm}
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