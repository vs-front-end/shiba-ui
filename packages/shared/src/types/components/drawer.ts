import type { ReactNode } from 'react';
import type { ColorKeys } from '../../theme';

export interface IDrawer {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  width?: string;
  background?: ColorKeys;
}
