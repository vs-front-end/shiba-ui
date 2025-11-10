import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';

export interface ISegmentedButtonOption {
  value: string;
  label: string;
  leftIcon?: IconKeys;
  rightIcon?: IconKeys;
  textColor?: ColorKeys;
  activeColor?: ColorKeys;
  activeBackground?: ColorKeys;
  fontSize?: number;
  iconColor?: ColorKeys;
  iconSize?: number;
}

export interface ISegmentedButton {
  options: ISegmentedButtonOption[];
  activeValue?: string;
  handleValueChange: (value: string) => void;
  background?: ColorKeys;
  borderColor?: ColorKeys;
  borderWidth?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  isHidden?: boolean;
}
