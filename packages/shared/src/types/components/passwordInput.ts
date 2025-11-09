import { ColorKeys } from '../../theme';

export interface IPasswordInput {
  value?: string;
  handleChange?: (value: string) => void;
  placeholder?: string;
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

  iconColor?: ColorKeys;
  iconSize?: number;
}
