import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type { IBaseVisibility, IBaseLayout, IBaseStyling } from './base-props';

export interface ISegmentedButtonOption {
  /** Option value */
  value: string;
  /** Option label */
  label: string;
  /** Icon displayed on the left */
  leftIcon?: IconKeys;
  /** Icon displayed on the right */
  rightIcon?: IconKeys;
  /** Text color from theme */
  textColor?: ColorKeys;
  /** Active state text color */
  activeColor?: ColorKeys;
  /** Active state background color */
  activeBackground?: ColorKeys;
  /** Font size in pixels */
  fontSize?: number;
  /** Icon color from theme */
  iconColor?: ColorKeys;
  /** Icon size in pixels */
  iconSize?: number;
}

export interface ISegmentedButton
  extends IBaseVisibility,
    IBaseLayout,
    IBaseStyling {
  /** Segmented button options */
  options: ISegmentedButtonOption[];
  /** Currently active option value */
  activeValue?: string;
  /** Callback when active option changes */
  handleValueChange: (value: string) => void;
}
