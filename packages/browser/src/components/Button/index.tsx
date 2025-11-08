import * as S from './styles';
import { IButton } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { Spinner } from '../Spinner';

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
}: IButton) => {
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
            <Icon icon={leftIcon} color={iconColor} size={iconSize} />
          )}

          {text && (
            <TextDisplay
              text={text}
              color={textColor}
              fontSize={fontSize}
              fontWeight="medium"
            />
          )}

          {rightIcon && (
            <Icon icon={rightIcon} color={iconColor} size={iconSize} />
          )}
        </>
      )}
    </S.Container>
  );
};
