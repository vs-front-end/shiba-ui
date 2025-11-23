import * as S from './styles';
import type { IButton } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { Spinner } from '../Spinner';
import { getButtonTextColor } from '@shiba-ui/shared';

interface IButtonProps extends IButton {
  onPress: () => void;
}

export const Button = ({
  text,
  onPress,
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

  const handlePress = () => {
    if (!isDisabled && !isLoading && onPress) onPress();
  };

  return (
    <S.PressableWrapper
      width={props.width}
      onPress={handlePress}
      disabled={isDisabled || isLoading}
      accessibilityRole="button"
      accessibilityLabel={text}
      accessibilityState={{
        disabled: isDisabled || isLoading,
        busy: isLoading,
      }}
      data-testid="button"
    >
      <S.Container
        variant={variant}
        isDisabled={isDisabled}
        isLoading={isLoading}
        height={height}
        {...props}
      >
        {isLoading ? (
          <Spinner
            size={height ? height / 3 : 14}
            color={textColor || 'paper'}
          />
        ) : (
          <>
            {leftIcon && (
              <Icon icon={leftIcon} color={iconColor} size={iconSize} />
            )}

            {text && (
              <TextDisplay
                text={text}
                color={getButtonTextColor(textColor, variant || 'solid')}
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
    </S.PressableWrapper>
  );
};
