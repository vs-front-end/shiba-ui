import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type { IBaseVisibility } from './base-props';

export interface IBreadcrumbItem {
  /** Item label text */
  label: string;
  /** Callback when item is clicked */
  onClick?: () => void;
  /** Active state */
  isActive?: boolean;
  /** Icon to display */
  icon?: IconKeys;
  /** Icon size in pixels */
  iconSize?: number;
  /** Icon color from theme */
  iconColor?: ColorKeys;
}

export interface IBreadcrumb extends IBaseVisibility {
  /** Breadcrumb items */
  items: IBreadcrumbItem[];
  /** Separator between items */
  separator?: string;
  /** Font size in pixels */
  fontSize?: number;
  /** Text color from theme */
  color?: ColorKeys;
  /** Active item color */
  activeColor?: ColorKeys;
  /** Separator color */
  separatorColor?: ColorKeys;
  /** Maximum number of items to display */
  maxItems?: number;
}
