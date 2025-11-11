import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type { IBaseVisibility, IBaseInteraction } from './base-props';

export interface ICheckbox extends IBaseVisibility, IBaseInteraction {
  /** Checked state */
  isChecked?: boolean;
  /** Callback when checked state changes */
  onChange?: (checked: boolean) => void;
  /** Checkbox size in pixels */
  size?: number;
  /** Background color from theme */
  background?: ColorKeys;
  /** Check icon to display when checked */
  icon?: IconKeys;
  /** Icon color from theme */
  iconColor?: ColorKeys;
}
