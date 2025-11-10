import * as S from './styles';
import type { IBadge } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';

interface IBadgeProps extends IBadge {
  onClick: () => void;
}

export const Badge = ({
  text = 'Shiba UI',
  textSize = 14,
  textColor,
  leftIcon,
  rightIcon,
  isHidden,
  onClick,
  iconColor,
  iconSize = 14,
  ...props
}: IBadgeProps) => {
  if (isHidden) return null;

  return (
    <S.Container
      role="status"
      data-testid="badge"
      aria-label={text}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <Icon icon={leftIcon} color={iconColor} size={iconSize} />}
      <TextDisplay text={text} color={textColor} fontSize={textSize} />
      {rightIcon && <Icon icon={rightIcon} color={iconColor} size={iconSize} />}
    </S.Container>
  );
};
