import * as S from './styles';
import type { IIconButton } from '@shiba-ui/shared';
import { Icon } from '../Icon';

export const IconButton = ({
  icon,
  onPress,
  isHidden,
  isDisabled,
  size = 36,
  iconSize = 16,
  iconColor = 'paper',
  background = 'primary',
  borderRadius = 8,
  borderColor,
  borderWidth = 0,
}: IIconButton) => {
  if (isHidden) return null;

  const handlePress = () => {
    if (!isDisabled && onPress) onPress();
  };

  return (
    <S.PressableWrapper
      size={size}
      onPress={handlePress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={`${icon} button`}
      accessibilityState={{ disabled: isDisabled }}
      data-testid="icon-button"
    >
      <S.Container
        size={size}
        background={background}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderWidth={borderWidth}
        isDisabled={isDisabled}
      >
        <Icon icon={icon} size={iconSize} color={iconColor} />
      </S.Container>
    </S.PressableWrapper>
  );
};
