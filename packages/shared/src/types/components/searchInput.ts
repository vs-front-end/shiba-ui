import type { ColorKeys } from '../../theme';
import type {
  IBaseVisibility,
  IBaseInteraction,
  IBaseLayout,
  IBaseStyling,
} from './base-props';

export interface ISearchInput
  extends IBaseVisibility,
    IBaseInteraction,
    IBaseLayout,
    IBaseStyling {
  /** Input value */
  value?: string;
  /** Callback when value changes */
  handleChange?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Text color from theme */
  textColor?: ColorKeys;
  /** Icon color from theme */
  iconColor?: ColorKeys;
  /** Icon size in pixels */
  iconSize?: number;
}
