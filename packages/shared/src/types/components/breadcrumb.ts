import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';

export interface IBreadcrumbItem {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  icon?: IconKeys;
  iconSize?: number;
  iconColor?: ColorKeys;
}

export interface IBreadcrumb {
  items: IBreadcrumbItem[];
  separator?: string;
  fontSize?: number;
  color?: ColorKeys;
  activeColor?: ColorKeys;
  separatorColor?: ColorKeys;
  maxItems?: number;
  isHidden?: boolean;
}
