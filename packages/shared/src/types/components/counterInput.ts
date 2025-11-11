import type { ColorKeys } from '../../theme';
import type {
  IBaseVisibility,
  IBaseInteraction,
  IBaseLayout,
} from './base-props';

export interface ICounterInput
  extends IBaseVisibility,
    IBaseInteraction,
    IBaseLayout {
  /** Current counter value */
  value?: number;
  /** Minimum allowed value */
  minValue?: number;
  /** Maximum allowed value */
  maxValue?: number;
  /** Increment/decrement step */
  increaseBy?: number;
  /** Callback when value changes */
  handleChange?: (value: number) => void;
  /** Background color from theme */
  background?: ColorKeys;
  /** Border radius in pixels */
  borderRadius?: number;
  /** Button background color */
  buttonBackground?: ColorKeys;
  /** Displayed value color */
  valueColor?: ColorKeys;
  /** Icon color from theme */
  iconColor?: ColorKeys;
  /** Icon size in pixels */
  iconSize?: number;
}
