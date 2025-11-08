import { ColorKeys } from '../../theme';
import React from 'react';

export interface IBanner extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  isHidden?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;

  width?: number;
  height?: number;
  background?: ColorKeys;
  borderColor?: ColorKeys;
}
