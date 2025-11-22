import * as S from './styles';
import type { IBadge } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';

interface IBadgeProps extends IBadge {
  onClick?: () => void;
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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  const isInteractive = !!onClick;

  return (
    <S.Container
      role={isInteractive ? 'button' : 'text'}
      data-testid="badge"
      aria-label={text}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={isInteractive ? 0 : undefined}
      isInteractive={isInteractive}
      {...props}
    >
      {leftIcon && <Icon icon={leftIcon} color={iconColor} size={iconSize} />}

      <TextDisplay
        text={text}
        color={textColor}
        fontSize={textSize}
        fontWeight="medium"
      />
      
      {rightIcon && <Icon icon={rightIcon} color={iconColor} size={iconSize} />}
    </S.Container>
  );
};
