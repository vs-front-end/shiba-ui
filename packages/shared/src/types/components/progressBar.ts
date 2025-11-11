import type { ColorKeys } from '../../theme';
import type { IBaseVisibility, IBaseLayout } from './base-props';

export interface IProgressBar extends IBaseVisibility, IBaseLayout {
  /** Progress value (0-100) */
  progressValue?: number;
  /** Background color from theme */
  background?: ColorKeys;
  /** Hides the progress label */
  hideLabel?: boolean;
}
