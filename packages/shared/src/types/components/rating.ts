import type { ColorKeys } from '../../theme';
import type { IBaseVisibility } from './base-props';

export interface IRating extends IBaseVisibility {
  /** Current rating value */
  rating?: number;
  /** Maximum number of stars */
  maxStars?: number;
  /** Prevents user interaction */
  readonly?: boolean;
  /** Callback when rating changes */
  handleChange?: (rating: number) => void;
  /** Star size in pixels */
  size?: number;
  /** Gap between stars in pixels */
  gap?: number;
  /** Background color from theme */
  background?: ColorKeys;
}
