import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type {
  IBaseVisibility,
  IBaseInteraction,
  IBaseLayout,
  IBaseStyling,
} from './base-props';

export interface IButton
  extends IBaseVisibility,
    IBaseInteraction,
    IBaseLayout,
    IBaseStyling {
  /** Button text content */
  text?: string;
  /** Shows loading spinner state */
  isLoading?: boolean;
  /** Button visual variant */
  variant?: 'solid' | 'outlined' | 'text';
  /** Icon displayed on the right */
  rightIcon?: IconKeys;
  /** Icon displayed on the left */
  leftIcon?: IconKeys;
  /** Icon color from theme */
  iconColor?: ColorKeys;
  /** Icon size in pixels */
  iconSize?: number;
  /** Text color from theme */
  textColor?: ColorKeys;
  /** Text font size in pixels */
  fontSize?: number;
  /** Gap between icon and text */
  gap?: string;
}
