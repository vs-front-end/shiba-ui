import * as S from './styles';
import type { IBadge } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { TouchableOpacity } from 'react-native';

interface IBadgeProps extends IBadge {
  onPress: () => void;
}

export const Badge = ({
  text = 'Shiba UI',
  textSize = 14,
  textColor,
  leftIcon,
  rightIcon,
  isHidden,
  onPress,
  iconColor,
  iconSize = 14,
  ...props
}: IBadgeProps) => {
  if (isHidden) return null;

  const content = (
    <S.Container
      data-testid="badge"
      accessibilityRole="text"
      accessibilityLabel={text}
      {...props}
    >
      {leftIcon && <Icon icon={leftIcon} color={iconColor} size={iconSize} />}
      <TextDisplay text={text} color={textColor} fontSize={textSize} />
      {rightIcon && <Icon icon={rightIcon} color={iconColor} size={iconSize} />}
    </S.Container>
  );

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      {content}
    </TouchableOpacity>
  );
};
