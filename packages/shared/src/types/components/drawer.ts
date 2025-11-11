import type { ReactNode } from 'react';
import type { ColorKeys } from '../../theme';

export interface IDrawer {
  /** Drawer content */
  children?: ReactNode;
  /** Open/close state */
  isOpen?: boolean;
  /** Callback when drawer closes */
  onClose?: () => void;
  /** Drawer width (CSS value) */
  width?: string;
  /** Background color from theme */
  background?: ColorKeys;
}
