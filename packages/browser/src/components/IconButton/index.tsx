import * as S from './styles';
import type { IIconButton } from '@shiba-ui/shared';
import { Icon } from '../Icon';

interface IIconButtonBrowser extends IIconButton {
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  onClick,
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
}: IIconButtonBrowser) => {
  if (isHidden) return null;

  const handleClick = () => {
    if (!isDisabled && (onClick || onPress)) {
      onClick?.();
      onPress?.();
    }
  };

  return (
    <S.Container
      role="button"
      type="button"
      aria-label={`${icon} button`}
      aria-disabled={isDisabled}
      data-testid="icon-button"
      onClick={handleClick}
      disabled={isDisabled}
      size={size}
      background={background}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
      isDisabled={isDisabled}
    >
      <Icon icon={icon} size={iconSize} color={iconColor} />
    </S.Container>
  );
};

