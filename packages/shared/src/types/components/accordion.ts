import type { ColorKeys } from '../../theme';
import type { IconKeys } from './icon';
import type { IBaseVisibility, IBaseStyling } from './base-props';
import React from 'react';

export interface IAccordion extends IBaseVisibility, IBaseStyling {
  /** Accordion title text */
  title?: string;
  /** Title font size in pixels */
  titleSize?: number;
  /** Title text color */
  titleColor?: ColorKeys;
  /** Icon to display */
  icon?: IconKeys;
  /** Icon size in pixels */
  iconSize?: number;
  /** Icon color from theme */
  iconColor?: ColorKeys;
  /** Callback when accordion toggles */
  onToggle?: () => void;
  /** Accordion content */
  children?: React.ReactNode;
  /** Component width in pixels */
  width?: number;
}
