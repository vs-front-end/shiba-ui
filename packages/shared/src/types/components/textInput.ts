import type { ColorKeys } from '../../theme';
import type {
  IBaseVisibility,
  IBaseInteraction,
  IBaseLayout,
  IBaseStyling,
} from './base-props';

export interface ITextInput
  extends IBaseVisibility,
    IBaseInteraction,
    IBaseLayout,
    IBaseStyling {
  /** Input value */
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
  /** Keyboard type */
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'url'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
}
