import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type { IBaseVisibility } from './base-props';

export interface INotificationDot extends IBaseVisibility {
  /** Icon to display */
  icon?: IconKeys;
  /** Notification count */
  count?: number;
  /** Icon color from theme */
  iconColor?: ColorKeys;
  /** Dot background color */
  dotColor?: ColorKeys;
  /** Text color from theme */
  textColor?: ColorKeys;
  /** Notification size in pixels */
  size?: number;
}
