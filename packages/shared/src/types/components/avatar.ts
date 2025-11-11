import type { ColorKeys } from '../../theme';
import type { IBaseVisibility } from './base-props';

export interface IAvatar extends IBaseVisibility {
  /** Username to display as fallback */
  username?: string;
  /** Image URL for avatar */
  image?: string;
  /** Avatar size in pixels */
  size?: number;
  /** Background color from theme */
  background?: ColorKeys;
  /** Text color from theme */
  textColor?: ColorKeys;
}
