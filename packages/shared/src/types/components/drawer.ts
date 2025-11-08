import { ReactNode } from 'react';
import { ColorKeys } from '../../theme';

export interface IDrawer {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  width?: string;
  background?: ColorKeys;
}
