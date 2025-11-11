import type { ColorKeys } from '../../theme';
import type { IBaseVisibility } from './base-props';

export interface IProgressCircle extends IBaseVisibility {
  /** Progress value (0-100) */
  progressValue?: number;
  /** Background color from theme */
  background?: ColorKeys;
  /** Circle size in pixels */
  size?: number;
}

