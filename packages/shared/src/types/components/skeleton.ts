import type { ColorKeys } from '../../theme';
import type { IBaseVisibility, IBaseLayout } from './base-props';

export interface ISkeleton extends IBaseVisibility, IBaseLayout {
  /** Takes full width and height of parent */
  isFullSize?: boolean;
  /** Background color from theme */
  background?: ColorKeys;
  /** Border radius in pixels */
  borderRadius?: number;
}
