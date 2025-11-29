import type { IBaseStyling } from './base-props';
import type { ReactNode } from 'react';

export interface IBottomDrawer extends IBaseStyling {
  /** Whether drawer is open */
  isOpen?: boolean;
  /** Callback when drawer is closed */
  onClose?: () => void;
  /** Drawer content */
  children?: ReactNode;
  /** Show handle line */
  showHandle?: boolean;
}
