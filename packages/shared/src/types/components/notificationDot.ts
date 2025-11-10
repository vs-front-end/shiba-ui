import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';

export interface INotificationDot {
  icon?: IconKeys;
  count?: number;
  iconColor?: ColorKeys;
  dotColor?: ColorKeys;
  textColor?: ColorKeys;
  size?: number;
  isHidden?: boolean;
}
