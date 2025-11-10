import type { ColorKeys } from '../../theme';

export interface IOtpInput {
  value?: string;
  handleChange?: (value: string) => void;
  length?: number;
  hasError?: boolean;
  errorMessage?: string;
  isHidden?: boolean;
  isDisabled?: boolean;

  background?: ColorKeys;
  borderColor?: ColorKeys;
  borderRadius?: number;
  borderWidth?: number;
  textColor?: ColorKeys;
  height?: number;
  width?: number;
  gap?: number;
}

