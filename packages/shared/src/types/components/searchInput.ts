import type { ColorKeys } from '../../theme';

export interface ISearchInput {
  value?: string;
  handleChange?: (value: string) => void;
  placeholder?: string;
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
