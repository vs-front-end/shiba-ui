import { ColorKeys } from '../../theme';
import { IconKeys } from './icon';

export interface ITabOption {
  value: string;
  label: string;
  leftIcon?: IconKeys;
  rightIcon?: IconKeys;
  activeColor?: ColorKeys;
  iconColor?: ColorKeys;
  iconSize?: number;
}

export interface ITab {
  options: ITabOption[];
  activeValue: string;
  handleValueChange: (value: string) => void;
  borderColor?: ColorKeys;
  textColor?: ColorKeys;
  fontSize?: number;
  iconSize?: number;
  width?: number;
  height?: number;
  isHidden?: boolean;
}
