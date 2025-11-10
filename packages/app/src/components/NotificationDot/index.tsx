import * as S from './styles';
import type { INotificationDot } from '@shiba-ui/shared';
import { Icon } from '../Icon';
import { TextDisplay } from '../TextDisplay';

export const NotificationDot = ({
  icon,
  count,
  iconColor,
  dotColor,
  textColor,
  size,
  isHidden,
  ...props
}: INotificationDot) => {
  if (size && size < 28) return null;

  const getFontSize = (iconSize: number) => {
    let fontSize = iconSize * 0.15;
    if (iconSize >= 40) fontSize = iconSize * 0.3;

    return Math.max(10, fontSize);
  };

  const getDotSize = (iconSize: number) => {
    let dotSize = iconSize * 0.8;
    if (iconSize >= 40) dotSize = iconSize * 0.65;

    return Math.max(16, dotSize);
  };

  const iconSize = size || 36;
  const dotSize = getDotSize(iconSize);
  const positioning = Math.max(-8, -(iconSize * 0.8));

  if (isHidden) return null;

  return (
    <S.Container data-testid="notification-dot" {...props}>
      <Icon icon={icon || 'bell'} color={iconColor} size={iconSize} />

      {count && count > 0 && (
        <S.Dot
          positioning={positioning}
          dotSize={dotSize}
          dotColor={dotColor}
          data-testid="notification-count"
        >
          <TextDisplay
            text={String(count > 9 ? '9+' : count)}
            color={textColor}
            fontSize={getFontSize(iconSize)}
          />
        </S.Dot>
      )}
    </S.Container>
  );
};
