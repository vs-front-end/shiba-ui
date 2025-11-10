import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';

export type ToastType = 'success' | 'error' | 'warning';

export interface IToast {
  id?: string;
  message?: string;
  timeout?: number;
  variant?: ToastType;
  icon?: IconKeys;
  background?: ColorKeys;
  color?: ColorKeys;
  width?: number;
  height?: number;
  borderRadius?: number;
  isHidden?: boolean;
}
