import { ColorKeys } from '../../theme';
import { IconKeys } from './icon';

export interface INotificationDot {
  icon?: IconKeys;
  count?: number;
  iconColor?: ColorKeys;
  dotColor?: ColorKeys;
  textColor?: ColorKeys;
  size?: number;
  isHidden?: boolean;
}
