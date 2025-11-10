import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';

export interface IButton {
  text?: string;
  isLoading?: boolean;
  isHidden?: boolean;
  isDisabled?: boolean;

  variant?: 'solid' | 'outlined' | 'text';

  rightIcon?: IconKeys;
  leftIcon?: IconKeys;
  iconColor?: ColorKeys;
  iconSize?: number;

  width?: number;
  height?: number;
  textColor?: ColorKeys;
  fontSize?: number;
  background?: ColorKeys;
  borderColor?: ColorKeys;
  borderWidth?: number;
  borderRadius?: number;
  gap?: string;
}
