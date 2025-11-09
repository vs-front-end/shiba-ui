import * as S from './styles';
import { IBadge } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';
import { TouchableOpacity } from 'react-native';

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
}: IBadge) => {
  if (isHidden) return null;

  const content = (
    <S.Container role="status" data-testid="badge" aria-label={text} {...props}>
      {leftIcon && <Icon icon={leftIcon} color={iconColor} size={iconSize} />}
      <TextDisplay text={text} color={textColor} fontSize={textSize} />
      {rightIcon && <Icon icon={rightIcon} color={iconColor} size={iconSize} />}
    </S.Container>
  );

  if (onClick) {
    return (
      <TouchableOpacity onPress={onClick} activeOpacity={0.8}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};
