import type { ColorKeys } from '../../theme';
import type {
  IBaseVisibility,
  IBaseInteraction,
  IBaseLayout,
  IBaseStyling,
} from './base-props';

export interface ITextArea
  extends IBaseVisibility,
    IBaseInteraction,
    IBaseLayout,
    IBaseStyling {
  /** Textarea value */
  value?: string;
  /** Callback when value changes */
  handleChange?: (value: string) => void;
  /** Label text */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Shows error state */
  hasError?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Text color from theme */
  textColor?: ColorKeys;
}
