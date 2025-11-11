import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type { IBaseVisibility, IBaseLayout } from './base-props';

export interface ITabOption {
  /** Tab option value */
  value: string;
  /** Tab option label */
  label: string;
  /** Icon displayed on the left */
  leftIcon?: IconKeys;
  /** Icon displayed on the right */
  rightIcon?: IconKeys;
  /** Active state color */
  activeColor?: ColorKeys;
  /** Icon color from theme */
  iconColor?: ColorKeys;
  /** Icon size in pixels */
  iconSize?: number;
}

export interface ITab extends IBaseVisibility, IBaseLayout {
  /** Tab options */
  options: ITabOption[];
  /** Currently active tab value */
  activeValue: string;
  /** Callback when active tab changes */
  handleValueChange: (value: string) => void;
  /** Border color from theme */
  borderColor?: ColorKeys;
  /** Text color from theme */
  textColor?: ColorKeys;
  /** Font size in pixels */
  fontSize?: number;
  /** Icon size in pixels */
  iconSize?: number;
}
