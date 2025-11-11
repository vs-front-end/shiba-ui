import type { ColorKeys } from '../../theme';
import type {
  IBaseVisibility,
  IBaseInteraction,
  IBaseLayout,
  IBaseStyling,
} from './base-props';

export interface IOtpInput
  extends IBaseVisibility,
    IBaseInteraction,
    IBaseLayout,
    IBaseStyling {
  /** OTP value */
  value?: string;
  /** Callback when value changes */
  handleChange?: (value: string) => void;
  /** Number of OTP digits */
  length?: number;
  /** Shows error state */
  hasError?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Text color from theme */
  textColor?: ColorKeys;
  /** Gap between input fields in pixels */
  gap?: number;
}

