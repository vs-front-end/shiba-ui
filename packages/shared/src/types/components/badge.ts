import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type { IBaseVisibility } from './base-props';

export interface IBadge extends IBaseVisibility {
  /** Badge text content */
  text?: string;
  /** Text size in pixels */
  textSize?: number;
  /** Text color from theme */
  textColor?: ColorKeys;
  /** Border radius in pixels */
  borderRadius?: number;
  /** Background color from theme */
  background?: ColorKeys;
  /** Icon size in pixels */
  iconSize?: number;
  /** Icon color from theme */
  iconColor?: ColorKeys;
  /** Icon displayed on the right */
  rightIcon?: IconKeys;
  /** Icon displayed on the left */
  leftIcon?: IconKeys;
}

