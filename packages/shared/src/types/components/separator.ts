import type { ColorKeys } from '../../theme';
import type { IBaseVisibility } from './base-props';

export type OrientationType = 'horizontal' | 'vertical';

export interface ISeparator extends IBaseVisibility {
  /** Separator orientation */
  orientation?: OrientationType;
  /** Separator width in pixels */
  width?: number;
  /** Separator color from theme */
  color?: ColorKeys;
}
