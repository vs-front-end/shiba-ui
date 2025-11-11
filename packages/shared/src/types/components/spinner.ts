import type { ColorKeys } from '../../theme';
import type { IBaseVisibility } from './base-props';

export interface ISpinner extends IBaseVisibility {
  /** Spinner size in pixels */
  size?: number;
  /** Spinner color from theme */
  color?: ColorKeys;
}
