import type { ColorKeys } from '../../theme';
import type { IBaseVisibility, IBaseLayout } from './base-props';

export interface IRange extends IBaseVisibility, IBaseLayout {
  /** Current range value */
  value?: number;
  /** Callback when value changes */
  handleChange?: (range: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Background color from theme */
  background?: ColorKeys;
}
