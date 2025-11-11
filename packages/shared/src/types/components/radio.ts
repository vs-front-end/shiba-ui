import type { ColorKeys } from '../../theme';
import type { IBaseVisibility, IBaseInteraction } from './base-props';

export interface IRadio extends IBaseVisibility, IBaseInteraction {
  /** Selected state */
  isSelected?: boolean;
  /** Callback when selection changes */
  onChange?: (selected: boolean) => void;
  /** Radio button size in pixels */
  size?: number;
  /** Background color from theme */
  background?: ColorKeys;
}
