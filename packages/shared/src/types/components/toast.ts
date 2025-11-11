import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type { IBaseVisibility, IBaseLayout } from './base-props';

export type ToastType = 'success' | 'error' | 'warning';

export interface IToast extends IBaseVisibility, IBaseLayout {
  /** Toast unique identifier */
  id?: string;
  /** Toast message text */
  message?: string;
  /** Auto-close timeout in milliseconds */
  timeout?: number;
  /** Toast variant type */
  variant?: ToastType;
  /** Icon to display */
  icon?: IconKeys;
  /** Background color from theme */
  background?: ColorKeys;
  /** Text color from theme */
  color?: ColorKeys;
  /** Border radius in pixels */
  borderRadius?: number;
}
