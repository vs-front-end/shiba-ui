import type { ColorKeys } from '../../theme';
import type { IBaseVisibility, IBaseInteraction } from './base-props';

export interface ISwitch extends IBaseVisibility, IBaseInteraction {
  /** Checked/on state */
  isChecked?: boolean;
  /** Callback when checked state changes */
  onChange?: (isChecked: boolean) => void;
  /** Switch size in pixels */
  size?: number;
  /** Background color from theme */
  background?: ColorKeys;
}
