import * as S from './styles';
import type { IButton } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { Spinner } from '../Spinner';
import { getBtnContentColor } from '@shiba-ui/shared';

interface IButtonProps extends IButton {
  onClick?: () => void;
}

export const Button = ({
  text,
  onClick,
  isLoading,
  isHidden,
  isDisabled,
  variant,
  leftIcon,
  rightIcon,
  iconColor,
  iconSize = 18,
  textColor,
  height,
  fontSize = 14,
  ...props
}: IButtonProps) => {
  if (isHidden) return null;

  const handleClick = () => {
    if (!isDisabled && !isLoading && onClick) onClick();
  };

  return (
    <S.Container
      role="button"
      type="button"
      aria-label={text}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      data-testid="button"
      onClick={handleClick}
      disabled={isDisabled}
      variant={variant}
      {...props}
    >
      {isLoading ? (
        <Spinner size={height ? height / 3 : 14} color={textColor || 'paper'} />
      ) : (
        <>
          {leftIcon && (
            <Icon
              icon={leftIcon}
              color={getBtnContentColor(iconColor, variant || 'solid')}
              size={iconSize}
            />
          )}

          {text && (
            <TextDisplay
              text={text}
              color={getBtnContentColor(textColor, variant || 'solid')}
              fontSize={fontSize}
              fontWeight="medium"
            />
          )}

          {rightIcon && (
            <Icon
              icon={rightIcon}
              color={getBtnContentColor(iconColor, variant || 'solid')}
              size={iconSize}
            />
          )}
        </>
      )}
    </S.Container>
  );
};
