import type { ColorKeys } from '../../theme';
import type { IBaseVisibility, IBaseLayout } from './base-props';
import React from 'react';

export interface IBanner extends IBaseVisibility, IBaseLayout {
  /** Banner content */
  children?: React.ReactNode;
  /** Shows close button */
  showCloseButton?: boolean;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Background color from theme */
  background?: ColorKeys;
  /** Border color from theme */
  borderColor?: ColorKeys;
}
